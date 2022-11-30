import React,{useRef} from 'react'
import {Animated,Image, View} from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from "react-native";

import {useNavigation} from "@react-navigation/native"
import { StatusBar } from "expo-status-bar";
import { useState } from "react";


import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
 
export default function Mainscreen() {

  
  const navigation = useNavigation();

 
  return (
    <View style={styles.container}>

      <Image style={styles.image} source={require('./assets/ab_icon.png')} />
 
      <StatusBar style="auto" />


      
 
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}  onPress={()=> navigation.navigate("ImportMainScreen")}>Import Data</Text>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={()=> navigation.navigate("SearchData")}>
        <Text style={styles.loginText}>Search Data</Text>

        
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} onPress={()=> navigation.navigate("ViewData")}>View Data</Text>
        
      </TouchableOpacity>
      
      
      

    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#032130",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    width:100,
    height:100,
    marginTop:-60,
    marginBottom: 20,
    marginLeft:0,
  },
 
  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,
    marginRight:10,
 
    alignItems: "center",
    justifyContent:"center"
  },
 
  TextInput: {
    color:'#032130',
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    
  },
 
  forgot_button: {
    color:'#FFFFFF',
    height: 30,
    marginBottom: 10,
  },
 
  loginBtn: {
    color:'#FFFFFF',
    width: "50%",
    borderRadius:10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#481196",
  },
  loginText:{
    color:'#FFFFFF',
  }
  

});