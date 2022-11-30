import React,{useRef} from 'react'
import {Animated,Image, View} from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from "react-native";
import { AsyncStorage } from "@react-native-async-storage/async-storage";

import {useNavigation} from "@react-navigation/native"
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const usernames = [];
const passwords = [];
 
export default function CreateAccount() {

  

  function checkFields(){
    if(email == "" || password == ""){
      return false;
    }
    else{
      storeUserData(password);
      return true;
    }
  }
  function storeUserData(){
      usernames[usernames.length] = email;
      passwords[passwords.length] = password;
      console.log(usernames);
      navigation.navigate("Login Page");
  }
  module.exports = {usernames,passwords};

 



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

 
  return (
    <View style={styles.container}>
 
      <StatusBar style="auto" />
      <Image style={styles.image} source={require('./assets/ab_icon.png')}  />
      <View style={styles.inputView}>
        <TextInput
        

          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#032130"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#032130"
          
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="#032130"
          
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
 
      <TouchableOpacity style={styles.loginBtn} onPress={() => checkFields()}>
        <Text style={styles.loginText}>Create Account</Text>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.signinbtn} onPress={()=> navigation.goBack()} >
        <Text style={styles.signin}>
          Sign in Instead
        </Text>
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
    borderRadius: 10,
    width: "80%",
    height: 45,
    marginBottom: 15,
    marginRight:10,
 
    alignItems: "center",
    justifyContent:"center"
  },
 
  TextInput: {
    color:'#032130',
    height: 50,
   
    padding: 10,
    marginLeft: 0,
    
  },
 
  forgot_button: {
    color:'#FFFFFF',
    height: 30,
    marginBottom: 10,
  },
  signin:{
    color:'#FFFFFF',
    
    fontSize: 15

  },
  signinbtn:{
    backgroundColor: '#4CA3D3',
    marginTop:15,
    padding: 6,
    paddingHorizontal: 20,
    borderRadius: 30


  },
 
  loginBtn: {
    color:'#FFFFFF',
    width: "50%",
    borderRadius: 30,
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