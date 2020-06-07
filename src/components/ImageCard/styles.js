import styled from "styled-components";

import typography from "src/constants/typography";

const CardTouchable = styled.TouchableOpacity`
  width: 45%;
  height: 120px;
  border-radius: 8px;
  margin-top: 12px;
`;

const CardImageBackground = styled.ImageBackground`
  border-radius: 8px;
  background-color: purple;
  justify-content: center;
  font-size: 12px;
  flex: 1;
`;

const CardWrapper = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const CardText = styled.Text`
  font-size: ${typography.content};
  font-weight: bold;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
  text-align: center;
`;

export { CardImageBackground, CardText, CardTouchable, CardWrapper };
