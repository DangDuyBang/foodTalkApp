import { StyleSheet, Text, View, TouchableOpacity, Animated, Image } from 'react-native'
import React, { useRef } from 'react'
import HomeScreen from './HomeScreen'
import ExploreScreen from './ExploreScreen'
import NotificationScreen from './NotificationScreen'
import AccountScreen from './AccountScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import color from '../../contains/color'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import NewPostScreen from './NewPostScreen'
import CreatePostScreen from '../HomePage/CreatePostScreen'

const Tab = createBottomTabNavigator();

const HomePageScreen = ({ navigation }) => {

  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,

        style: {
          backgroundColor: color.background,
          position: 'absolute',
          bottom: 5,
          marginHorizontal: 10,

          height: 60,
          borderRadius: 10,

          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowOffset: {
            width: 10,
            height: 10,
          },
          paddingHorizontal: 15,
        }

      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            position: 'absolute',
            top: '0%',
          }}>
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <View style={{
                width: 65,
                height: 2,
                backgroundColor: focused ? color.primary : color.background,
                marginBottom: 15,
              }}></View>
              <FontAwesome
                name="ravelry"
                size={26}
                color={focused ? color.primary : color.textIconSmall}
              ></FontAwesome>
            </View>

          </View>
        )
      }} />
      < Tab.Screen name="Explore" component={ExploreScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            position: 'absolute',
            top: '0%',
          }}>
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <View style={{
                width: 65,
                height: 2,
                backgroundColor: focused ? color.primary : color.background,
                marginBottom: 12,
              }}></View>
              <FontAwesome
                name="wpexplorer"
                size={28}
                color={focused ? color.primary : color.textIconSmall}
              ></FontAwesome>
            </View>

          </View>
        )
      }} />


      <Tab.Screen name="Notification" component={NotificationScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            position: 'absolute',
            top: '0%',
          }}>
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <View style={{
                width: 65,
                height: 2,
                backgroundColor: focused ? color.primary : color.background,
                marginBottom: 14,
              }}></View>
              <FontAwesome
                name="bell-o"
                size={25}
                color={focused ? color.primary : color.textIconSmall}
              ></FontAwesome>
            </View>

          </View>
        )
      }} />
      <Tab.Screen name="Account" component={AccountScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            position: 'absolute',
            top: '0%',
          }}>
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <View style={{
                width: 65,
                height: 2,
                backgroundColor: focused ? color.primary : color.background,
                marginBottom: 14,
              }}></View>
              <FontAwesome
                name="user-o"
                size={25}
                color={focused ? color.primary : color.textIconSmall}
              ></FontAwesome>
            </View>

          </View>
        )
      }} />
    </Tab.Navigator >
  )
}

export default HomePageScreen