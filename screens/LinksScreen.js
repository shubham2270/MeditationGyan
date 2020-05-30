/* eslint-disable react/prop-types */
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, View, Share } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import * as Linking from "expo-linking";

import AdMobBannerAd from "./AdMobBanner";

import {
  MainContainer,
  LinkScrollViewWrapper,
  OptionText,
  OptionIconContainer,
  ShareWrapper,
  ShareText,
} from "./styles";

export default function LinksScreen({ dark }) {
  const shareWhatsapp = () => {
    Linking.openURL(
      `https://wa.me/?text=Hey I am using this app is just awesome download: https://play.google.com/store/apps/details?id=com.deftdesigner.meditationgyan `
    );
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "https://play.google.com/store/apps/details?id=com.deftdesigner.meditationgyan",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const openPlayStore = () => {
    WebBrowser.openBrowserAsync(
      "https://play.google.com/store/apps/details?id=com.deftdesigner.meditationgyan"
    );
  };
  return (
    <MainContainer dark={dark}>
      <LinkScrollViewWrapper>
        <OptionButton
          icon="logo-youtube"
          label="Subscribe Our Youtube channel"
          onPress={() =>
            WebBrowser.openBrowserAsync("https://youtube.com/shubham2270")
          }
        />

        <OptionButton
          icon="logo-facebook"
          label="Like Our Facebook Page!"
          onPress={() =>
            WebBrowser.openBrowserAsync(
              "https://facebook.com/shubhamkumarmeditation"
            )
          }
          isLastOption
        />

        <ShareWrapper>
          <ShareText onPress={shareWhatsapp}>
            Share this app on Whatsapp
          </ShareText>
          <ShareText onPress={onShare}>Share with other</ShareText>
          <ShareText onPress={openPlayStore}>
            Give 5 Star Rating on Playstore!
          </ShareText>
        </ShareWrapper>
      </LinkScrollViewWrapper>

      <View>
        <AdMobBannerAd />
      </View>
    </MainContainer>
  );
}

const OptionButton = ({ icon, label, onPress }) => {
  return (
    <RectButton style={styles.option} onPress={onPress}>
      <OptionIconContainer>
        <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
      </OptionIconContainer>
      <View>
        <OptionText>{label}</OptionText>
      </View>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  option: {
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 0,
    borderRadius: 5,
    backgroundColor: "#ffbe0b",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
