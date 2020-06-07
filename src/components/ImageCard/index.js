/* eslint-disable react/prop-types */
import React from "react";

import {
  CardWrapper,
  CardText,
  CardTouchable,
  CardImageBackground,
} from "./styles";

import { dhyan } from "src/assets/data/dhyan";

const ImageCard = ({ openArticle }) => {
  return (
    <CardWrapper>
      {dhyan.map((data) => {
        const image = { uri: data.cardImage };
        return (
          <CardTouchable key={data.mainTitle} onPress={() => openArticle(data)}>
            <CardImageBackground
              source={image}
              imageStyle={{ borderRadius: 8 }}
            >
              <CardText>{data.mainTitle}</CardText>
            </CardImageBackground>
          </CardTouchable>
        );
      })}
    </CardWrapper>
  );
};

export default ImageCard;
