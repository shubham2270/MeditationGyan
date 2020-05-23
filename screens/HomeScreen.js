import "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";

import { allData } from "../assets/data";
import { MonoText } from "../components/StyledText";
import {
  CardWrapper,
  CardText,
  CardTouchable,
  CardImageBackground,
} from "./styles";
import FirstPage from "./FirstPage";

export default function HomeScreen({ navigation }) {
  // const image = {
  //   uri: "https://source.unsplash.com/collection/10531495/180x100",
  // };
  // const image = {
  //   uri: "https://source.unsplash.com/collection/180x100",
  // };
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <CardWrapper style={styles.welcomeContainer}>
          {/* <Image
            source={
              __DEV__
                ? require("../assets/images/robot-dev.png")
                : require("../assets/images/robot-prod.png")
            }
            style={styles.welcomeImage}
          /> */}
          {/* {console.log(allData)} */}
          {/* {console.log(data.map((el) => el.mainTitle))} */}
          {allData.map((data) => {
            const image = { uri: data.cardImage };

            return (
              <CardTouchable
                key={data.mainTitle}
                onPress={() =>
                  navigation.navigate("FirstPage", {
                    data,
                  })
                }
              >
                <CardImageBackground
                  source={image}
                  imageStyle={{ borderRadius: 8 }}
                >
                  <CardText>{data.mainTitle}</CardText>
                </CardImageBackground>
              </CardTouchable>
            );
          })}
          {/* <View style={styles.card}></View> */}
        </CardWrapper>

        {/* <View style={styles.getStartedContainer}>

          <Text style={styles.getStartedText}>Open up the code for t:</Text>

          <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          >
            <MonoText>screens/HomeScreen.js</MonoText>
          </View>

          <Text style={styles.getStartedText}>
            Change any of the text, save the file, and your app will
            automatically reload.
          </Text>
        </View> */}

        {/* <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHhandleHelpPresselpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>
              Help, it didn’t automatically
            </Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        {/* <Text style={styles.tabBarInfoText}>
          This is a tab bar. You can edit it in:
        </Text> */}

        {/* <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}
        >
          <MonoText style={styles.codeHighlightText}>
            navigation/BottomTabNavigator.js
          </MonoText>
        </View> */}
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

// function DevelopmentModeNotice() {
//   if (__DEV__) {
//     const learnMoreButton = (
//       <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
//         Learn more
//       </Text>
//     );

//     return (
//       <Text style={styles.developmentModeText}>
//         Development mode is enabled: your app will be slower but you can use
//         useful development tools. {learnMoreButton}
//       </Text>
//     );
//   } else {
//     return (
//       <Text style={styles.developmentModeText}>
//         You are not in development mode: your app will run at full speed.
//       </Text>
//     );
//   }
// }

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change"
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center",
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)",
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
