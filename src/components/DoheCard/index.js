/* eslint-disable react/prop-types */
import "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { useTheme } from "@react-navigation/native";
import { Text, AsyncStorage } from "react-native";

import {
  DoheCardWrapper,
  DohaWrapper,
  Doha,
  Meaning,
  ShareIconWrapper,
  DohaNumber,
  HeartIconWrapper,
} from "./styles";
import useShareWhatsApp from "../../hooks/useShareWhatsapp";
import useShareAll from "../../hooks/useShareAll";

const DoheCard = ({
  doha1,
  doha2,
  meaning,
  id,
  dohaTextSize,
  contentTextSize,
  stateDohaId,
  setStateDohaId,
  showHeart,
}) => {
  const { colors } = useTheme();
  const ShareWhatsapp = () => {
    useShareWhatsApp(`*${doha1}*\n*${doha2}*\n\n${meaning}`);
  };

  const showAdAndShareAll = () => {
    useShareAll(`${doha1}\n${doha2}\n\n${meaning}`);
  };

  // Save doha key to async storage
  const saveDohaId = (savedId) => {
    try {
      AsyncStorage.getItem("id").then((id) => {
        let dohaId = id ? JSON.parse(id) : [];

        const index = dohaId.indexOf(savedId);

        // Add doha if not added or remove doha if already added from array
        if (index === -1) {
          dohaId.push(savedId);
        } else {
          dohaId.splice(index, 1);
        }

        AsyncStorage.setItem("id", JSON.stringify(dohaId)).then(() => {
          getDohaId();
        });
      });
    } catch (error) {
      // Error saving data
      alert(error);
    }
  };

  const save = (savedId) => {
    saveDohaId(savedId);
  };

  const getDohaId = async () => {
    try {
      let id = await AsyncStorage.getItem("id");

      if (id !== null) {
        setStateDohaId(id);
      }
    } catch (err) {
      alert(err);
    }
  };

  // Loads saved dohs on initial app load
  useEffect(() => {
    getDohaId();
  }, []);

  const removeDohaId = async () => {
    try {
      await AsyncStorage.removeItem("id");
    } catch (err) {
      alert(err);
    } finally {
      setStateDohaId([]);
    }
  };

  if (doha1 === "") {
    return null;
  }
  return (
    <DoheCardWrapper dohaTextSize={dohaTextSize}>
      <DohaWrapper>
        <Doha dohaTextSize={dohaTextSize}>{doha1}</Doha>
        <Doha dohaTextSize={dohaTextSize}>{doha2}</Doha>
      </DohaWrapper>
      <Meaning textColor={colors.text} contentTextSize={contentTextSize}>
        {meaning}
      </Meaning>
      <ShareIconWrapper showHeart={showHeart}>
        <Ionicons
          name="md-share"
          size={30}
          color={colors.text}
          onPress={showAdAndShareAll}
        />
        <Ionicons
          name="logo-whatsapp"
          size={30}
          color="rgba(37,211,102,1)"
          onPress={ShareWhatsapp}
        />
        {showHeart && (
          <HeartIconWrapper onPress={() => save(id)}>
            <Ionicons
              name={stateDohaId.includes(id) ? "md-heart" : "md-heart-empty"}
              size={30}
              color="red"
            />
          </HeartIconWrapper>
        )}

        {/* <Text onPress={removeDohaId}>Empty</Text> */}
        {/* <Text>{`${stateDohaId}`}</Text> */}
      </ShareIconWrapper>
      <DohaNumber textColor={colors.text}>{id}</DohaNumber>
    </DoheCardWrapper>
  );
};

export default DoheCard;
