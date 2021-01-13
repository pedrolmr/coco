import React from "react";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListItem from './app/components/ListItem';
import {Text} from "react-native";
import Screen from './app/components/Screen';
import MessagesScreen from "./app/screens/MessagesScreen";

// const items = [
//   {
//     title: "T1",
//     subTitle: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     image: require('./app/assets/becky.jpg')
//   },
//   {
//     title: "T2",
//     subTitle: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     image: require('./app/assets/becky.jpg')
//   }
// ]

export default function App() {
  return(
    // <Screen>
    // {items.map((item, i) => (
    //   <ListItem key={i} title={item.title} subTitle={item.subTitle} image={item.image}/>
    // ))}
    // </Screen>
    // <MessagesScreen />
    <ListingEditScreen />
  );
}
