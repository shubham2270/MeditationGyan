/* eslint-disable react/prop-types */
import React from "react";
import { View } from "react-native";

import {
  ArticleHeading,
  ArticleIntro,
  Title,
  Content,
  ScrollViewContainer,
} from "./styles";
import AdMobBannerAd from "./AdMobBanner";

const FirstPage = ({ route }) => {
  const { mainTitle, intro, points } = route.params.data;

  return (
    <>
      <ScrollViewContainer>
        <View>
          <ArticleHeading>{mainTitle}</ArticleHeading>
        </View>
        <View>
          <ArticleIntro>{intro}</ArticleIntro>
        </View>
        {points.map((el) => {
          return (
            <View key={el.id}>
              {el.title === "" ? null : <Title>{el.title}</Title>}
              {el.content === "" ? null : <Content>{el.content}</Content>}
            </View>
          );
        })}
      </ScrollViewContainer>
      <AdMobBannerAd />
    </>
  );
};

export default FirstPage;
