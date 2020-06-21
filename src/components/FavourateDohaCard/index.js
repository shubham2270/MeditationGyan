/* eslint-disable react/prop-types */
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import {
  CardWrapper,
  CardImageBackground,
} from "src/components/ImageCard/styles";
import {
  CardTouchable,
  CardText,
  SecondaryCardText,
  CountText,
} from "./styles";

const image = { uri: "https://source.unsplash.com/1_CMoFsPfso/800x200" };

const FavourateDoheCard = ({ openFavourate, favCount }) => {
  return (
    <CardWrapper>
      <CardTouchable onPress={() => openFavourate()}>
        <CardImageBackground source={image} imageStyle={{ borderRadius: 8 }}>
          <CardText>Open my favourate dohe</CardText>

          {favCount === 0 ? (
            <SecondaryCardText>
              Press <Ionicons name="md-heart" size={15} color="red" /> to add
              dohe in favourate
            </SecondaryCardText>
          ) : (
            <SecondaryCardText>
              <CountText>{favCount}</CountText> dohe in favourate
            </SecondaryCardText>
          )}
        </CardImageBackground>
      </CardTouchable>
    </CardWrapper>
  );
};

export default FavourateDoheCard;
