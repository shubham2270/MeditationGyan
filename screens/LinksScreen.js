/* eslint-disable react/prop-types */
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import AdMobBannerAd from "./AdMobBanner";

export default function LinksScreen() {
  return (
    <View>
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

        {/* <Text>SOCIAL SHARE</Text> */}
      </ScrollView>
      <View>
        <AdMobBannerAd />
      </View>
    </View>
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
    // display: "flex",
    padding: 20,
    height: "80%",
    // flex: 1,
    // backgroundColor: "#fafafa",
    backgroundColor: "yellow",
  },
  contentContainer: {
    paddingTop: 15,
  },
  bottomBanner: {
    flex: 1,
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
