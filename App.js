import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, createContext } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { NetworkProvider } from "react-native-offline";

import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";
import FirstPage from "./screens/FirstPage";

const Stack = createStackNavigator();
export const ThemeContext = createContext();

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
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
        <ThemeContext.Provider value={{ darkTheme, toogleTheme }}>
          <NetworkProvider>
            <NavigationContainer
              linking={LinkingConfiguration}
              theme={darkTheme ? DarkTheme : LightTheme}
            >
              <Stack.Navigator>
                <Stack.Screen name="Root" component={BottomTabNavigator} />
                <Stack.Screen name="FirstPage" component={FirstPage} />
              </Stack.Navigator>
            </NavigationContainer>
          </NetworkProvider>
        </ThemeContext.Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
