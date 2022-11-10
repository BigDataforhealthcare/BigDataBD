import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native' ; 
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './Splashscreen';
import LoginPage from './LoginPage';
import CreateAccount from './CreateAccount';
import Mainscreen from './Mainscreen';
import ImportData from './ImportData';
import ImportMainScreen from './ImportMainScreen';
import UploadPhotos from './UploadPhotos';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="Splash Screen" component={SplashScreen}/>
      <Stack.Screen name = "Login Page" component={LoginPage}/>
      <Stack.Screen name = "Create Account" component={CreateAccount}/>
      <Stack.Screen name = "Mainscreen"component={Mainscreen}/>
      <Stack.Screen name = "ImportData" component={ImportData}/>
      <Stack.Screen name = "ImportMainScreen" component={ImportMainScreen}/>
      <Stack.Screen name = "UploadPhoto" component={UploadPhotos}/>
      
      </Stack.Navigator>

   </NavigationContainer>
  );
}


