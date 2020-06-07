/* eslint-disable react/prop-types */
import "react-native-gesture-handler";
import { AdMobInterstitial } from "expo-ads-admob";

// Show Full screen ads
const showInterstitial = async () => {
  // TODO: REMOVE TEST ADS!!!!!!!
  // await AdMobInterstitial.setAdUnitID("ca-app-pub-9265958693530473/2300219617"); // Original
  await AdMobInterstitial.setAdUnitID("ca-app-pub-3940256099942544/1033173712"); // Test
  await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
  await AdMobInterstitial.showAdAsync();
};

export default showInterstitial;
