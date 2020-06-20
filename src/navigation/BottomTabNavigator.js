import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "src/components/TabBarIcon";
import HomeScreen from "src/screens/HomeScreen";
import DoheScreen from "src/screens/DoheScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Gyan",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-book" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Dohe"
        component={DoheScreen}
        options={{
          title: "Sant Kabir Dohe",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-flower" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "Meditation Gyan";
    case "Dohe":
      return "संत कबीर के प्रसिद्द दोहे";
  }
}
