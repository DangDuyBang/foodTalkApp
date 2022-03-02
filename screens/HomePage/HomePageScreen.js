import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './HomeScreen'
import ExploreScreen from './ExploreScreen'
import NotificationScreen from './NotificationScreen'
import AccountScreen from './AccountScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import color from '../../contains/color'
import {FontAwesome5} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

const HomePageScreen = () => {
  return (
    <Tab.Navigator tabBarOptions={{ 
      showlable: false,

      style: {
        backgroundColor: color.post,
        position: 'absolute',
        bottom: 40,
        marginHorizontal: 20,

        height: 60,
        borderRadius: 10,

        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowOffset: {
          width: 10,
          height: 10,
        }
      }
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome5
              name="home"
              size={20}
              ></FontAwesome5>
            </View>
        )
      }}/>
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  )
}

export default HomePageScreen