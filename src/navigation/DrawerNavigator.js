import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import * as WebBrowser from "expo-web-browser";

import StackNavigator from "./StackNavigator";
import DrawerContent from "../screens/DrawerContent";
import useShareWhatsApp from "src/hooks/useShareWhatsapp";
import useShareAll from "src/hooks/useShareAll";

const Drawer = createDrawerNavigator();

const youtube = () => {
  WebBrowser.openBrowserAsync("https://youtube.com/shubham2270");
};
const facebook = () => {
  WebBrowser.openBrowserAsync("https://facebook.com/shubhamkumarmeditation");
};

const playstore = () => {
  WebBrowser.openBrowserAsync(
    "https://play.google.com/store/apps/details?id=com.deftdesigner.meditationgyan"
  );
};

const shareMessage =
  "Learn Meditation, Sant Kabir Dohe with meaning and more download app";

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="Youtube" component={youtube} />
      <Drawer.Screen name="Facebook" component={facebook} />
      <Drawer.Screen
        name="Whatsapp"
        component={() => useShareWhatsApp(shareMessage)}
      />
      <Drawer.Screen name="Share" component={() => useShareAll(shareMessage)} />
      <Drawer.Screen name="Playstore" component={playstore} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
