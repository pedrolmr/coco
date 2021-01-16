import React, {useState, useEffect} from "react";
import Screen from './app/components/Screen';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions';
// import Button from './app/components/Button';
import {Button, StyleSheet, Text, View, Image} from 'react-native';


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
  const [imageUri, setImageUri] = useState()
  const requestPermission = async () => {
    const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(!granted){
      alert('please enable permissions to access library!');
    }
  }

  useEffect(() => {
    requestPermission();
  }, [])

  const selectImage = async () => {
    try {
      const res = await ImagePicker.launchImageLibraryAsync();
      if(!res.cancelled)
        setImageUri(res.uri)
      
    } catch (error) {
      console.log('error reading an image', error)
    }
  }

  return(
    <Screen>
      <Button title="Select Image" onPress={selectImage}/>
      <Image source={{ uri: imageUri }} style={{ width:200, height: 200}} />
    </Screen>
  );
}
