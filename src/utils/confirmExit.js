import { BackHandler, Alert } from "react-native";

export const confirmExit = () => {
  Alert.alert(
    "Exit App",
    "Do you want to exit?",
    [
      {
        text: "No",
        style: "cancel",
      },
      { text: "Yes", onPress: () => BackHandler.exitApp() },
    ],
    { cancelable: false }
  );
};
