/* eslint-disable react/prop-types */
import "react-native-gesture-handler";
import React from "react";
import { View } from "react-native";
import { AdMobBanner } from "expo-ads-admob";
import { useTheme } from "@react-navigation/native";

import { AdMobWrapper } from "./styles";

const AdMobBannerAd = () => {
  const { colors } = useTheme();
  const bannerError = () => {
    console.log("An error");
  };

  return (
    <AdMobWrapper backgroundColor={colors.background}>
      <AdMobBanner
        bannerSize="smartBanner"
        adUnitID="ca-app-pub-9265958693530473/1714375186"
        servePersonalizedAds
        didFailToReceiveAdWithError={bannerError}
      />
    </AdMobWrapper>
  );
};

export default AdMobBannerAd;
