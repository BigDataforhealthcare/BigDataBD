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
import ViewData from './ViewData';
import SearchData from './SearchData';
const BGcolor = "#032130";


global.Data_text = [];





const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="Home Page" component={SplashScreen}
      options={{
        title:'Home Page',
        headerStyle:{
          backgroundColor:BGcolor,
        },
        headerTitleStyle:{
          color: BGcolor,
        }
       
      }}/>
      <Stack.Screen name = "Login Page" component={LoginPage}
      options={{
        title: '',
        headerStyle:{
          backgroundColor:BGcolor,
        },
        headerTitleStyle:{
          color: '#fff',
        },
        headerTintColor: '#fff'
        
      }}/>
      <Stack.Screen name = "Create Account" component={CreateAccount}
      options={{
        title: '',
        headerStyle:{
          backgroundColor:BGcolor,
        },
        headerTitleStyle:{
          color: '#fff',
        },
        headerTintColor: '#fff'
      }}/>
      <Stack.Screen name = "Mainscreen"component={Mainscreen} options={{
        title: '',
        headerStyle:{
          backgroundColor:BGcolor,
        },
        headerTitleStyle:{
          color: '#fff',
        },
        headerTintColor: '#fff'
      }}/>
      <Stack.Screen name = "ImportData" component={ImportData} options={{
        title: '',
        headerStyle:{
          backgroundColor:BGcolor,
        },
        headerTitleStyle:{
          color: '#fff',
        },
        headerTintColor: '#fff'
      }}/>
      <Stack.Screen name = "ImportMainScreen" component={ImportMainScreen} options={{
        title: '',
        headerStyle:{
          backgroundColor:BGcolor,
        },
        headerTitleStyle:{
          color: '#fff',
        },
        headerTintColor: '#fff'
      }}/>
      <Stack.Screen name = "UploadPhoto" component={UploadPhotos} options={{
        title: '',
        headerStyle:{
          backgroundColor:BGcolor,
        },
        headerTitleStyle:{
          color: '#fff',
        },
        headerTintColor: '#fff'
      }}/>
       <Stack.Screen name = "ViewData" component={ViewData}
       options={{
        title: '',
        headerStyle:{
          backgroundColor:BGcolor,
        },
        headerTitleStyle:{
          color: '#fff',
        },
        headerTintColor: '#fff'
       }}/>
       <Stack.Screen name = "SearchData" component={SearchData}
        options={{
          title: '',
          headerStyle:{
            backgroundColor:BGcolor,
          },
          headerTitleStyle:{
            color: '#fff',
          },
          headerTintColor: '#fff'
         }}
       />
  
      
      </Stack.Navigator>
     

   </NavigationContainer>
  );
}


