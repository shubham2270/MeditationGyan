/* eslint-disable react/prop-types */
import "react-native-gesture-handler";
import React, { useState } from "react";
import { NetworkConsumer } from "react-native-offline";
import { AdMobInterstitial } from "expo-ads-admob";
import { Share, Text, Button, BackHandler, Alert } from "react-native";
import * as Linking from "expo-linking";

import { allData } from "../assets/data";
import {
  CardWrapper,
  CardText,
  CardTouchable,
  CardImageBackground,
  ScrollViewContainer,
  Container,
  MainContainer,
} from "./styles";
import NoInternetMessage from "./NoInternetMessage";
import Loader from "./Loader";
import LogoName from "./LogoName";
import AdMobBannerAd from "./AdMobBanner";

export default function HomeScreen({ navigation, route }) {
  // TODO: TO SET IT TRUE BEFORE PUBLISHING TO SHOW LOADING
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(false);

  const toogleTheme = () => {
    setDark(!dark);
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
    // TODO: UNCOMMENT
    showInterstitial();
    return navigation.navigate("FirstPage", {
      data,
      dark,
    });
  };

  const setLoadingFalse = () => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const handleBackButton = () => {
    // console.log("route", route);
    if (navigation.isFocused()) {
      Alert.alert(
        "Exit App",
        "Do you want to exit?",
        [
          {
            text: "No",
            style: "cancel",
          },
          { text: "Yes", onPress: () => BackHandler.exitApp() },
        ],
        { cancelable: false }
      );
      return true;
    }
  };
  BackHandler.addEventListener("hardwareBackPress", handleBackButton);

  return (
    <MainContainer dark={dark}>
      {/* Checks for Internet connection and render*/}
      <NetworkConsumer>
        {({ isConnected }) =>
          isConnected ? (
            <Container dark={dark}>
              <LogoName dark={dark} toogleTheme={toogleTheme} />
              {setLoadingFalse()}
              {loading ? (
                <Loader dark={dark} />
              ) : (
                <ScrollViewContainer dark={dark}>
                  <CardWrapper>
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
                </ScrollViewContainer>
              )}
            </Container>
          ) : (
            <NoInternetMessage setLoading={setLoading} />
          )
        }
      </NetworkConsumer>
      {/* AdMob banner ad bottom */}
      <AdMobBannerAd dark={dark} />
    </MainContainer>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
