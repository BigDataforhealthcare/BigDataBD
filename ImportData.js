import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ImportData() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
 
  
  Camera.requestCameraPermissionsAsync();



  function toggleCameraType() {

    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    console.log('flip pressed');
  }

  return (
    <View style={styles.container} >
      <Camera style={styles.view} type={type} >
      </Camera>
      

      <TouchableOpacity style={styles.createbtn} onPress={toggleCameraType}>
        <Text>
          Flip</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createbtn_2} onPress={toggleCameraType}>
        <Text>
          Convert</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  view: {
  
    width:'100%',
    height: 300,
    
    

  
  },
   createbtn: {
    color:'#FFFFFF',
    width: "70%",
    borderRadius: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    backgroundColor: "#481196",
    marginLeft:50,
  },
    createbtn_2: {
    color:'#FFFFFF',
    width: "70%",
    borderRadius: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#481196",
    marginLeft:50,
    marginBottom: 150,
  },

  container: {
    flex: 1,
    backgroundColor: '#032130',
  }
 

}
)
