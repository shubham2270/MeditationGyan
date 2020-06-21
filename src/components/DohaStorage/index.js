import React from "react";
import { AsyncStorage, Text } from "react-native";

const DohaStorage = () => {
  const dohaId = "2";
  const saveDohsId = async (dohaId) => {
    try {
      await AsyncStorage.setItem("dohsId", dohaId);
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  };

  return <Text>Test</Text>;
};

export default DohaStorage;
