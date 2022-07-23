import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSelector } from "react-redux";
import SignInScreen from "../../screens/authen/SignInScreen";
import SignUpScreen from "../../screens/authen/SignUpScreen";
import HomePageNavigation from "./HomePageNavigation";
import StartScreen from "../../screens/onboard/StartScreen";
import SplashScreen from "../../screens/onboard/SplashScreen";
import {
  customTransition,
  config,
  closeConfig,
} from "../../utils/ScreenConfig";
import color from "../../assets/color/color";

//import screen of CHAT
import ChatNavigation from "./ChatNavigation";
import ChatMessageScreen from "../../screens/chat/ChatMessageScreen";

import RecipeCreateScreen from "../../screens/Recipe/RecipeCreateScreen";
import ForgotPasswordScreen from "../../screens/authen/ForgotPasswordScreen";
import PostReacterScreen from "../../screens/Post/PostReacterScreen";
import PostCommentScreen from "../../screens/Post/PostCommentScreen";
import AccountFriendScreen from "../../screens/HomePage/AccountFriendScreen";

//import screen of SETTING
import EditProfileScreen from "../../screens/Setting/EditProfileScreen";
import ChangePasswordScreen from "../../screens/Setting/ChangePasswordScreen";
import FeedbackScreen from "../../screens/Setting/FeedbackScreen";
import TermOfServiceScreen from "../../screens/Setting/TermOfServiceScreen";
import MoreSettingScreen from "../../screens/Setting/MoreSettingScreen";

import RecipeListScreen from "../../screens/Recipe/RecipeListScreen";

import CreatePostNavigation from "./CreatePostNavigation";
import SearchScreen from "../../screens/HomePage/SearchScreen";

import PostDetailScreen from "../../screens/Post/PostDetailScreen";
import RecipeContentScreen from "../../screens/Recipe/RecipeContentScreen";
import RecipeEvaluateScreen from "../../screens/Recipe/RecipeEvaluateScreen";

import { lightTheme, darkTheme } from "../../assets/color/Theme"

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const DetailRecipeNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="RecipeContent" component={RecipeContentScreen} />
      <Tab.Screen name="RecipeEvaluate" component={RecipeEvaluateScreen} />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const currentFood = useSelector((state) => state.food.currentFood.data);

  const theme = useSelector((state) => state.theme.theme);

  let background_COLOR, text_COLOR;
  {
    theme.mode === "light" ?
      background_COLOR = lightTheme.FIRST_BACKGROUND_COLOR
      : background_COLOR = darkTheme.FIRST_BACKGROUND_COLOR;
  }
  {
    theme.mode === "light" ?
      text_COLOR = lightTheme.SECOND_TEXT_COLOR
      : text_COLOR = darkTheme.SECOND_TEXT_COLOR;
  }

  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <Stack.Navigator initialRouteName="Spash">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Start"
            component={StartScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{
              gestureEnabled: true,
              gestureDirection: "horizontal",
              transitionSpec: {
                open: config,
                close: closeConfig,
              },
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              title: "Create your new account",
            }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
            options={{
              gestureEnabled: true,
              gestureDirection: "horizontal",
              transitionSpec: {
                open: config,
                close: closeConfig,
              },
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              title: "Reset password",
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="BottomSheet">
          <Stack.Screen
            name="BottomSheet"
            component={HomePageNavigation}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="ChatNavigation"
            component={ChatNavigation}
            options={{
              gestureEnabled: true,
              ...customTransition,
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="CreatePostNavigation"
            component={CreatePostNavigation}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfileScreen}
            options={{
              headerStyle: {
                backgroundColor: background_COLOR,
              },
              headerTintColor: text_COLOR,
            }}
          />

          <Stack.Screen
            name="ChangePassword"
            component={ChangePasswordScreen}
            options={{
              headerStyle: {
                backgroundColor: background_COLOR,
              },
              headerTintColor: text_COLOR,
            }}
          />

          <Stack.Screen
            name="Feedback"
            component={FeedbackScreen}
            options={{
              headerStyle: {
                backgroundColor: background_COLOR,
              },
              headerTintColor: text_COLOR,
            }}

          />

          <Stack.Screen
            name="TermOfService"
            component={TermOfServiceScreen}
            options={{
              headerStyle: {
                backgroundColor: background_COLOR,
              },
              headerTintColor: text_COLOR,
            }}
          />

          <Stack.Screen name="MoreSetting" component={MoreSettingScreen} />

          <Stack.Screen
            name="PostReacter"
            component={PostReacterScreen}
            options={{
              title: "Reaction",
              headerStyle: {
                backgroundColor: background_COLOR,
              },
              headerTintColor: text_COLOR,
              gestureEnabled: true,
              gestureDirection: "vertical",
              transitionSpec: {
                open: config,
                close: closeConfig,
              },
              cardStyleInterpolator:
                CardStyleInterpolators.forModalPresentationIOS,
            }}
          />

          <Stack.Screen
            name="PostComment"
            component={PostCommentScreen}
            options={{
              title: "Comments",
              headerStyle: {
                backgroundColor: background_COLOR,
              },
              headerTintColor: text_COLOR,
              gestureEnabled: true,
              gestureDirection: "vertical",
              transitionSpec: {
                open: config,
                close: closeConfig,
              },
              cardStyleInterpolator:
                CardStyleInterpolators.forModalPresentationIOS,
            }}
          />

          <Stack.Screen
            name="RecipeCreate"
            component={RecipeCreateScreen}
            options={{
              headerStyle: {
                backgroundColor: background_COLOR,
              },
              headerTintColor: text_COLOR,
            }}
          />

          <Stack.Screen name="RecipeList" component={RecipeListScreen} />
          
          <Stack.Screen
            name="DetailRecipe"
            component={DetailRecipeNavigation}
            options={
              currentFood && {
                title: currentFood.name,
                headerRight: () => (
                  <View style={styles.rightView}>
                    <Text style={styles.markText}>{currentFood.avg_score}</Text>
                    <FontAwesome
                      name="star"
                      size={20}
                      color={color.starColor}
                    ></FontAwesome>
                  </View>
                ),
              }
            }
          />
          <Stack.Screen name="ChatMessage" component={ChatMessageScreen} />

          <Stack.Screen
            name="AccountFriend"
            component={AccountFriendScreen}
            options={{
              headerStyle: {
                backgroundColor: background_COLOR,
              },
              headerTintColor: text_COLOR,
            }}
          />

          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{
              headerShown: true,
            }}
          />

          <Stack.Screen
            name="PostDetail"
            component={PostDetailScreen}
            options={{
              gestureEnabled: true,
              gestureDirection: "horizontal",
              transitionSpec: {
                open: config,
                close: closeConfig,
              },
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({
  topView: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 7,
    paddingHorizontal: 15,
  },
  leftView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  topText: {
    fontFamily: "Roboto",
    fontSize: 22,
    fontWeight: "bold",
    color: color.textGray,
    marginLeft: 15,
  },
  rightView: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginRight: 16,
  },
  markText: {
    fontFamily: "Roboto",
    fontSize: 13,
    color: color.textIconSmall,
    marginRight: 5,
  },
});
