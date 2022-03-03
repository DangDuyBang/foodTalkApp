import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native'
import React, { useRef } from 'react'
import HomeScreen from './HomeScreen'
import ExploreScreen from './ExploreScreen'
import NotificationScreen from './NotificationScreen'
import AccountScreen from './AccountScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import color from '../../contains/color'
import { FontAwesome } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

const HomePageScreen = () => {

  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  function CreatePostScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      </View>
    );
  }

  return (
    <Tab.Navigator tabBarOptions={{
      showLabel: false,

      style: {
        backgroundColor: color.post,
        position: 'absolute',
        bottom: 15,
        marginHorizontal: 15,

        height: 60,
        borderRadius: 10,

        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowOffset: {
          width: 10,
          height: 10,
        },
        paddingHorizontal: 15,
      }
    }}>
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
                backgroundColor: focused ? color.textBlue : color.post,
                marginBottom: 15,
              }}></View>
              <FontAwesome
                name="ravelry"
                size={26}
                color={focused ? color.textBlue : color.textIconSmall}
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
                backgroundColor: focused ? color.textBlue : color.post,
                marginBottom: 12,
              }}></View>
              <FontAwesome
                name="wpexplorer"
                size={28}
                color={focused ? color.textBlue : color.textIconSmall}
              ></FontAwesome>
            </View>

          </View>
        )
      }} />

      < Tab.Screen name="CreatePost" component={CreatePostScreen} options={{
        tabBarIcon: ({ focused }) => (

          <TouchableOpacity>
            <View style={{
              width: 55,
              height: 55,
              borderRadius: 55,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: color.primary,
              bottom: '50%'
            }}>
              <Text style={{
                fontSize: 25,
                color: color.background,
              }}>+</Text>
            </View>
          </TouchableOpacity>

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
                backgroundColor: focused ? color.textBlue : color.post,
                marginBottom: 14,
              }}></View>
              <FontAwesome
                name="bell-o"
                size={25}
                color={focused ? color.textBlue : color.textIconSmall}
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
                backgroundColor: focused ? color.textBlue : color.post,
                marginBottom: 14,
              }}></View>
              <FontAwesome
                name="user-o"
                size={25}
                color={focused ? color.textBlue : color.textIconSmall}
              ></FontAwesome>
            </View>

          </View>
        )
      }} />
    </Tab.Navigator >
  )
}

export default HomePageScreen