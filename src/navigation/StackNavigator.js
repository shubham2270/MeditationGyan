/* eslint-disable react/prop-types */
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text } from "react-native";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { ToggleButton } from "react-native-paper";

import BottomTabNavigator from "./BottomTabNavigator";
import Dhyan from "../screens/Dhyan";
import FavourateDohe from "../screens/FavourateDohe";

const Stack = createStackNavigator();

const StackNavigator = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={BottomTabNavigator}
          options={{
            // eslint-disable-next-line react/display-name
            headerLeft: () => (
              <ToggleButton
                icon="menu"
                value="menu"
                status={false}
                onPress={() => navigation.openDrawer()}
              />
            ),
          }}
        />
        <Stack.Screen name="Dhyan" component={Dhyan} />
        <Stack.Screen name="My Favourate Dohe" component={FavourateDohe} />
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
