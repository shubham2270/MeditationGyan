import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useState, createContext } from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";
import { NetworkProvider } from "react-native-offline";

import useCachedResources from "./src/hooks/useCachedResources";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import LinkingConfiguration from "./src/navigation/LinkingConfiguration";
import FirstPage from "./src/screens/FirstPage";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export const ThemeContext = createContext();

const StackNav = () => {
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

const Test = () => {
  return <Text>Test</Text>;
};

export default function App() {
  const [darkTheme, setDark] = useState(false);
  const isLoadingComplete = useCachedResources();

  const toogleTheme = () => {
    setDark(!darkTheme);
  };

  const LightTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      background: "#ffffff",
    },
  };

  const DarkTheme = {
    ...DarkTheme,
    dark: true,
    colors: {
      ...DefaultTheme.colors,
      background: "#292929",
      text: "#fff",
      primary: "#fff",
      card: "rgba(28, 28, 28, 0.5)",
      border: "rgb(0, 0, 0)",
    },
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeContext.Provider value={{ darkTheme, toogleTheme }}>
        <NetworkProvider>
          <NavigationContainer
            linking={LinkingConfiguration}
            theme={darkTheme ? DarkTheme : LightTheme}
          >
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen
                name="Home"
                component={StackNav}
                options={{ drawerLabel: "Home" }}
              />
              <Drawer.Screen
                name="Notifications"
                component={Test}
                options={{ drawerLabel: "Updates" }}
              />
              <Drawer.Screen
                name="Profile"
                component={Test}
                options={{ drawerLabel: "Profile" }}
              />
            </Drawer.Navigator>
          </NavigationContainer>
        </NetworkProvider>
      </ThemeContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
