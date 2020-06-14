import { DefaultTheme } from "@react-navigation/native";
import { DefaultTheme as PaperDefaultTheme } from "react-native-paper";

const LightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff",
  },
};

const DarkTheme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: "#292929",
    text: "#fff",
    primary: "#fff",
    card: "rgb(28, 28, 28)",
    border: "rgb(0, 0, 0)",
  },
};

const PaperDarkTheme = {
  ...PaperDefaultTheme,
  dark: true,
  colors: {
    text: "#fff",
  },
};

const PaperLightTheme = {
  ...PaperDefaultTheme,
  dark: false,
  colors: {
    background: "#ffffff",
  },
};

export { LightTheme, DarkTheme, PaperDarkTheme, PaperLightTheme };
