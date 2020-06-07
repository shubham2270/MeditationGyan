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

const ArticleHeading = styled.Text`
  font-size: ${typography.heading};
  font-weight: bold;
  text-align: center;
  padding: 20px 0px;
  color: ${(props) => props.textColor};
`;

const ArticleIntro = styled.Text`
  font-size: ${typography.content};
  padding: 20px;
  text-align: justify;
  color: ${(props) => props.textColor};
`;

const Title = styled.Text`
  font-size: ${typography.title};
  text-align: center;
  padding: 2px;
  background-color: #ffecb8;
  font-weight: bold;
  color: #85691e;
  margin-top: 20px;
`;

const Content = styled.Text`
  font-size: ${typography.content};
  margin: 10px 20px 40px 20px;
  text-align: justify;
  color: ${(props) => props.textColor};
`;

const ScrollViewContainer = styled.ScrollView`
  flex: 1;
  padding-bottom: 10px;
`;

const Container = styled.View`
  flex: 1;
`;

const MainContainer = styled.View`
  flex: 1;
`;

const LinkScrollViewWrapper = styled.ScrollView`
  padding: 20px;
`;

const OptionText = styled.Text`
  font-size: 18px;
  align-self: flex-start;
  margin-top: 1px;
  font-weight: bold;
`;

const OptionIconContainer = styled.View`
  margin-right: 12px;
`;

const ShareWrapper = styled.View`
  border: 1px solid grey;
  padding: 10px;
  border-radius: 5px;
`;

const ShareText = styled.Text`
  background-color: #7f171f;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
  color: white;
`;

const CheckForUpdate = styled(ShareText)`
  background-color: yellowgreen;
  color: black;
`;

const AdMobWrapper = styled.View`
  background-color: ${(props) => props.backgroundColor};
`;

const KabirImage = styled.Image`
  width: 60%;
  height: 250px;
  border-radius: 5px;
  border: 2px solid orange;
`;

const ImageContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 8px 0px;
`;

export {
  ImageContainer,
  KabirImage,
  CheckForUpdate,
  AdMobWrapper,
  ShareText,
  ShareWrapper,
  OptionIconContainer,
  OptionText,
  LinkScrollViewWrapper,
  CardWrapper,
  CardText,
  CardTouchable,
  CardImageBackground,
  ArticleHeading,
  ArticleIntro,
  Title,
  Content,
  ScrollViewContainer,
  Container,
  MainContainer,
};
