/* eslint-disable react/prop-types */
import "react-native-gesture-handler";
import React, { useState } from "react";
import { NetworkConsumer } from "react-native-offline";
import { BackHandler, Alert, ScrollView, View } from "react-native";

import { dhyan } from "../assets/data/dhyan";
import { kabirdohe } from "../assets/data/kabirdohe";
import useInterstitialAd from "../hooks/useInterstitialAd";
import {
  CardWrapper,
  CardText,
  CardTouchable,
  CardImageBackground,
  ScrollViewContainer,
  Container,
  MainContainer,
} from "./styles";
import NoInternetMessage from "./NoInternetMessage";
import Loader from "./Loader";
import LogoName from "./LogoName";
import AdMobBannerAd from "./AdMobBanner";
import DoheCard from "../components/DoheCard";

const DoheScreen = () => {
  return (
    <View>
      <ScrollView>
        {kabirdohe.map((data) => {
          const { doha1, doha2, id, meaning } = data;
          return (
            <DoheCard
              doha1={doha1}
              doha2={doha2}
              meaning={meaning}
              id={id}
              key={id}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default DoheScreen;
