/* eslint-disable react/prop-types */
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import * as Updates from "expo-updates";

import AdMobBannerAd from "./AdMobBanner";
import useShareWhatsApp from "../hooks/useShareWhatsapp";
import useShareAll from "../hooks/useShareAll";

import {
  MainContainer,
  LinkScrollViewWrapper,
  OptionText,
  OptionIconContainer,
  ShareWrapper,
  ShareText,
  CheckForUpdate,
} from "./styles";

export default function LinksScreen({ dark }) {
  const [checkUpdateText, setCheckUpdateText] = useState(
    "Check for new contents!"
  );

  const checkForUpdate = async () => {
    try {
      setCheckUpdateText("Checking for new contents...");
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        Alert.alert(
          "Update",
          "New contents are available! Your app will reload now!",
          [
            {
              text: "OK",
              style: "cancel",
            },
          ],
          { cancelable: false }
        );
        setCheckUpdateText("Check for new contents!");
        await Updates.fetchUpdateAsync();
        // ... notify user of update ...

        await Updates.reloadAsync();
      } else {
        setCheckUpdateText("Check for new contents!");
        Alert.alert(
          "Update",
          "Your contents are up to date! ",
          [
            {
              text: "OK",
              style: "cancel",
            },
          ],
          { cancelable: false }
        );
      }
    } catch (e) {
      // handle or log error
    }
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
          <ShareText
            onPress={() =>
              useShareWhatsApp("Hey I am using this app is just awesome")
            }
          >
            Share this app on Whatsapp!
          </ShareText>
          <ShareText
            onPress={() =>
              useShareAll("Hey I am using this app is just awesome")
            }
          >
            Share with other
          </ShareText>
          <ShareText
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://play.google.com/store/apps/details?id=com.deftdesigner.meditationgyan"
              )
            }
          >
            Give 5 Star Rating on Playstore!
          </ShareText>
          <CheckForUpdate onPress={checkForUpdate}>
            {checkUpdateText}
          </CheckForUpdate>
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
