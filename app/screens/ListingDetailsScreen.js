import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AppText from "../components/Text";

import ListItem from "../components/ListItem";
import colors from "../config/colors";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/makeup.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Makeup for sale</AppText>
        <AppText style={styles.price}>$30</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="becky g"
            subTitle="3 listings"
            image={require("../assets/becky.jpg")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});
