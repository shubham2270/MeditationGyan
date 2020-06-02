/* eslint-disable react/prop-types */
import "react-native-gesture-handler";
import React from "react";
import { Text, View } from "react-native";

import {
  AppNameWrapper,
  Logo,
  Name,
  AppNameMainWrapper,
  ThemeText,
} from "./styles";

const LogoName = ({ toogleTheme }) => {
  return (
    <AppNameMainWrapper>
      <AppNameWrapper>
        <Logo source={require("../assets/images/mylogo.jpg")} />
        <Name>Shubham Kumar</Name>
      </AppNameWrapper>
      <ThemeText onPress={toogleTheme}>
        {/* Disabled dark mode option will be using later after completing */}
        {/* {dark ? "LIGHT MODE" : "DARK MODE"} */}
      </ThemeText>
    </AppNameMainWrapper>
  );
};

export default LogoName;
