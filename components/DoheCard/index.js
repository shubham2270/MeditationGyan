/* eslint-disable react/prop-types */
import "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Share, Text, Button, BackHandler, Alert, View } from "react-native";

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
  const showAdAndShareWhatsapp = () => {
    //TODO: ENABLE AD BEFORE PUBLISHING
    // useInterstitialAd();
    useShareWhatsApp(`*${doha1}*\n*${doha2}*\n\n${meaning}`);
  };

  const showAdAndShareAll = () => {
    //TODO: ENABLE AD BEFORE PUBLISHING
    // useInterstitialAd();
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
      <Meaning>{meaning}</Meaning>
      <ShareIconWrapper>
        <Ionicons
          name="md-share"
          size={30}
          color="rgba(0,0,0,0.5)"
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
