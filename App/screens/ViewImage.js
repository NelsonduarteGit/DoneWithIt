import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import React from "react";

import colors from "../config/colors";

export default function ViewImage() {
  return (
    <View style={styles.container}>
      <View style={styles.delete}>
        <MaterialCommunityIcons name="delete" color="white" size={35} />
      </View>

      <View style={styles.close}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  delete: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  close: {
    position: "absolute",
    top: 40,
    left: 30,
  },
});
