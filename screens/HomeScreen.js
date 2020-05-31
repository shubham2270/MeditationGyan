/* eslint-disable react/prop-types */
import "react-native-gesture-handler";
import React, { useState } from "react";
import { NetworkConsumer } from "react-native-offline";
import { AdMobInterstitial } from "expo-ads-admob";
import {
  Share,
  Text,
  Button,
  BackHandler,
  Alert,
  FlatList,
} from "react-native";
import * as Linking from "expo-linking";

import { dhyan } from "../assets/data/dhyan";
import { kabirdohe } from "../assets/data/kabirdohe";
import useInterstitialAd from "../hooks/useInterstitialAd";
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
import DoheCard from "../components/DoheCard";

export default function HomeScreen({ navigation }) {
  // TODO: TO SET IT TRUE BEFORE PUBLISHING TO SHOW LOADING
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(false);

  const toogleTheme = () => {
    setDark(!dark);
  };

  const OpenArticle = (data) => {
    // Show Full screen ads
    // TODO: ENABLE AD BEFORE PUBLISHING
    // useInterstitialAd();
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
                    {dhyan.map((data) => {
                      const image = { uri: data.cardImage };
                      return (
                        <CardTouchable
                          key={data.mainTitle}
                          onPress={() => OpenArticle(data)}
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
                  </CardWrapper>

                  {kabirdohe.map((data) => {
                    const { doha1, doha2, id, meaning } = data;
                    return (
                      <DoheCard
                        doha1={doha1}
                        doha2={doha2}
                        meaning={meaning}
                        id={id}
                        key={id}
                      />
                    );
                  })}
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
