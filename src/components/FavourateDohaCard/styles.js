import styled from "styled-components";

import {
  CardWrapper,
  CardText as StyledCardText,
  CardTouchable as StyledCardTouchable,
  CardImageBackground as StyledCardImageBackground,
} from "src/components/ImageCard/styles";

const CardTouchable = styled(StyledCardTouchable)`
  width: 90%;
  height: 80px;
`;

const CardText = styled(StyledCardText)`
  font-size: 21px;
  background: transparent;
  position: absolute;
  top: 5px;
  right: 15px;
`;

const SecondaryCardText = styled.Text`
  font-size: 16px;
  position: absolute;
  right: 16px;
  top: 40px;
  font-weight: bold;
`;

const CountText = styled.Text`
  color: red;
`;

export { CardTouchable, CardText, SecondaryCardText, CountText };
