/* eslint-disable react/prop-types */
import "react-native-gesture-handler";
import React from "react";

import { Logo as StyledLogo } from "./styles";

const Logo = () => {
  return <StyledLogo source={require("src/assets/images/mylogo.png")} />;
};

export default Logo;
