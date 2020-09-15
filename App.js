import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";

export default function App() {
  // return <WelcomeScreen />;
  // return <ViewImageScreen />;
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <AppButton
    //     title="Login"
    //     onPress={() => console.log("login button tapped!!")}
    //   />
    // </View>
    <WelcomeScreen />
  );
}
