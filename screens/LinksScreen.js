import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";

export default function LinksScreen() {
  const bannerError = () => {
    console.log("An error");
  };
  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <OptionButton
          icon="logo-youtube"
          bgColor="#bdb2ff"
          label="Subscribe Our Youtube channel"
          onPress={() =>
            WebBrowser.openBrowserAsync("https://youtube.com/shubham2270")
          }
        />

        <OptionButton
          icon="logo-facebook"
          bgColor="#a0c4ff"
          label="Like Our Facebook Page!"
          onPress={() =>
            WebBrowser.openBrowserAsync(
              "https://facebook.com/shubhamkumarmeditation"
            )
          }
          isLastOption
        />
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
}

function OptionButton({ icon, label, bgColor, onPress, isLastOption }) {
  return (
    <RectButton
      style={styles.option}
      // style={{ backgroundColor: bgColor }}
      onPress={onPress}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 20,
    flex: 1,
    backgroundColor: "#fafafa",
    marginBottom: 50,
  },
  contentContainer: {
    paddingTop: 15,
  },
  bottomBanner: {
    position: "absolute",
    bottom: 0,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderRadius: 5,
    backgroundColor: "#ffbe0b",
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 20,
    alignSelf: "flex-start",
    marginTop: 1,
    fontWeight: "bold",
  },
});
