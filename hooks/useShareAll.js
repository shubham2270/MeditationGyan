import { Share } from "react-native";

// Share with other apps
const useShareAll = async (message) => {
  try {
    const result = await Share.share({
      message: `${message}\n\nRead more: \nhttps://play.google.com/store/apps/details?id=com.deftdesigner.meditationgyan`,
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // console.log("Cancel Pressed");
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    error;
    // alert(error.message);
  }
};

export default useShareAll;
