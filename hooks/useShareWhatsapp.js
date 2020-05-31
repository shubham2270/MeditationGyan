/* eslint-disable react/prop-types */

import * as Linking from "expo-linking";

const useShareWhatsApp = (message) => {
  Linking.openURL(
    `https://wa.me/?text=${message}\nRead More: https://play.google.com/store/apps/details?id=com.deftdesigner.meditationgyan`
  );
};

export default useShareWhatsApp;
