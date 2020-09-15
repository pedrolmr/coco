import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";
export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={4}
      style={styles.background}
      source={require("../assets/background.png")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/Cocologo.png")} />
        <Text style={styles.tagline}>Makeup marketplace</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" color="primary" />
        <AppButton title="Register" color="secondary" />
        <View style={styles.registerButton}></View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  //   loginButton: {
  //     width: "100%",
  //     height: 70,
  //     backgroundColor: "#523A7B",
  //   },

  //   registerButton: {
  //     width: "100%",
  //     height: 70,
  //     backgroundColor: "#FF5757",
  //   },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    color: colors.white,
    fontStyle: "italic",
  },
});
