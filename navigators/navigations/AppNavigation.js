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
import SignInScreen from "../../screens/Authentication/SignInScreen";
import SignUpScreen from "../../screens/Authentication/SignUpScreen";
import HomePageNavigation from "./HomePageNavigation";
import StartScreen from "../../screens/Onboarding/StartScreen";
import SplashScreen from "../../screens/Onboarding/SplashScreen";
import {
  customTransition,
  config,
  closeConfig,
} from "../../utils/ScreenConfig";
import color from "../../contains/color";

//import screen of CHAT
import ChatNavigation from "./ChatNavigation";
import DetailChatScreen from "../../screens/Extending/ChatFunction/DetailChatScreen";

import NewRecipeScreen from "../../screens/Extending/RecipeFunction/NewRecipeScreen";
import ForgotPasswordScreen from "../../screens/Authentication/ForgotPasswordScreen";
import UserReactionListScreen from "../../screens/Extending/DetailPost/UserReactionListScreen";
import CommentListScreen from "../../screens/Extending/DetailPost/CommentListScreen";
import PersonalPageScreen from "../../screens/Extending/PersonalPage/PersonalPageScreen";

//import screen of SETTING
import EditProfileScreen from "../../screens/Extending/Setting/EditProfileScreen";
import ChangePasswordScreen from "../../screens/Extending/Setting/ChangePasswordScreen";
import FeedbackScreen from "../../screens/Extending/Setting/FeedbackScreen";
import TermOfServiceScreen from "../../screens/Extending/Setting/TermOfServiceScreen";
import MoreSettingScreen from "../../screens/Extending/Setting/MoreSettingScreen";

import RecipeListScreen from "../../screens/Extending/RecipeFunction/RecipeListScreen";

import CreatePostNavigation from "./CreatePostNavigation";
import SearchScreen from "../../screens/HomePage/SearchScreen";

import DetailedPostScreen from "../../screens/Extending/DetailPost/DetailedPostScreen";
import ContentRecipeScreen from "../../screens/Extending/RecipeFunction/ContentRecipeScreen";
import EvaluateRecipeScreen from "../../screens/Extending/RecipeFunction/EvaluateRecipeScreen";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const DetailRecipeNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Recipe" component={ContentRecipeScreen} />
      <Tab.Screen name="Evaluate" component={EvaluateRecipeScreen} />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const currentFood = useSelector((state) => state.food.currentFood.data);

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
            name="NewPost"
            component={CreatePostNavigation}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
          <Stack.Screen
            name="ChangePassword"
            component={ChangePasswordScreen}
          />
          <Stack.Screen name="Feedback" component={FeedbackScreen} />
          <Stack.Screen name="TermOfService" component={TermOfServiceScreen} />
          <Stack.Screen name="MoreSetting" component={MoreSettingScreen} />

          <Stack.Screen
            name="UserReactionList"
            component={UserReactionListScreen}
            options={{
              title: "Reaction",
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
            name="CommentList"
            component={CommentListScreen}
            options={{
              title: "Comments",
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
          <Stack.Screen name="NewRecipe" component={NewRecipeScreen} />
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
          <Stack.Screen name="DetailChat" component={DetailChatScreen} />
          <Stack.Screen name="PersonalPage" component={PersonalPageScreen} />

          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{
              headerShown: true,
            }}
          />

          <Stack.Screen
            name="DetailedPost"
            component={DetailedPostScreen}
            options={{
              title: "Reaction",
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
