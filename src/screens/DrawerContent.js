/* eslint-disable react/prop-types */
import React from "react";
import { Text, View, Dimensions } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useTheme } from "@react-navigation/native";

import {
  Drawer,
  Avatar,
  Title,
  Caption,
  TouchableRipple,
  Switch,
  useTheme as usePaperTheme,
} from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import {
  DrawerHeader,
  LogoWrapper,
  TitleWrapper,
  ToogleWrapper,
} from "./styles";
import { ThemeContext } from "../../App";
import CheckNewContent from "src/components/CheckNewContent";

const vw = Dimensions.get("window").width / 100;
const vh = Dimensions.get("window").height / 100;

const DrawerContent = (props) => {
  const { colors: paperColors } = usePaperTheme();
  const { colors } = useTheme();
  const { navigate } = props.navigation;
  return (
    <View style={{ flex: 1 }}>
      <Drawer.Section>
        <DrawerHeader>
          <LogoWrapper vh={vh}>
            <Avatar.Image
              size={50}
              source={require("../assets/images/mylogo.png")}
            />
            <TitleWrapper>
              <Title style={{ color: paperColors.text }}>Meditation Gyan</Title>
              <Caption>Meditation, Kabir Dohe & more</Caption>
            </TitleWrapper>
          </LogoWrapper>
        </DrawerHeader>
      </Drawer.Section>
      <CheckNewContent />
      <DrawerContentScrollView {...props}>
        <Drawer.Section>
          <DrawerItem
            label="Home"
            icon={() => (
              <Ionicons name="md-home" size={24} color={colors.text} />
            )}
            onPress={() => navigate("Home")}
          />
          <DrawerItem
            label="Subscribe on Youtube"
            icon={() => (
              <Ionicons name="logo-youtube" size={20} color={colors.text} />
            )}
            onPress={() => navigate("Youtube")}
          />
          <DrawerItem
            label="Like on Facebook"
            icon={() => (
              <Ionicons name="logo-facebook" size={24} color={colors.text} />
            )}
            onPress={() => navigate("Facebook")}
          />
          <DrawerItem
            label="Share with Whatsapp"
            icon={() => (
              <Ionicons name="logo-whatsapp" size={24} color={colors.text} />
            )}
            onPress={() => navigate("Whatsapp")}
          />
          <DrawerItem
            label="Share with other app"
            icon={() => (
              <Ionicons name="md-share" size={24} color={colors.text} />
            )}
            onPress={() => navigate("Share")}
          />
          <DrawerItem
            label="Rate our app in Playstore!"
            icon={() => (
              <Ionicons name="md-star" size={24} color={colors.text} />
            )}
            onPress={() => navigate("Playstore")}
          />
        </Drawer.Section>
        <Drawer.Section title="Choose Preferences">
          <ThemeContext.Consumer>
            {(theme) => {
              return (
                <TouchableRipple onPress={theme.toogleTheme}>
                  <ToogleWrapper pointerEvents="none">
                    <Text style={{ color: colors.text }}>Dark Theme</Text>
                    <Switch value={theme.darkTheme} color="orange" />
                  </ToogleWrapper>
                </TouchableRipple>
              );
            }}
          </ThemeContext.Consumer>
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;
