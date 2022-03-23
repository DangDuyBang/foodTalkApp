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

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
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
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      //headerMode="none"
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen}
          options={{
            gestureDirection: 'horizontal',
            transitionSpec: {
              open: config,
              close: closeConfig,
            },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen name="HomePage" component={HomePageScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="NewPost" component={NewPostScreen}
          options={{
            gestureDirection: 'vertical',
            transitionSpec: {
              open: config,
              close: closeConfig,
            },
            cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          }}
        />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="ChatNavigation" component={ChatNavigationScreen}
          options={{
            ...customTransition,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthenScreen