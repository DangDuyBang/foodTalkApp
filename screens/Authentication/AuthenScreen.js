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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthenScreen