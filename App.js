import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthenScreen from './screens/Authentication/AuthenScreen';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/Onboarding/SplashScreen';
import LoadingScreen from './screens/Onboarding/LoadingScreen';

export default function App() {
  return (
      <AuthenScreen/>
  );
}

