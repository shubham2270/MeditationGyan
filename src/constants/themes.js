import { DefaultTheme } from "@react-navigation/native";

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

export { LightTheme, DarkTheme };
