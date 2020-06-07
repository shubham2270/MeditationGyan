import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import BottomTabNavigator from "./BottomTabNavigator";
import FirstPage from "../screens/FirstPage";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <View style={styles.container}>
      {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
      <Stack.Navigator>
        <Stack.Screen name="Root" component={BottomTabNavigator} />
        <Stack.Screen name="FirstPage" component={FirstPage} />
      </Stack.Navigator>
    </View>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
