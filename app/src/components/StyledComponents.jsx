import styled from "styled-components";

const SContainer = styled.div`
  width: 50%;
  border: solid 1px #aaa;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #aaa;
`;

const SButton = styled.button`
  background-color: #ddd;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #aaa;
    color: #fff;
    cursor: pointer;
  }
`;

function StyledComponents () {
  return (
    <>
      <SContainer>
        <STitle>styled componentsです</STitle>
        <SButton>ボタン</SButton>
      </SContainer>
    </>
  );
}

export default StyledComponents;
