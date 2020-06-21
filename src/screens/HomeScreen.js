/* eslint-disable react/prop-types */
import "react-native-gesture-handler";
import React, { useState } from "react";
import { NetworkConsumer } from "react-native-offline";
import { BackHandler } from "react-native";

import { ScrollViewContainer, Container, MainContainer } from "./styles";
import NoInternetMessage from "src/components/NoInternetMessage";
import ProgressBar from "src/components/ProgressBar";
import AdMobBannerAd from "src/components/AdMobBanner";
import LogoName from "src/components/LogoName";
import ImageCard from "src/components/ImageCard";
import { confirmExit } from "src/utils/confirmExit";

export default function HomeScreen({ navigation }) {
  const [loading, setLoading] = useState(true);

  const openArticle = (data) => {
    // Show Full screen ads
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
      confirmExit();
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
                  <ImageCard openArticle={openArticle} />
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
