import { View, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import color from "../../contains/color";
import { FontAwesome } from "@expo/vector-icons";
import UserList from "../../screens/Extending/ChatFunction/UserList";
import Chat from "../../screens/Extending/ChatFunction/Chat";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const UserListScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserListPage"
        component={UserList}
        options={{
          title: "Users List",
        }}
      />
    </Stack.Navigator>
  );
};

const ChatListScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChatPage"
        component={Chat}
        options={{
          title: "Messages",
        }}
      />
    </Stack.Navigator>
  );
};

const ChatNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,

        style: {
          position: "absolute",
          bottom: 7,
          marginHorizontal: 10,

          height: 60,
          borderRadius: 10,

          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10,
          },
          paddingHorizontal: 15,
        },
      }}
    >
      <Tab.Screen
        name="ChatList"
        component={ChatListScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
                top: "0%",
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 65,
                    height: 2,
                    backgroundColor: focused ? color.primary : color.post,
                    marginBottom: 15,
                  }}
                ></View>
                <FontAwesome
                  name="wechat"
                  size={30}
                  color={focused ? color.primary : color.textIconSmall}
                ></FontAwesome>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="UserList"
        component={UserListScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
                top: "0%",
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 65,
                    height: 2,
                    backgroundColor: focused ? color.primary : color.post,
                    marginBottom: 12,
                  }}
                ></View>
                <FontAwesome
                  name="users"
                  size={28}
                  color={focused ? color.primary : color.textIconSmall}
                ></FontAwesome>
              </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ChatNavigation;

const styles = StyleSheet.create({
  tabBarIcon: {
    // container: {
    //   position: "absolute",
    //   top: 0,
    // },
  },
});
