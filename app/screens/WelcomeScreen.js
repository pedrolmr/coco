import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import Button from "../components/Button";
import colors from "../config/colors";
export default function WelcomeScreen({navigation}) {
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
        <Button title="Login" color="primary" onPress={() => navigation.navigate("Login")}/>
        <Button title="Register" color="secondary" onPress={() => navigation.navigate("Register")} />
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
