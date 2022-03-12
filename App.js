import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthenScreen from './screens/Authentication/AuthenScreen';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/Onboarding/SplashScreen';
import LoadingScreen from './screens/Onboarding/LoadingScreen';
import axios from 'axios';
import { io } from 'socket.io-client';
import {useReducer, useState, useEffect, createContext} from 'react'
import { UserReducer, initialUserState } from './context/UserContext';



export const UserContext = createContext()

axios.defaults.baseURL = 'https://foodtalk-backend.herokuapp.com'


export default function App() {

  const [userState, userDispatch] = useReducer(UserReducer, initialUserState);

  useEffect(() => {
    if (userState.isLoggedIn) {
      let socketio = io('https://foodtalk-backend.herokuapp.com', { transports: ['websocket'] })
      userDispatch({ type: 'SET_SOCKETIO', payload: socketio })
      socketio.on('connect', () => {
        console.log('connected')
      })

      socketio.on('notification', ({ data }) => {
        uiDispatch({ type: 'ADD_NOTIFICATION', payload: data })
      })
  
    return () => {
      socketio.disconnect()
        userDispatch({ type: 'SET_SOCKETIO', payload: null })
        console.log('disconnect')
    }
  }
}, [userState.isLoggedIn])

  return (
    <UserContext.Provider value = {{userState, userDispatch}}>

      <AuthenScreen/>

    </UserContext.Provider>
  );
}

