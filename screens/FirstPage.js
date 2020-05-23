import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

import { ArticleHeading, ArticleIntro, Title, Content } from "./styles";

const FirstPage = ({ route }) => {
  const { mainTitle, intro, points } = route.params.data;

  return (
    <ScrollView>
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
    </ScrollView>
  );
};

export default FirstPage;
