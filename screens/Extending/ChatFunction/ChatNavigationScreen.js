import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatListScreen from './ChatListScreen';
import UserListScreen from './UserListScreen';
import color from '../../../contains/color';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const ChatNavigationScreen = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            keyboardHidesTabBar: true,
            showLabel: false,

            style: {
                backgroundColor: color.post,
                position: 'absolute',
                bottom: 7,
                marginHorizontal: 10,

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
            <Tab.Screen name="ChatList" component={ChatListScreen} options={{
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
                                backgroundColor: focused ? color.primary : color.post,
                                marginBottom: 15,
                            }}></View>
                            <FontAwesome
                                name="wechat"
                                size={30}
                                color={focused ? color.primary : color.textIconSmall}
                            ></FontAwesome>
                        </View>

                    </View>
                )
            }} />
            <Tab.Screen name="UserList" component={UserListScreen} options={{
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
                                backgroundColor: focused ? color.primary : color.post,
                                marginBottom: 12,
                            }}></View>
                            <FontAwesome
                                name="users"
                                size={28}
                                color={focused ? color.primary : color.textIconSmall}
                            ></FontAwesome>
                        </View>

                    </View>
                )
            }} />
        </Tab.Navigator>
    );
}

export default ChatNavigationScreen