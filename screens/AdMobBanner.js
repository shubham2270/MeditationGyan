/* eslint-disable react/prop-types */
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View } from "react-native";
import { AdMobBanner } from "expo-ads-admob";

const AdMobBannerAd = () => {
  const bannerError = () => {
    console.log("An error");
  };

  return (
    <View>
      <AdMobBanner
        style={styles.bottomBanner}
        bannerSize="smartBanner"
        adUnitID="ca-app-pub-9265958693530473/1714375186"
        servePersonalizedAds
        didFailToReceiveAdWithError={bannerError}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBanner: {
    // position: "absolute",
    bottom: 0,
  },
});

export default AdMobBannerAd;
