import styled from "styled-components";

// import typography from "./constants";

export const typography = {
  heading: "25px",
  title: "20px",
  content: "18px",
};

const CardTouchable = styled.TouchableOpacity`
  width: 180px;
  height: 120px;
  border-radius: 8px;
  margin-top: 12px;
`;

const CardImageBackground = styled.ImageBackground`
  border-radius: 8px;
  /* display: flex; */
  /* align-items: center; */
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
`;

const ArticleIntro = styled.Text`
  font-size: ${typography.content};
  padding: 20px;
  text-align: justify;
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
`;

const AppNameWrapper = styled.View`
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;

const Name = styled.Text`
  font-size: ${typography.heading};
  margin-left: 10px;
  font-size: 20px;
`;

const Logo = styled.Image`
  width: 25px;
  height: 25px;
  border-radius: 50px;
`;

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

export {
  CardWrapper,
  NoInternetText,
  CardText,
  CardTouchable,
  CardImageBackground,
  ArticleHeading,
  ArticleIntro,
  Title,
  Content,
  AppNameWrapper,
  Name,
  Logo,
  NoInternetTextWrapper,
};
