import * as React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import ImagePickerComponent from "./ImagePickerComponent";
import callGoogleVisionAsync from "./helperfunction";

import {Animated,Image} from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from "react-native";
import {
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import {useNavigation} from "@react-navigation/native"
import { StatusBar } from "expo-status-bar";
const BGcolor = "#032130"

export default function UploadPhotos(){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
          <ImagePickerComponent onSubmit={callGoogleVisionAsync} />

          <TouchableOpacity style={styles.saveBtn} onPress={console.log("pressed")}>
          <Text style={styles.saveText}>
          Save Text</Text>
          </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: BGcolor,
      padding: 8,
      color:'#FFFFFF',
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
    },
    saveBtn: {
      color: '#FFFFFF',
      width: "28%",
      borderRadius: 15,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      marginTop: -20,
      backgroundColor: "#481196",
      marginLeft: 129,
    },
    saveText: {
      color: '#FFFFFF',
      fontSize: 18,
    }
  });