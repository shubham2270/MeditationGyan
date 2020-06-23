import React, { useState } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Text, View, Dimensions, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { useTheme } from "@react-navigation/native";
import * as Updates from "expo-updates";

import { MainWrapper, CheckUpdateText, LoaderWrapper } from "./styles";

const CheckNewContent = () => {
  const [checkUpdateText, setCheckUpdateText] = useState("Check for updates");
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
        setCheckUpdateText("Check for updates");
        setLoader(false);
        await Updates.fetchUpdateAsync();
        // ... notify user of update ...

        await Updates.reloadAsync();
      } else {
        setCheckUpdateText("Check for updates");
        setLoader(false);
        Alert.alert(
          "Update",
          "Your app is up to date! ",
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
        {loader ? (
          <ActivityIndicator animating={loader} color="orange" />
        ) : (
          <MaterialIcons name="update" size={24} color="black" />
        )}
      </LoaderWrapper>
    </MainWrapper>
  );
};

export default CheckNewContent;
