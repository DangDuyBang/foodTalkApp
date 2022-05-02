import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import HomePageScreen from '../HomePage/HomePageScreen';
import StartScreen from '../Onboarding/StartScreen';
import SplashScreen from '../Onboarding/SplashScreen';
import LoadingScreen from '../Onboarding/LoadingScreen'
import { customTransition, config, closeConfig } from '../../utils/ScreenConfig';
import NewPostScreen from '../HomePage/NewPostScreen';

import ChatScreen from '../Extending/ChatScreen';

//import screen of CHAT
import ChatNavigationScreen from '../Extending/ChatFunction/ChatNavigationScreen';
import DetailChatScreen from '../Extending/ChatFunction/DetailChatScreen';

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
import IMLocationSelectorModal from '../Extending/Map/Map';
import ImageBrowserScreen from '../Extending/ImagePicker/ImagePickerMultiple';

import { UserContext } from '../../providers/UserProvider';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();


const AuthenScreen = () => {

  const isLoggedIn = useSelector(state => state.user.isLoggedIn)

  return (
    <NavigationContainer>
      {
        !isLoggedIn ?
          (
            <Stack.Navigator
              initialRouteName="Spash"
            >
              <Stack.Screen name="Splash" component={SplashScreen} options={{
                headerShown: false,
              }} />
              <Stack.Screen name="Start" component={StartScreen} options={{
                headerShown: false,
              }} />
              <Stack.Screen name="SignIn" component={SignInScreen} options={
                { headerShown: false }
              } />
              <Stack.Screen name="SignUp" component={SignUpScreen}
                options={{
                  gestureEnabled: true,
                  gestureDirection: 'horizontal',
                  transitionSpec: {
                    open: config,
                    close: closeConfig,
                  },
                  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                  title: 'Create your new account'
                }}
              />
              <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}
                options={{
                  gestureEnabled: true,
                  gestureDirection: 'horizontal',
                  transitionSpec: {
                    open: config,
                    close: closeConfig,
                  },
                  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                  title: 'Reset password'
                }}
              />
            </Stack.Navigator>
          ) :
          <Stack.Navigator initialRouteName='BottomSheet'>
            <Stack.Screen name='BottomSheet' component={HomePageScreen} options={{
              headerShown: false,
            }} />
            <Stack.Screen name="ChatNavigation" component={ChatNavigationScreen}
              options={{
                gestureEnabled: true,
                ...customTransition,
                headerShown: false,
              }}
            />
            <Stack.Screen name="NewPost" component={NewPostScreen}
              options={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: 'vertical',
                transitionSpec: {
                  open: config,
                  close: closeConfig,
                },
                //cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
              }}
            />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} />
            <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
            <Stack.Screen name="Feedback" component={FeedbackScreen} />
            <Stack.Screen name="TermOfService" component={TermOfServiceScreen} />

            <Stack.Screen name="CommentList" component={CommentListScreen}
              options={{
                title: 'Comments',
                gestureEnabled: true,
                gestureDirection: 'vertical',
                transitionSpec: {
                  open: config,
                  close: closeConfig,
                },
                cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
              }} />
            <Stack.Screen name="NewRecipe" component={NewRecipeScreen} />
            <Stack.Screen name="DetailRecipe" component={DetailRecipeScreen} />
            <Stack.Screen name="DetailChat" component={DetailChatScreen} />
            <Stack.Screen name="PersonalPage" component={PersonalPageScreen} />
          </Stack.Navigator>
      }
      {/* <HomePageScreen/> */}
      {/* <Stack.Navigator
        initialRouteName="Spash"
        screenOptions={{
          // header: () => null,
          //gestureEnabled: true,
          //gestureDirection: 'horizontal',
        }}
      //headerMode="none"
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} options = {
          {headerShown : false}
        }/>
        <Stack.Screen name="SignUp" component={SignUpScreen}
          options={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            transitionSpec: {
              open: config,
              close: closeConfig,
            },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            title: 'Create your new account'
          }}
        />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options ={{
          title: 'Reset password'
        }}/>
        <Stack.Screen name="HomePage" component={HomePageScreen} options = {{
          headerLeft: null, 
        }}/>

        <Stack.Screen name="Loading" component={LoadingScreen} />
        
        <Stack.Screen name="Chat" component={ChatScreen} />
       
        
        
        
        

        
        
      </Stack.Navigator> */}
    </NavigationContainer>
  )
}

export default AuthenScreen