import React,{useRef} from 'react'
import {Animated,Image, View,Alert} from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from "react-native";
import { AsyncStorage } from "react-native";

import {useNavigation} from "@react-navigation/native"
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CreateAccount from './CreateAccount';
 
export default function LoginPage() {
  const {usernames,passwords} = require('./CreateAccount');

  
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function checkFields(){
    if(usernames != undefined){
      for(let i = 0; i < usernames.length; i++){
        if(email == usernames[i] && password == passwords[i]){
          navigation.navigate("Mainscreen");
        }
        else{
          Alert.alert("","Incorrect Username and Password");

        }
      }
    }
  }

 

 
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
 
     
 
      <TouchableOpacity style={styles.loginBtn} onPress={() => checkFields()}>
        <Text style={styles.loginText}>
          Login</Text>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.createbtn}  onPress={()=> navigation.navigate("Create Account")} >
        <Text 
        style={styles.createtxt}
       
        >
          
          Create an Account</Text>
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

    
   
    
  },
 
  forgot_button: {
    color:'#FFFFFF',
    height: 30,
    marginBottom: 10,
  },
 
  loginBtn: {
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
  loginText:{
    color:'#FFFFFF',
  },
  createbtn: {
    color:'#FFFFFF',
    width: "70%",
    borderRadius: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#481196",
    marginLeft:-10,

  },
  createtxt: {
    color:'#FFFFFF',

  }

  

});