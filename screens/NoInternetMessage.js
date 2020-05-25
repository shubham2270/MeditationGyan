/* eslint-disable react/prop-types */
import "react-native-gesture-handler";
import React from "react";

import { NoInternetText, NoInternetTextWrapper } from "./styles";

const NoInternetMessage = ({ setLoading }) => {
  const setLoadingTrue = () => {
    setLoading(true);
  };

  return (
    <NoInternetTextWrapper>
      {setLoadingTrue()}
      <NoInternetText>
        Please turn ON Internet to use this app! If already on try turning it
        OFF and ON again.
      </NoInternetText>
    </NoInternetTextWrapper>
  );
};

export default NoInternetMessage;
