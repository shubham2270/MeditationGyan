/* eslint-disable react/prop-types */
import "react-native-gesture-handler";
import React from "react";

import { AppNameWrapper, Logo, Name } from "./styles";

const LogoName = () => {
  return (
    <AppNameWrapper>
      <Logo source={require("../assets/images/mylogo.jpg")} />
      <Name>Shubham Kumar</Name>
    </AppNameWrapper>
  );
};

export default LogoName;
