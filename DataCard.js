import React,{useRef} from 'react'
import {Animated,Image, View} from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from "react-native";

import {useNavigation} from "@react-navigation/native"
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Card } from 'react-native-paper';
class DataCard extends Component {
    textdata = Data_text[Data_text.length - 1];
    constructor(){
        super()
        
    };
    render(){
        return (
            <div>
                <Card>
                <Card.Content>
                    <Title>File  {counter}</Title>
                        <Paragraph>{textdata}</Paragraph></Card.Content>
                </Card>
            </div>
        )
    }

}
