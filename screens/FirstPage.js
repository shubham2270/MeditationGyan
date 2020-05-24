import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";

import { ArticleHeading, ArticleIntro, Title, Content } from "./styles";

const FirstPage = ({ route }) => {
  const { mainTitle, intro, points } = route.params.data;

  const bannerError = () => {
    console.log("An error");
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <View>
          <ArticleHeading>{mainTitle}</ArticleHeading>
        </View>
        <View>
          <ArticleIntro>{intro}</ArticleIntro>
        </View>
        {points.map((el) => {
          return (
            <View key={el.id}>
              {el.title === "" ? null : <Title>{el.title}</Title>}
              {el.content === "" ? null : <Content>{el.content}</Content>}
            </View>
          );
        })}
      </ScrollView>
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
    </>
  );
};

const styles = StyleSheet.create({
  bottomBanner: {
    position: "absolute",
    bottom: 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 50,
  },
});

export default FirstPage;
