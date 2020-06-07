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

import { ThemeContext } from "../../../App";

const LogoName = () => {
  const { colors } = useTheme();
  return (
    <AppNameMainWrapper>
      <AppNameWrapper>
        <Logo source={require("src/assets/images/mylogo.jpg")} />
        <Name textColor={colors.text}>Shubham Kumar</Name>
      </AppNameWrapper>

      <ThemeContext.Consumer>
        {(theme) => {
          return (
            <ThemeText onPress={theme.toogleTheme} textColor={colors.text}>
              {theme.darkTheme ? "LIGHT MODE" : "DARK MODE"}
            </ThemeText>
          );
        }}
      </ThemeContext.Consumer>
    </AppNameMainWrapper>
  );
};

export default LogoName;
