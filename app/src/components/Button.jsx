import { useState, useEffect } from 'react';

function Button () {
  // stateの定義
  const [num, setNum] = useState(0);

  // effectの定義
  useEffect(() => {
    if (num > 0) {
      alert('change (' + num + ')');
    }
  }, [num]);

  const onClickButton = () => {
    setNum((num) => num + 1);
  };

  return (
    <button style={{ margin: "15px" }} onClick={ onClickButton }>ボタン ({num})</button>
  );
}

export default Button;
