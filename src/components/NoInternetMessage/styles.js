import styled from "styled-components";

const NoInternetText = styled.Text`
  font-size: 20px;
  color: red;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 2px solid red;
  padding: 5px;
  border-radius: 5px;
`;

const NoInternetTextWrapper = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export { NoInternetTextWrapper, NoInternetText };
