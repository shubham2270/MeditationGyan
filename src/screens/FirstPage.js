/* eslint-disable react/prop-types */
import React from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";

import {
  ArticleHeading,
  ArticleIntro,
  Title,
  Content,
  ScrollViewContainer,
} from "./styles";
import AdMobBannerAd from "src/components/AdMobBanner";

const FirstPage = ({ route }) => {
  const { colors } = useTheme();
  const { data } = route.params;
  const { mainTitle, intro, points } = data;

  return (
    <>
      <ScrollViewContainer>
        <View>
          <ArticleHeading textColor={colors.text}>{mainTitle}</ArticleHeading>
        </View>
        <View>
          <ArticleIntro textColor={colors.text}>{intro}</ArticleIntro>
        </View>
        {points.map((el) => {
          return (
            <View key={el.id}>
              {el.title === "" ? null : <Title>{el.title}</Title>}
              {el.content === "" ? null : (
                <Content textColor={colors.text}>{el.content}</Content>
              )}
            </View>
          );
        })}
      </ScrollViewContainer>
      <AdMobBannerAd />
    </>
  );
};

export default FirstPage;
