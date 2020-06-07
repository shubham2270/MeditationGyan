import { NavigationContainer } from "@react-navigation/native";
import React, { useState, createContext } from "react";
import { NetworkProvider } from "react-native-offline";

import useCachedResources from "./src/hooks/useCachedResources";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import LinkingConfiguration from "./src/navigation/LinkingConfiguration";
import { DarkTheme, LightTheme } from "./src/constants/themes";

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
          <NavigationContainer
            linking={LinkingConfiguration}
            theme={darkTheme ? DarkTheme : LightTheme}
          >
            <DrawerNavigator />
          </NavigationContainer>
        </NetworkProvider>
      </ThemeContext.Provider>
    );
  }
}
