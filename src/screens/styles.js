import styled from "styled-components";

import typography from "src/constants/typography";

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

const DrawerHeader = styled.View`
  margin-top: 20px;
`;

const LogoWrapper = styled.View`
  margin-top: ${(props) => props.vh * 2}px;
  padding: 5%;
  display: flex;
  flex-direction: row;
`;

const TitleWrapper = styled.View`
  display: flex;
  padding-left: 10px;
  align-items: flex-start;
`;

const ToogleWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 16px;
`;

export {
  ToogleWrapper,
  TitleWrapper,
  LogoWrapper,
  DrawerHeader,
  ImageContainer,
  KabirImage,
  AdMobWrapper,
  ArticleHeading,
  ArticleIntro,
  Title,
  Content,
  ScrollViewContainer,
  Container,
  MainContainer,
};
