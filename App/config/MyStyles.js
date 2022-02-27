import { Platform } from "react-native";
import colors from "./colors";

export default {
  text: {
    fontSize: 18,
    color: colors.darkGrey,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
