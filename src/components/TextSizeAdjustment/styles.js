import styled from "styled-components";

const TextSizeButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 5px;
  align-items: center;
`;

const TestSizeButton = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-left: 10px;
  background-color: ${(props) => (props.disabled ? "grey" : "orange")};
  border-radius: 50px;
`;

const TextSizeName = styled.Text`
  font-weight: bold;
  color: grey;
  position: absolute;
  left: 16px;
`;

export { TextSizeButtonWrapper, TestSizeButton, TextSizeName };
