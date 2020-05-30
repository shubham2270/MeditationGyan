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
  const { dark, data } = route.params;
  const { mainTitle, intro, points } = data;

  return (
    <>
      <ScrollViewContainer dark={dark}>
        <View>
          <ArticleHeading dark={dark}>{mainTitle}</ArticleHeading>
        </View>
        <View>
          <ArticleIntro dark={dark}>{intro}</ArticleIntro>
        </View>
        {points.map((el) => {
          return (
            <View key={el.id}>
              {el.title === "" ? null : <Title>{el.title}</Title>}
              {el.content === "" ? null : (
                <Content dark={dark}>{el.content}</Content>
              )}
            </View>
          );
        })}
      </ScrollViewContainer>
      <AdMobBannerAd dark={dark} />
    </>
  );
};

export default FirstPage;
