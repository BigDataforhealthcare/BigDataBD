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

  export default function CreateAccount() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
  
   
    return (
      <View style={styles.container}>
  
        <Image style={styles.image} source={require('./assets/ab_icon.png')}  />
   
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
          
  
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#D3D3D3"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
   
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#D3D3D3"
            
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
   
       
        if(password != "" & email != ""){
            <TouchableOpacity style={styles.createAccBtn} onPress={()=> navigation.navigate("Mainscreen")}>
            <Text style={styles.createText}>
                Create Account</Text>
            
            </TouchableOpacity>
  }
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
      width:200,
      height:200,
      marginTop:-140,
      marginBottom: 0,
      marginLeft:-5,
    },
   
    inputView: {
      backgroundColor: "#FFFFFF",
      borderRadius: 10,
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
      marginLeft: -210,
     
      
    },
   
    forgot_button: {
      color:'#FFFFFF',
      height: 30,
      marginBottom: 10,
    },
   
    createAccBtn: {
      color:'#FFFFFF',
      width: "70%",
      borderRadius: 100,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      backgroundColor: "#481196",
      marginLeft:-10,
    },

    createtxt: {
      color:'#FFFFFF',
    }
  
    
  
  });