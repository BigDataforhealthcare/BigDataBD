import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect } from "react";
import { Button, Image, View, Text, Alert, TouchableOpacity,StyleSheet } from "react-native";
import App from "./App";



function ImagePickerComponent({ onSubmit }) {
  const BGcolor = "#032130"
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
      Alert.alert("Succesful","Text has been converted and Saved");
    }
  };
  return (
    <View>

      {image && (
        <Image
          source={{ uri: image }}
          style={{ 
            width: 200, 
            height: 200,
             
            resizeMode: "contain",
            marginBottom: 10,
            alignItems:'center',
            justifyContent:'center'
         }}
        />
      )}

     <TouchableOpacity onPress={pickImage} style={style.uploading}>
     <Text style={style.uploadtext}> Upload Image</Text>
     </TouchableOpacity>
     
        
            <Text numberOfLines={6} style = {{ 
        color:'#FFFFFF',
        fontSize: 13,
        alignContent:'center',
    
        
        
        }}></Text>
    </View>
    
  );

  
}
const style = StyleSheet.create({
  uploading: {
    marginTop: 20,
    alignItems:'center',
    justifyContent: 'center',
    marginBottom: 5,
    backgroundColor: '#4CA3D3',
    borderRadius: 10,
  },
  uploadtext:{
    color:'#FFFFFF',
    fontSize: 20,
    alignItems:'center',
    padding: 2
  

  },

  image: {
    width:200,
    height:200,
    marginTop:0,
    marginBottom: 0,
    marginLeft:0,
  },

})

export default ImagePickerComponent;
