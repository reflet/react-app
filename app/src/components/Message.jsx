function Message (props) {
  // propsを分割代入する
  const {color, children} = props;

  // スタイル定義
  const contentStyle = {
    color: color,
    fontSize: "20px"
  };

  return (
    <p style={contentStyle}>{children}</p>
  );
}

export default Message;
