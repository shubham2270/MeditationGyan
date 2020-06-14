/* eslint-disable react/prop-types */
import "react-native-gesture-handler";
import React from "react";
import { useTheme } from "@react-navigation/native";

import {
  AppNameWrapper,
  Logo,
  Name,
  AppNameMainWrapper,
  ThemeText,
} from "./styles";

const LogoName = () => {
  const { colors } = useTheme();
  return (
    <AppNameMainWrapper>
      <AppNameWrapper>
        <Logo source={require("src/assets/images/mylogo.jpg")} />
        <Name textColor={colors.text}>Shubham Kumar</Name>
      </AppNameWrapper>
    </AppNameMainWrapper>
  );
};

export default LogoName;
