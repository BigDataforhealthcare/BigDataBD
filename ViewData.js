import * as React from "react";
import { View, StyleSheet,ScrollView,} from "react-native";
import { Avatar,Card, Title, Paragraph } from 'react-native-paper';
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

global.counter = 0;

export default function ViewData(){
    const navigation = useNavigation();
    const [textdata,settextdata] = React.useState('');
   

    function viewData(){

    }
    function next(){
        global.counter += 1;
        console.log("It is working!" + global.counter);
        // settextdata(Data_text[counter]);
        settextdata(Data_text[counter]);
    }
    function previous(){
        global.counter -= 1;
        settextdata(Data_text[counter]);
        console.log("It is working!" + global.counter);
    }
    
    return (

        <View style={styles.container}>
            
            <Text style={styles.header}> Data </Text>
            <SafeAreaView style={styles.content}>
            <ScrollView style={styles.scrollview}>
                <Card>
            
                    <Card.Content>
                    <Title>File</Title>
                        <Paragraph>{textdata}</Paragraph></Card.Content>
                </Card> 
            </ScrollView>
            
           

            </SafeAreaView>
            <TouchableOpacity style={styles.createbtn} onPress={next}><Text style={styles.textcontent} > Next</Text></TouchableOpacity>
            <TouchableOpacity style={styles.createbtn} onPress={previous}><Text style={styles.textcontent}> Previous</Text></TouchableOpacity>
            <Card>
                
            </Card>
            <View style={{flexDirection:'row',marginTop:20,marginLeft:130,marginTop:30}}>
                <View>
               
              
                </View>
                <View>  
              
                   
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
    textcontent:{
        color: '#FFFFFF'
    },
    scrollview:{
        marginHorizontal:50,

    },
    content:{
        marginTop: 10,
        marginBottom: 60,
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

    },
    createbtn: {
        color:'#FFFFFF',
        
        width: "70%",
        marginLeft: 50,
        borderRadius: 100,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        backgroundColor: "#481196",
        
    
        
    
      },

})