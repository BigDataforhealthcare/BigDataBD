import * as React from "react";
import { View, StyleSheet,SearchBar} from "react-native";
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

export default function SearchData(){
    const navigation = useNavigation();
    const[searchresults,setsearchresults] = React.useState('');
    const onChangeSearch = searchingresults => setsearchresults(searchingresults);
    
    return(
        <View>
             <SearchBar placeholder="Search" onChangeText={onChangeSearch} value={searchresults} 
        />
       
        </View>
       
    );

   



}
