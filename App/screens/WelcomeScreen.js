import { View, ImageBackground, StyleSheet, Image, Text } from "react-native";

import React from "react";
import colors from "../config/colors";
import MyButton from "../components/MyButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.container}
      resizeMode="cover"
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.text}>Sell What You Don't Need!</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <MyButton title="Login" />
        <MyButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
