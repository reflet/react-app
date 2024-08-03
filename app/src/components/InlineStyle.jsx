
function InlineStyle () {
  const containerStyle = {
    width: "100%",
    padding: "5px 16px"
  };

  const textStyle = {
    color: "blue",
    textAlign: "center",
    margin: "0"
  };

  return (
    <>
      <div style={{ width: "100%", padding: "5px 16px" }}>
        <p style={{ color: "blue", textAlign: "center", margin: "0" }}>Hello World!!</p>
      </div>

      <div style={containerStyle}>
        <p style={textStyle}>Hello World!!</p>
      </div>
    </>
  );
}

export default InlineStyle;
