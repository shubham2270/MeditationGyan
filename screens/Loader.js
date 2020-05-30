/* eslint-disable react/prop-types */
import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";

import {
  NoInternetText,
  NoInternetTextWrapper,
  ProgressContainer,
  ProgressFill,
} from "./styles";

const Loader = ({ dark }) => {
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
      <ProgressContainer dark={dark}>
        <ProgressFill fill={fill} />
      </ProgressContainer>
    </NoInternetTextWrapper>
  );
};

export default Loader;
