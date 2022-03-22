import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import HomePageScreen from '../HomePage/HomePageScreen';
import StartScreen from '../Onboarding/StartScreen';
import SplashScreen from '../Onboarding/SplashScreen';
import LoadingScreen from '../Onboarding/LoadingScreen'
import NewPostScreen from '../HomePage/NewPostScreen';
import ChatScreen from '../Extending/ChatScreen';
import ChatNavigationScreen from '../Extending/ChatFunction/ChatNavigationScreen';

const Stack = createStackNavigator();

const AuthenScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Spash"
        screenOptions={{header: () => null}}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="HomePage" component={HomePageScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="NewPost" component={NewPostScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="ChatNavigation" component={ChatNavigationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthenScreen