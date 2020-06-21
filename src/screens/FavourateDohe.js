/* eslint-disable react/prop-types */
import React from "react";
import { Text, ScrollView, View } from "react-native";

import DoheCard from "src/components/DoheCard";
import AdMobBannerAd from "src/components/AdMobBanner";

const FavourateDohe = ({ route }) => {
  const { data, dohaTextSize, contentTextSize, stateDohaId } = route.params;

  if (data.length === 0) {
    return (
      <Text>No favourate Doha added. Press heart on doha to add it here!</Text>
    );
  }

  return (
    <>
      <ScrollView>
        {data.map((data) => {
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
              setStateDohaId={() => {}}
              showHeart={false}
            />
          );
        })}
      </ScrollView>
      <AdMobBannerAd />
    </>
  );
};

export default FavourateDohe;
