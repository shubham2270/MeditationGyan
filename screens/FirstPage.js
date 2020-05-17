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

const FirstPage = ({ route }) => {
  const { mainTitle, intro, points } = route.params.data;

  return (
    <ScrollView>
      <View>
        <Text>{intro}</Text>
      </View>

      {points.map((el) => {
        return (
          <View key={el.title}>
            <Text>{el.title}</Text>
            <Text>{el.content}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default FirstPage;
