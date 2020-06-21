/* eslint-disable react/prop-types */
import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { Text } from "react-native";

import { kabirdohe } from "src/assets/data/kabirdohe";
import TextSizeAdjustment from "src/components/TextSizeAdjustment";
import {
  ScrollViewContainer,
  MainContainer,
  KabirImage,
  ImageContainer,
} from "./styles";
import AdMobBannerAd from "src/components/AdMobBanner";
import DoheCard from "src/components/DoheCard";

const DoheScreen = () => {
  const [dohaTextSize, setDohaTextSize] = useState(18);
  const [contentTextSize, setContentTextSize] = useState(16);
  const [stateDohaId, setStateDohaId] = useState([]);

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

  const favDohe = kabirdohe.filter((doha) => {
    return stateDohaId.includes(doha.id);
  });

  return (
    <MainContainer>
      <TextSizeAdjustment
        dohaTextSize={dohaTextSize}
        handleIncrease={increaseTextSize}
        handleDecrease={decreaseTextSize}
        handleReset={resetTextSize}
      />
      <ScrollViewContainer>
        <ImageContainer>
          <KabirImage source={require("src/assets/images/santKabir.jpg")} />
        </ImageContainer>

        {/* Favourate Dohas */}
        {favDohe.length === 0 ? (
          <Text>No favourate Dohe added</Text>
        ) : (
          <Text>Favourate Dohe</Text>
        )}
        {favDohe.map((data) => {
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
              stateDohaId={stateDohaId}
              setStateDohaId={setStateDohaId}
            />
          );
        })}

        {/* All Dohas */}
        <Text>All Dohe</Text>
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
              stateDohaId={stateDohaId}
              setStateDohaId={setStateDohaId}
            />
          );
        })}
      </ScrollViewContainer>
      <AdMobBannerAd />
    </MainContainer>
  );
};

export default DoheScreen;
