import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Constants from "expo-constants";
export default function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  paddingTop: Constants.statusBarHeight,
});
