import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Text } from "react-native";

import StackNavigator from "./StackNavigator";

const Drawer = createDrawerNavigator();

const Test = () => {
  return <Text>Test</Text>;
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={StackNavigator}
        options={{ drawerLabel: "Home" }}
      />

      {/* <Drawer.Screen
        name="Notifications"
        component={Test}
        options={{ drawerLabel: "Updates" }}
      />
      <Drawer.Screen
        name="Profile"
        component={Test}
        options={{ drawerLabel: "Profile" }}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
