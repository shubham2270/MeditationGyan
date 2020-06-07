/* eslint-disable react/prop-types */
import "react-native-gesture-handler";
import React from "react";
import { AdMobBanner } from "expo-ads-admob";
import { useTheme } from "@react-navigation/native";

import { AdMobWrapper } from "src/screens/styles";

const AdMobBannerAd = () => {
  const { colors } = useTheme();
  const bannerError = () => {
    console.log("An error");
  };

  return (
    <AdMobWrapper backgroundColor={colors.background}>
      <AdMobBanner
        smartBannerPortrait="smartBanner"
        // TODO: REMOVE TEST ADS!!!!!!!
        // adUnitID="ca-app-pub-9265958693530473/1714375186" // original
        adUnitID="ca-app-pub-3940256099942544/6300978111" // test
        servePersonalizedAds
        didFailToReceiveAdWithError={bannerError}
      />
    </AdMobWrapper>
  );
};

export default AdMobBannerAd;
