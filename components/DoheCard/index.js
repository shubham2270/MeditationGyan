/* eslint-disable react/prop-types */
import "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useTheme } from "@react-navigation/native";

import {
  DoheCardWrapper,
  DohaWrapper,
  Doha,
  Meaning,
  ShareIconWrapper,
  DohaNumber,
} from "./styles";
import useShareWhatsApp from "../../hooks/useShareWhatsapp";
import useShareAll from "../../hooks/useShareAll";
import useInterstitialAd from "../../hooks/useInterstitialAd";

const DoheCard = ({ doha1, doha2, meaning, id }) => {
  const { colors } = useTheme();
  const showAdAndShareWhatsapp = () => {
    //TODO: ENABLE AD BEFORE PUBLISHING
    useInterstitialAd();
    useShareWhatsApp(`*${doha1}*\n*${doha2}*\n\n${meaning}`);
  };

  const showAdAndShareAll = () => {
    //TODO: ENABLE AD BEFORE PUBLISHING
    useInterstitialAd();
    useShareAll(`${doha1}\n${doha2}\n\n${meaning}`);
  };

  if (doha1 === "") {
    return null;
  }
  return (
    <DoheCardWrapper>
      <DohaWrapper>
        <Doha>{doha1}</Doha>
        <Doha>{doha2}</Doha>
      </DohaWrapper>
      <Meaning textColor={colors.text}>{meaning}</Meaning>
      <ShareIconWrapper>
        <Ionicons
          name="md-share"
          size={30}
          // color="rgba(0,0,0,0.5)"
          color={colors.text}
          onPress={showAdAndShareAll}
        />
        <Ionicons
          name="logo-whatsapp"
          size={30}
          color="rgba(37,211,102,1)"
          onPress={showAdAndShareWhatsapp}
        />
      </ShareIconWrapper>
      <DohaNumber>{id}</DohaNumber>
    </DoheCardWrapper>
  );
};

export default DoheCard;
