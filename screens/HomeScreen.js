import "react-native-gesture-handler";
import React, { useState } from "react";
import { NetworkConsumer } from "react-native-offline";
import { AdMobInterstitial } from "expo-ads-admob";
import { Share, Button, Text } from "react-native";
import * as Linking from "expo-linking";

import { allData } from "../assets/data";
import {
  CardWrapper,
  CardText,
  CardTouchable,
  CardImageBackground,
  ScrollViewContainer,
  Container,
  MainContainer,
} from "./styles";
import NoInternetMessage from "./NoInternetMessage";
import Loader from "./Loader";
import LogoName from "./LogoName";
import AdMobBannerAd from "./AdMobBanner";

export default function HomeScreen({ navigation, isConnected }) {
  const [loading, setLoading] = useState(false);
  // TODO: TO SET IT TRUE BEFORE PUBLISHING

  // Show Full screen ads
  const showInterstitial = async () => {
    await AdMobInterstitial.setAdUnitID(
      "ca-app-pub-9265958693530473/2300219617"
    );
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  };

  const OpenArticle = (data) => {
    // TODO: UNCOMMENT
    // showInterstitial();
    return navigation.navigate("FirstPage", {
      data,
    });
  };

  const setLoadingFalse = () => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const shareWhatsapp = () => {
    Linking.openURL(
      `https://wa.me/?text=https://fb.com/shubhamkumarmeditation`
    );
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "https://fb.com/shubhamkumarmeditation",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <MainContainer>
      {/* Checks for Internet connection and render*/}
      <NetworkConsumer>
        {({ isConnected }) =>
          isConnected ? (
            <Container>
              <LogoName />
              {setLoadingFalse()}
              {loading ? (
                <Loader />
              ) : (
                <ScrollViewContainer>
                  <Text onPress={onShare}>
                    SHARE THIS APP
                    {/* <Button onPress={onShare} title="Share" />; */}
                  </Text>
                  <Text onPress={shareWhatsapp}>
                    WHATSAPP
                    {/* <Button onPress={onShare} title="Share" />; */}
                  </Text>

                  <CardWrapper>
                    {allData.map((data) => {
                      const image = { uri: data.cardImage };
                      return (
                        <CardTouchable
                          key={data.mainTitle}
                          onPress={() => OpenArticle(data)}
                        >
                          <CardImageBackground
                            onPress={showInterstitial}
                            source={image}
                            imageStyle={{ borderRadius: 8 }}
                          >
                            <CardText>{data.mainTitle}</CardText>
                          </CardImageBackground>
                        </CardTouchable>
                      );
                    })}
                  </CardWrapper>
                </ScrollViewContainer>
              )}
            </Container>
          ) : (
            <NoInternetMessage setLoading={setLoading} />
          )
        }
      </NetworkConsumer>
      {/* AdMob banner ad bottom */}
      <AdMobBannerAd />
    </MainContainer>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
