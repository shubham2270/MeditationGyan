/* eslint-disable react/prop-types */
import "react-native-gesture-handler";
import React from "react";
import { Text } from "react-native";

import { TextSizeButtonWrapper, TestSizeButton } from "./styles";

const TextSizeAdjustment = ({
  handleIncrease,
  handleDecrease,
  handleReset,
}) => {
  return (
    <TextSizeButtonWrapper>
      <TestSizeButton onPress={handleIncrease}>
        <Text>+</Text>
      </TestSizeButton>
      <TestSizeButton onPress={handleDecrease}>
        <Text>-</Text>
      </TestSizeButton>
      <TestSizeButton onPress={handleReset}>
        <Text>Reset</Text>
      </TestSizeButton>
    </TextSizeButtonWrapper>
  );
};

export default TextSizeAdjustment;
