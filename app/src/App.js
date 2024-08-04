import { useFetchBooks } from './hooks/useFetchBooks';

function App() {
  const { bookList, isLoading, isError, onClickFetchBook } = useFetchBooks();

  return (
    <div>
      <button onClick={onClickFetchBook}>書籍検索</button>

      {/* エラーの場合は、メッセージを表示する */}
      {isError && <p style={{ color: "red" }}>エラーが発生しました。</p>}

      {/* ローディング中は表示を切り替える */}
      <ul>
        {isLoading ? (
          <li>
            <p>データ取得中です</p>
          </li>
        ) : (
          bookList.map(book => (
            <li key={book.id}>
              <img src={book.image} alt={book.title} />
              <p>{ `[${book.publishedDate}] ${book.title} (${book.publisher})` }</p>
              <p>{ book.isbn }</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
export default App;
