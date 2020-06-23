/* eslint-disable react/prop-types */
import "react-native-gesture-handler";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { dark } from "src/constants/Colors";

import { TextSizeButtonWrapper, TestSizeButton, TextSizeName } from "./styles";

const TextSizeAdjustment = ({
  handleIncrease,
  handleDecrease,
  handleReset,
  dohaTextSize,
}) => {
  const textSizeName = () => {
    switch (dohaTextSize) {
      case 14:
        return "Smallest";
      case 16:
        return "Small";
      case 18:
        return "Default";
      case 20:
        return "Large";
      case 22:
        return "Largest";
      default:
        return "Default";
    }
  };

  return (
    <TextSizeButtonWrapper>
      <TextSizeName>Text Size: {textSizeName()}</TextSizeName>
      <TestSizeButton onPress={handleIncrease} disabled={dohaTextSize === 22}>
        <MaterialIcons name="zoom-in" size={28} color={dark} />
      </TestSizeButton>
      <TestSizeButton onPress={handleDecrease} disabled={dohaTextSize === 14}>
        <MaterialIcons name="zoom-out" size={28} color={dark} />
      </TestSizeButton>
      <TestSizeButton onPress={handleReset}>
        <MaterialIcons name="settings-backup-restore" size={28} color={dark} />
      </TestSizeButton>
    </TextSizeButtonWrapper>
  );
};

export default TextSizeAdjustment;
