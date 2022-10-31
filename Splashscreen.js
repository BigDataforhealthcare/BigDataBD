import React,{useRef} from 'react'
import {Animated,Image, View,Text} from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from "react-native";

const icon = 'assets\ab_icon.png';


const Logo ="assets\BD_Logo.png";


import {useNavigation} from "@react-navigation/native"
import { useFonts } from 'expo-font';

const BGcolor = "#032130"
export default function SplashScreen(){


    const navigation = useNavigation();
   

   

    



    const edges = useSafeAreaInsets();
    const StartAnimation =useRef(new Animated.Value(0)).current;
    return( 
        <View onC  style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: BGcolor
        }}>
            <Animated.View style={{
                flex: 1 ,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            

               <Image  source={require('./assets/ab_icon.png')}  style={{
                width:200,
                height:200,
                marginTop:-200,
                marginBottom:0,
               }}>
                </Image>
                <Text style={{

                    color:"#FFFFFF",
                    fontSize: 40,
                    fontFamily:'sans-serif',
                
                }} onPress={()=> navigation.navigate("Login Page")} >
                    BIG DATA
                </Text>
                <Text style={{
                    color:"#FFFFFF",
                    fontSize:15,
                    fontFamily:'sans-serif',
                }} onPress={()=> navigation.navigate("Login Page")} >
                    FOR HEALTHCARE
                </Text>

               
            </Animated.View>

        </View>
        
    )
}