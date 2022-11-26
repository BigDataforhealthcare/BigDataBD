import * as React from "react";
import { View, StyleSheet,ScrollView } from "react-native";
import Constants from "expo-constants";

import ImagePickerComponent from "./ImagePickerComponent";
import callGoogleVisionAsync from "./helperfunction";

import {Animated,Image} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from "react-native";
import {
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import {useNavigation} from "@react-navigation/native"
import { StatusBar } from "expo-status-bar";
import App from "./App";
const BGcolor = "#032130"
const white = "#FFFFFF"
global.textdata = "";
global.counter = 2;

export default function ViewData(){
    const navigation = useNavigation();
    function next(){
        textdata = Data_text[Data_text.length + 1]
    }
    textdata = Data_text[Data_text.length - 1];
    return (
        <View style={styles.container}>
            <Text style={styles.header}> Data </Text>
            <SafeAreaView style={styles.content}>
            <ScrollView style={styles.scrollview}>  
                <Text style = {styles.text}>{textdata}</Text>
            </ScrollView>

            </SafeAreaView>
            <View style={{flexDirection:'row',marginTop:20,marginLeft:130,marginTop:30}}>
                <View>
                <TouchableOpacity style={styles.buttonstyle}>
                    <Text style={styles.btntext} onPress={() => textdata = Data_text[Data_text.length - 1]}>←</Text>
                    </TouchableOpacity>
              
                </View>
                <View>
                <TouchableOpacity style={styles.buttonstyle}>
                    <Text style ={styles.btntext}>→</Text>
                    </TouchableOpacity>
                   
                </View>

            </View>
           


          
            
       
        </View>
        

    );

}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:BGcolor,
        
        height: 200
    },
    text:{
        color:'#FFFFFF',
        fontSize:13,
        width: '150%',
        marginBottom:0,
    
       
    },
    scrollview:{
        marginHorizontal:50,

    },
    content:{
        marginTop: 10,
        height:200,
    },
    header:{
        marginTop: 10,
        alignItems:'center',
        alignContent:'center',
        marginLeft:150,
        color:white,
        fontSize: 30

    },
    buttonstyle:{
        marginLeft: 5,
        
        backgroundColor: "#481196",
        color:white,
        padding: 5,
        fontSize: 10,
        borderRadius:4

    },
    btntext:{
        color:white,
        

    }

})