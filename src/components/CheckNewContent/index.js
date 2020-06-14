import React from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Text, View, Dimensions } from "react-native";
import { useTheme } from "@react-navigation/native";

import { MainWrapper } from "./styles";

const CheckNewContent = () => {
  const { colors } = useTheme();
  return (
    <MainWrapper>
      <Text style={{ color: colors.text }}>Check for New Contents!</Text>
      <ActivityIndicator animating={true} color="orange" />
    </MainWrapper>
  );
};

export default CheckNewContent;
