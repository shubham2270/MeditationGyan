import styled from "styled-components";

import { typography } from "../../constants/Typography";
import Colors from "../../constants/Colors";

const DoheCardWrapper = styled.View`
  width: 90%;
  padding: 10px;
  border: 1px solid ${Colors.lightGray};
  margin: 10px 0px;
  border-radius: 5px;
  align-self: center;
`;

const DohaWrapper = styled.View`
  display: flex;
  align-items: center;
`;

const Doha = styled.Text`
  font-size: ${typography.content};
  font-weight: bold;
  color: orange;
`;

const Meaning = styled.Text`
  margin: 10px 0px;
  font-size: ${typography.small};
  text-align: justify;
  line-height: 23px;
`;

const ShareIconWrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 80px;
  justify-content: space-between;
`;

const DohaNumber = styled.Text`
  font-size: ${typography.content};
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export {
  DoheCardWrapper,
  DohaWrapper,
  Doha,
  Meaning,
  ShareIconWrapper,
  DohaNumber,
};
