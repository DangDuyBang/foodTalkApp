import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import HomePageScreen from '../HomePage/HomePageScreen';
import StartScreen from '../Onboarding/StartScreen';
import SplashScreen from '../Onboarding/SplashScreen';
import LoadingScreen from '../Onboarding/LoadingScreen'
import NewPostScreen from '../HomePage/NewPostScreen';
import ChatScreen from '../Extending/ChatScreen';
import ChatNavigationScreen from '../Extending/ChatFunction/ChatNavigationScreen';
import { Easing } from 'react-native-reanimated';
import RecipeAttachedScreen from '../Extending/RecipeFunction/RecipeAttachedScreen';
import NewRecipeScreen from '../Extending/RecipeFunction/NewRecipeScreen';
import DetailRecipeScreen from '../Extending/RecipeFunction/DetailRecipeScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import CommentListScreen from '../Extending/DetailPost/CommentListScreen';
import PersonalPageScreen from '../Extending/PersonalPage/PersonalPageScreen';

//import screen of SETTING
import EditProfileScreen from '../Extending/Setting/EditProfileScreen';
import ChangePasswordScreen from '../Extending/Setting/ChangePasswordScreen';
import FeedbackScreen from '../Extending/Setting/FeedbackScreen';
import TermOfServiceScreen from '../Extending/Setting/TermOfServiceScreen';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1500,
    damping: 300,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  }
}

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  }
}

const customTransition = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0]
            })
          },
          {
            rotate: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: ["180deg", "0deg"],
            })
          },
          {
            scale: next ?
              next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0.7],
              }) : 1,
          }
        ]
      }
    }
  }
}

const AuthenScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Spash"
        screenOptions={{
          header: () => null,
          //gestureEnabled: true,
          //gestureDirection: 'horizontal',
        }}
      //headerMode="none"
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen}
          options={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            transitionSpec: {
              open: config,
              close: closeConfig,
            },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="HomePage" component={HomePageScreen} />
        <Stack.Screen name="CommentList" component={CommentListScreen}
          options={{
            gestureEnabled: true,
            gestureDirection: 'vertical',
            transitionSpec: {
              open: config,
              close: closeConfig,
            },
            cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          }} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="NewPost" component={NewPostScreen}
          options={{
            gestureEnabled: true,
            gestureDirection: 'vertical',
            transitionSpec: {
              open: config,
              close: closeConfig,
            },
            cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          }}
        />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="RecipeAttached" component={RecipeAttachedScreen}
          options={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            transitionSpec: {
              open: config,
              close: closeConfig,
            },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen name="NewRecipe" component={NewRecipeScreen} />
        <Stack.Screen name="DetailRecipe" component={DetailRecipeScreen} />
        <Stack.Screen name="ChatNavigation" component={ChatNavigationScreen}
          options={{
            gestureEnabled: true,
            ...customTransition,
          }}
        />
        <Stack.Screen name="PersonalPage" component={PersonalPageScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
        <Stack.Screen name="TermOfService" component={TermOfServiceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthenScreen