import { useState } from 'react';
import axios from 'axios';

export const useFetchBooks = () => {
  const [bookList, setBookList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onClickFetchBook = () => {
    // ボタン押下時にローディングフラグをON、エラーフラグをOFFに更新する
    setIsLoading(true);
    setIsError(false);
    setBookList([]);

    // Google Books APIへリクエストする
    //
    // <ドキュメント>
    // https://developers.google.com/books/docs/v1/reference/volumes/list?hl=ja
    const title = '転生したらスライム';
    const page = 1;
    const perPage = 10;
    axios
      .get('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: `intitle:${title}`,
          maxResults: perPage,
          startIndex: page - 1,
          orderBy: 'newest',
        }
      })
      .then(result => {
        const books = result.data.items.map(book => {
          const info = book.volumeInfo || null;
          const isbn = info.industryIdentifiers || null;
          const isbn10 = isbn[0] ? isbn[0].identifier : null;
          const isbn13 = isbn[1] ? isbn[1].identifier : null;

          return {
            // ID
            id: book.id,
            // タイトル
            title: info.title,
            // 著者名
            publisher: info.publisher,
            // 出版日
            publishedDate: info.publishedDate,
            // 説明文（あらすじなど）
            description: info.description,
            // ISBN10 / ISBN13
            isbn: (isbn10 && isbn13) ? `${isbn10} / ${isbn13}` : isbn10,
            // サムネイル画像
            image: info.imageLinks ? info.imageLinks.thumbnail : '',
          };
        })
        setBookList(books);
      })
      .catch((e) => {
        // エラーの場合は、エラーフラグをONに更新する
        setIsError(true);
        throw e;
      })
      .finally(() => {
        // 処理完了後は、ローディングフラグをOFFに更新する
        setIsLoading(false);
      });
  }
  return { bookList, isLoading, isError, onClickFetchBook }
};
