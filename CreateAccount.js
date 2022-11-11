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

  function goToMain(){
    console.log(email + password);
    if(checkFields() == true){
      navigation.navigate("Mainscreen");
    }
  }

  const storeUserData = async(value) => {
    try{
      jsonvalue = JSON.stringify(value);
      await AsyncStorage.setItem('@'+email, value);
    }catch(e){
      console.log("failure");
    }
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

 
  return (
    <View style={styles.container}>
 
      <StatusBar style="auto" />
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
 
 
      <TouchableOpacity style={styles.loginBtn} onPress={goToMain()}>
        <Text style={styles.loginText}>Create</Text>
        
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