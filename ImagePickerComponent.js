import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect } from "react";
import { Button, Image, View, Text, Alert } from "react-native";
import App from "./App";



function ImagePickerComponent({ onSubmit }) {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setText("Loading..");
      const responseData = await onSubmit(result.base64);
      setText(responseData.text);
      Data_text.push(responseData.text);
      console.log(Data_text.length);
      Alert.alert("Succesful","Text has been converted, Double Check for Errors");
      
    }
  };
  return (
    <View>

      {image && (
        <Image
          source={{ uri: image }}
          style={{ 
            width: 400, 
            height: 300, 
            resizeMode: "contain",
            marginBottom: 10,
            marginLeft:-30,
         }}
        />
      )}
     
            <Button title="Upload Image" style={{
            }} onPress={pickImage} />
        
            <Text numberOfLines={6} style = {{ 
        color:'#FFFFFF',
        fontSize: 13,
        alignContent:'center',
    
        
        
        }}>{text}</Text>
    </View>
    
  );
  
}

export default ImagePickerComponent;
