import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import React from "react";
import AccountScreen from "../../screens/HomePage/AccountScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import color from "../../assets/color/color";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/HomePage/HomeScreen";
import Explore from "../../screens/HomePage/Explore";
import NotificationScreen from "../../screens/HomePage/NotificationScreen";
import Navigators from "../navigators/Navigators";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const NotiNavigation = () => {
  const { navigateToChat } = Navigators();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NotificationPage"
        component={NotificationScreen}
        options={{
          title: "Notifications",
          headerRight: () => (
            <View style={styles.chatFrame}>
              <TouchableOpacity onPress={navigateToChat}>
                <Ionicons
                  name="chatbubble-ellipses-outline"
                  size={28}
                  color={color.primary}
                ></Ionicons>
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const ExploreScreen = () => {
  const { navigateToChat, navigateToSearch } = Navigators();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ExplorePage"
        component={Explore}
        options={{
          headerShown: false,
          headerTitle: () => (
            <TouchableOpacity onPress={navigateToSearch}>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  backgroundColor: color.inputColor,
                  paddingHorizontal: 15,
                  borderRadius: 25,
                  alignItems: "center",
                  height: 40,
                }}
              >
                <FontAwesome
                  name="search"
                  size={20}
                  style={{
                    color: color.textIconSmall,
                    marginRight: 10,
                  }}
                ></FontAwesome>
                <Text
                  style={{
                    color: color.hideColor,
                  }}
                >
                  Search
                </Text>
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => {
            return (
              <View style={styles.chatFrame}>
                <TouchableOpacity onPress={navigateToChat}>
                  <Ionicons
                    name="chatbubble-ellipses-outline"
                    size={28}
                    color={color.primary}
                  ></Ionicons>
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

const HomePage = () => {
  const { navigateToChat, navigateToSearch } = Navigators();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomeScreen}
        options={{
          title: "Food Talk",
          headerRight: () => (
            <View style={styles.iconRightTop}>
              <View style={styles.searchUserFrame}>
                <TouchableOpacity onPress={navigateToSearch}>
                  <Ionicons
                    name="search-outline"
                    size={28}
                    color={color.primary}
                  ></Ionicons>
                </TouchableOpacity>
              </View>
              <View style={styles.chatFrame}>
                <TouchableOpacity onPress={navigateToChat}>
                  <Ionicons
                    name="chatbubble-ellipses-outline"
                    size={28}
                    color={color.primary}
                  ></Ionicons>
                </TouchableOpacity>
              </View>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const HomePageNavigation = () => {
  const notifications = useSelector((state) => state.ui.notifications);

  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,

        style: {
          backgroundColor: color.background,
          //position: "absolute",
          //bottom: 5,
          //marginHorizontal: 10,
          //borderRadius: 10,

          height: 60,


          shadowColor: "#000",
          shadowOpacity: 0.2,
          shadowOffset: {
            width: 10,
            height: 10,
          },
          paddingHorizontal: 15,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
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
                    backgroundColor: color.background,
                    marginBottom: 15,
                  }}
                ></View>
                <FontAwesome
                  name="eercast"
                  size={26}
                  color={focused ? color.primary : color.hideColor}
                ></FontAwesome>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
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
                    backgroundColor: color.background,
                    marginBottom: 12,
                  }}
                ></View>
                <FontAwesome
                  name="wpexplorer"
                  size={28}
                  color={focused ? color.primary : color.hideColor}
                ></FontAwesome>
              </View>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={NotiNavigation}
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
                    backgroundColor: color.background,
                    marginBottom: 14,
                  }}
                ></View>
                <FontAwesome
                  name="bell"
                  size={22}
                  color={focused ? color.primary : color.hideColor}
                ></FontAwesome>
              </View>
            </View>
          ),

          tabBarBadge:
            notifications.filter((n) => n.is_seen === false).length === 0
              ? null
              : notifications.filter((n) => n.is_seen === false).length,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
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
                    backgroundColor: color.background,
                    marginBottom: 14,
                  }}
                ></View>
                <FontAwesome
                  name="user"
                  size={25}
                  color={focused ? color.primary : color.hideColor}
                ></FontAwesome>
              </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomePageNavigation;

const styles = StyleSheet.create({
  iconRightTop: {
    flexDirection: "row",
    marginRight: 16,
  },
  searchUserFrame: {
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  chatFrame: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: color.background,
    paddingBottom: 65,
  },
  topView: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    alignItems: "center",
  },
  bodyView: {
    paddingTop: 10,
  },
});
