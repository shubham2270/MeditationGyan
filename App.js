import { NavigationContainer } from "@react-navigation/native";
import React, { useState, createContext } from "react";
import { NetworkProvider } from "react-native-offline";
import { Provider as PaperProvider } from "react-native-paper";

import useCachedResources from "./src/hooks/useCachedResources";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import LinkingConfiguration from "./src/navigation/LinkingConfiguration";
import {
  DarkTheme,
  LightTheme,
  PaperDarkTheme,
  PaperLightTheme,
} from "./src/constants/themes";

export const ThemeContext = createContext();

export default function App() {
  const [darkTheme, setDark] = useState(false);
  const isLoadingComplete = useCachedResources();

  const toogleTheme = () => {
    setDark(!darkTheme);
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeContext.Provider value={{ darkTheme, toogleTheme }}>
        <NetworkProvider>
          <PaperProvider theme={darkTheme ? PaperDarkTheme : PaperLightTheme}>
            <NavigationContainer
              linking={LinkingConfiguration}
              theme={darkTheme ? DarkTheme : LightTheme}
            >
              <DrawerNavigator />
            </NavigationContainer>
          </PaperProvider>
        </NetworkProvider>
      </ThemeContext.Provider>
    );
  }
}
