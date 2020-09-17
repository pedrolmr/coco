import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  // return <WelcomeScreen />;
  // return <ViewImageScreen />;
  return (
    // <View
    //   style={{
    //     backgroundColor: "#f8f4f4",
    //     padding: 20,
    //     paddingTop: 100,
    //   }}
    // >
    //   <Card
    //     title="makeup for sale"
    //     subTitle="$30"
    //     image={require("./app/assets/makeup.jpg")}
    //   />
    // </View>
    // <ListingDetailsScreen />
    // <WelcomeScreen />
    // <ViewImageScreen />
    <MessagesScreen />
  );
}
