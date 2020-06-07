import styled from "styled-components";

const TextSizeButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 5px;
`;

const TestSizeButton = styled.TouchableHighlight`
  width: 60px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-left: 10px;
  background-color: orange;
  border-radius: 5px;
`;

export { TextSizeButtonWrapper, TestSizeButton };
