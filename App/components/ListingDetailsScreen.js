import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import colors from "../config/colors";
import ListItem from "../components/ListItem";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.container}>
        <Text style={styles.title}>Yankees jacket for sale</Text>
        <Text style={styles.subTitle}>$100</Text>
        <ListItem
          image={require("../assets/profile.jpg")}
          title="Johan"
          subTitle="15 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  subTitle: { color: colors.secondary, fontSize: 20, fontWeight: "500" },
});
