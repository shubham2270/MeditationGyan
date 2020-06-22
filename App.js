import { NavigationContainer } from "@react-navigation/native";
import React, { useState, createContext, useEffect } from "react";
import { NetworkProvider } from "react-native-offline";
import { Provider as PaperProvider } from "react-native-paper";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

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

  // const getPushNotificationPermissions = async () => {
  //   const { status: existingStatus } = await Permissions.getAsync(
  //     Permissions.NOTIFICATIONS
  //   );
  //   let finalStatus = existingStatus;

  //   // only ask if permissions have not already been determined, because
  //   // iOS won't necessarily prompt the user a second time.
  //   if (existingStatus !== "granted") {
  //     // Android remote notification permissions are granted during the app
  //     // install, so this will only ask on iOS
  //     const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  //     finalStatus = status;
  //   }

  //   // Stop here if the user did not grant permissions
  //   if (finalStatus !== "granted") {
  //     return;
  //   }
  //   console.log(finalStatus);

  //   // Get the token that uniquely identifies this device
  //   console.log(
  //     "Notification Token: ",
  //     await Notifications.getExpoPushTokenAsync()
  //   );
  // };

  // useEffect(() => {
  //   getPushNotificationPermissions();
  // });

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
