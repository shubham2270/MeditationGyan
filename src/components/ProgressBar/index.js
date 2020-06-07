/* eslint-disable react/prop-types */
import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";

import { ProgressContainer, ProgressFill } from "./styles";

import {
  NoInternetText,
  NoInternetTextWrapper,
} from "../NoInternetMessage/styles";

const Loader = () => {
  const [fill, setFill] = useState(0);

  // Fills the progress bar 0.58every 5 miliseconds untill 3 seconds then clear interval
  useEffect(() => {
    const interval = setInterval(() => {
      setFill((fill) => fill + 0.58);
    }, 5);

    return () => clearInterval(interval);
  }, []);

  return (
    <NoInternetTextWrapper>
      <NoInternetText>Loading...</NoInternetText>
      <ProgressContainer>
        <ProgressFill fill={fill} />
      </ProgressContainer>
    </NoInternetTextWrapper>
  );
};

export default Loader;
