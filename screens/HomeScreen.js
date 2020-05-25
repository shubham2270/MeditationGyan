import "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import React, { useState, useEffect } from "react";
import { NetworkConsumer } from "react-native-offline";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";
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
  AppNameWrapper,
  Name,
  Logo,
  NoInternetText,
  NoInternetTextWrapper,
} from "./styles";
import FirstPage from "./FirstPage";

export default function HomeScreen({ navigation, isConnected }) {
  const [loading, setLoading] = useState(true);

  const bannerError = () => {
    console.log("An error");
  };

  // Show Full screen ads
  const showInterstitial = async () => {
    await AdMobInterstitial.setAdUnitID(
      "ca-app-pub-9265958693530473/2300219617"
    );
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  };

  const OpenArticle = (data) => {
    showInterstitial();
    return navigation.navigate("FirstPage", {
      data,
    });
  };

  const setLoadingFalse = () => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const setLoadingTrue = () => {
    setLoading(true);
  };

  return (
    <View style={styles.mainContainer}>
      {/* Checks for Internet connection and render*/}
      <NetworkConsumer>
        {({ isConnected }) =>
          isConnected ? (
            <AppNameWrapper>
              <View style={styles.container}>
                <Logo source={require("../assets/images/mylogo.jpg")} />
                <Name>Shubham Kumar</Name>
              </AppNameWrapper>
              {setLoadingFalse()}
              {loading ? (
                <NoInternetTextWrapper>
                  <NoInternetText>Loading...</NoInternetText>
                </NoInternetTextWrapper>
              ) : (
                <ScrollView
                  style={styles.container}
                  contentContainerStyle={styles.contentContainer}
                >
                  <CardWrapper style={styles.welcomeContainer}>
                    {allData.map((data) => {
                      const image = { uri: data.cardImage };
                      return (
                        <CardTouchable
                          key={data.mainTitle}
                          onPress={() => OpenArticle(data)}
                        >
                          <CardImageBackground
                            onPress={showInterstitial}
                            source={image}
                            imageStyle={{ borderRadius: 8 }}
                          >
                            <CardText>{data.mainTitle}</CardText>
                          </CardImageBackground>
                        </CardTouchable>
                      );
                    })}
                  </CardWrapper>
                </ScrollView>
              )}
            </View>
          ) : (
            <NoInternetTextWrapper>
              {setLoadingTrue()}
              <NoInternetText>
                Please turn On Internet to use this app! If it's already on try
                turning it off and on again.
              </NoInternetText>
            </NoInternetTextWrapper>
          )
        }
      </NetworkConsumer>

      <View>
        <AdMobBanner
          style={styles.bottomBanner}
          bannerSize="smartBanner"
          adUnitID="ca-app-pub-9265958693530473/1714375186"
          // testDeviceID="EMULATOR"
          servePersonalizedAds
          didFailToReceiveAdWithError={bannerError}
        />
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

// function handleLearnMorePress() {
//   WebBrowser.openBrowserAsync(
//     "https://docs.expo.io/versions/latest/workflow/development-mode/"
//   );
// }

// function handleHelpPress() {
//   WebBrowser.openBrowserAsync(
//     "https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change"
//   );
// }

const styles = StyleSheet.create({
  bottomBanner: {
    position: "absolute",
    bottom: 0,
  },
  containers: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 40,
  },
  mainContainer: {
    flex: 1,
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
