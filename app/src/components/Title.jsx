
function Title ({color, children}) {
  // スタイル定義
  const contentStyle = {
    color: color,
    fontSize: "40px"
  };

  return (
    <h1 style={contentStyle}>{children}</h1>
  );
}

export default Title;
