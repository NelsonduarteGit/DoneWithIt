import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function MyButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.MyButton, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  MyButton: {
    backgroundColor: colors.primary,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 3,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
