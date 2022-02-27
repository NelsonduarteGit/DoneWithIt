import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import MyCard from "../components/MyCard";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Yankeed Jacket",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Great condition Couch",
    price: 500,
    image: require("../assets/couch.jpg"),
  },
];

export default function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <MyCard
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGrey,
  },
});
