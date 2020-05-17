import styled from "styled-components";

const Card = styled.TouchableOpacity`
  width: 180px;
  height: 100px;
  background-color: yellowgreen;
  border-radius: 8px;
  margin-top: 12px;
`;

const CardWrapper = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export { Card, CardWrapper };
