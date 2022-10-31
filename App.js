import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native' ; 
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './Splashscreen';
import LoginPage from './LoginPage';
import Mainscreen from './Mainscreen';
import ImportData  from './ImportData';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="Splash Screen" component={SplashScreen}/>
      <Stack.Screen name = "Login Page" component={LoginPage}/>
      <Stack.Screen name = "Mainscreen"component={Mainscreen}/>
      <Stack.Screen name = "ImportData" component={ImportData}/>
      </Stack.Navigator>

   </NavigationContainer>
  );
}


