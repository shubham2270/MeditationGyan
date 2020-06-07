/* eslint-disable react/prop-types */
import "react-native-gesture-handler";
import React, { useState } from "react";
import { NetworkConsumer } from "react-native-offline";
import { BackHandler, Alert } from "react-native";

import { dhyan } from "src/assets/data/dhyan";
import useInterstitialAd from "src/hooks/useInterstitialAd";
import {
  CardWrapper,
  CardText,
  CardTouchable,
  CardImageBackground,
  ScrollViewContainer,
  Container,
  MainContainer,
} from "./styles";
import NoInternetMessage from "src/components/NoInternetMessage";
import ProgressBar from "src/components/ProgressBar";
import AdMobBannerAd from "src/components/AdMobBanner";
import LogoName from "src/components/LogoName";

export default function HomeScreen({ navigation }) {
  // TODO: TO SET IT TRUE BEFORE PUBLISHING TO SHOW LOADING
  const [loading, setLoading] = useState(true);

  const OpenArticle = (data) => {
    // Show Full screen ads
    useInterstitialAd();
    return navigation.navigate("FirstPage", {
      data,
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
    <MainContainer>
      {/* Checks for Internet connection and render*/}
      <NetworkConsumer>
        {({ isConnected }) =>
          isConnected ? (
            <Container>
              <LogoName />
              {setLoadingFalse()}
              {loading ? (
                <ProgressBar />
              ) : (
                <ScrollViewContainer>
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
                </ScrollViewContainer>
              )}
            </Container>
          ) : (
            <NoInternetMessage setLoading={setLoading} />
          )
        }
      </NetworkConsumer>
      {/* AdMob banner ad bottom */}
      <AdMobBannerAd />
    </MainContainer>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
