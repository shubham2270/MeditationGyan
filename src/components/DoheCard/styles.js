import styled from "styled-components";

// import { typography } from "src/constants/typography";
import Colors from "src/constants/Colors";

const typography = {
  heading: "25px",
  title: "20px",
  content: "18px",
  small: "16px",
};

const DoheCardWrapper = styled.View`
  width: ${(props) => (props.dohaTextSize > 18 ? 99 : 90)}%;
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
  font-size: ${(props) => `${props.dohaTextSize}px`};
  font-weight: bold;
  color: orange;
`;

const Meaning = styled.Text`
  margin: 10px 0px;
  font-size: ${(props) => `${props.contentTextSize}px`};
  text-align: justify;
  line-height: ${(props) => (props.contentTextSize > 16 ? 30 : 23)}px;
  color: ${(props) => props.textColor};
`;

const ShareIconWrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: ${(props) => (props.showHeart ? 40 : 25)}%;
  justify-content: space-between;
`;

const DohaNumber = styled.Text`
  font-size: ${typography.content};
  color: ${(props) => props.textColor};
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const HeartIconWrapper = styled.TouchableOpacity`
  padding: 5px;
  padding-bottom: 0px;
`;

export {
  HeartIconWrapper,
  DoheCardWrapper,
  DohaWrapper,
  Doha,
  Meaning,
  ShareIconWrapper,
  DohaNumber,
};
