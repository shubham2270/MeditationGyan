import React, { useState } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Text, View, Dimensions, Alert } from "react-native";
import { useTheme } from "@react-navigation/native";
import * as Updates from "expo-updates";

import { MainWrapper, CheckUpdateText, LoaderWrapper } from "./styles";

const CheckNewContent = () => {
  const [checkUpdateText, setCheckUpdateText] = useState(
    "Check for new contents!"
  );
  const [loader, setLoader] = useState(false);
  const { colors } = useTheme();

  const checkForUpdate = async () => {
    try {
      setLoader(true);
      setCheckUpdateText("Checking...");
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        Alert.alert(
          "Update",
          "New contents are available! Your app will reload now!",
          [
            {
              text: "OK",
              style: "cancel",
            },
          ],
          { cancelable: false }
        );
        setCheckUpdateText("Check for new contents!");
        setLoader(false);
        await Updates.fetchUpdateAsync();
        // ... notify user of update ...

        await Updates.reloadAsync();
      } else {
        setCheckUpdateText("Check for new contents!");
        setLoader(false);
        Alert.alert(
          "Update",
          "Your contents are up to date! ",
          [
            {
              text: "OK",
              style: "cancel",
            },
          ],
          { cancelable: false }
        );
      }
    } catch (e) {
      // handle or log error
    }
  };

  return (
    <MainWrapper>
      <CheckUpdateText textColor={colors.text} onPress={checkForUpdate}>
        {checkUpdateText}
      </CheckUpdateText>
      <LoaderWrapper>
        <ActivityIndicator animating={loader} color="orange" />
      </LoaderWrapper>
    </MainWrapper>
  );
};

export default CheckNewContent;
