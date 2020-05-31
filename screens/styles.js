import styled from "styled-components";

const ThemeColor = {
  dark: {
    background: "#1c1c1c",
    text: "#f5f5f5",
  },
  light: {
    background: "#fff",
    text: "#000",
  },
};

const Theme = {
  text: (props) => (props.dark ? ThemeColor.dark.text : ThemeColor.light.text),
  bg: (props) =>
    props.dark ? ThemeColor.dark.background : ThemeColor.light.background,
};

export const typography = {
  heading: "25px",
  title: "20px",
  content: "18px",
};

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
  color: ${Theme.text};
`;

const ArticleIntro = styled.Text`
  font-size: ${typography.content};
  padding: 20px;
  text-align: justify;
  color: ${Theme.text};
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
  color: ${Theme.text};
`;

const AppNameWrapper = styled.View`
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-items: center;
  color: ${Theme.text};
`;

const Name = styled.Text`
  font-size: ${typography.heading};
  margin-left: 10px;
  font-size: 20px;
  color: ${Theme.text};
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

const ScrollViewContainer = styled.ScrollView`
  flex: 1;
  padding-bottom: 10px;
  background-color: ${Theme.bg};
`;

const Container = styled.View`
  flex: 1;
  background-color: ${Theme.bg};
`;

const MainContainer = styled.View`
  flex: 1;
  background-color: ${Theme.bg};
`;

const ProgressContainer = styled.View`
  width: 200px;
  height: 20px;
  border-radius: 50px;
  background-color: ${Theme.bg};
  margin-top: 10px;
`;

const ProgressFill = styled.View`
  width: ${(props) => props.fill}%;
  height: 20px;
  border-radius: 50px;
  background-color: #ffcf40;
`;

const LinkScrollViewWrapper = styled.ScrollView`
  padding: 20px;
  background-color: ${Theme.bg};
`;

const OptionText = styled.Text`
  font-size: 20px;
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
  font-size: 20px;
  margin-bottom: 10px;
  color: white;
`;

const CheckForUpdate = styled(ShareText)`
  background-color: yellowgreen;
  color: black;
`;

const AppNameMainWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
`;

const ThemeText = styled.Text`
  font-weight: bold;
  color: ${Theme.text};
`;

const AdMobWrapper = styled.View`
  background-color: ${Theme.bg};
`;

export {
  CheckForUpdate,
  AdMobWrapper,
  ThemeText,
  AppNameMainWrapper,
  ShareText,
  ShareWrapper,
  OptionIconContainer,
  OptionText,
  LinkScrollViewWrapper,
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
  ScrollViewContainer,
  Container,
  MainContainer,
  ProgressContainer,
  ProgressFill,
};
