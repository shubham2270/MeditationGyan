/* eslint-disable react/prop-types */
import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";

import { kabirdohe } from "src/assets/data/kabirdohe";
import TextSizeAdjustment from "src/components/TextSizeAdjustment";
import {
  ScrollViewContainer,
  MainContainer,
  KabirImage,
  ImageContainer,
} from "./styles";
import AdMobBannerAd from "src/components/AdMobBanner";
import useInterstitialAd from "src/hooks/useInterstitialAd";
import DoheCard from "src/components/DoheCard";

const DoheScreen = () => {
  const [dohaTextSize, setDohaTextSize] = useState(18);
  const [contentTextSize, setContentTextSize] = useState(16);

  //Run Full secreen ad every 5 minuits
  useEffect(() => {
    const interval = setInterval(() => {
      useInterstitialAd();
    }, 300000);

    return () => clearInterval(interval);
  });

  const increaseTextSize = () => {
    setDohaTextSize(dohaTextSize + 2);
    setContentTextSize(contentTextSize + 2);
  };

  const decreaseTextSize = () => {
    setDohaTextSize(dohaTextSize - 2);
    setContentTextSize(contentTextSize - 2);
  };

  const resetTextSize = () => {
    setDohaTextSize(18);
    setContentTextSize(16);
  };

  return (
    <MainContainer>
      <TextSizeAdjustment
        handleIncrease={increaseTextSize}
        handleDecrease={decreaseTextSize}
        handleReset={resetTextSize}
      />
      <ScrollViewContainer>
        <ImageContainer>
          <KabirImage source={require("src/assets/images/santKabir.jpg")} />
        </ImageContainer>
        {kabirdohe.map((data) => {
          const { doha1, doha2, id, meaning } = data;
          return (
            <DoheCard
              dohaTextSize={dohaTextSize}
              contentTextSize={contentTextSize}
              doha1={doha1}
              doha2={doha2}
              meaning={meaning}
              id={id}
              key={id}
            />
          );
        })}
      </ScrollViewContainer>
      <AdMobBannerAd />
    </MainContainer>
  );
};

export default DoheScreen;