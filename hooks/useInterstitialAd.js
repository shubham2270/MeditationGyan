/* eslint-disable react/prop-types */
import "react-native-gesture-handler";
import { AdMobInterstitial } from "expo-ads-admob";

// Show Full screen ads
const showInterstitial = async () => {
  await AdMobInterstitial.setAdUnitID("ca-app-pub-9265958693530473/2300219617");
  await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
  await AdMobInterstitial.showAdAsync();
};

export default showInterstitial;
