import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import HomePageScreen from '../HomePage/HomePageScreen';
import StartScreen from '../Onboarding/StartScreen';
import SplashScreen from '../Onboarding/SplashScreen';
import { customTransition, config, closeConfig } from '../../utils/ScreenConfig';
import color from '../../contains/color';


//import screen of CHAT
import ChatNavigationScreen from '../Extending/ChatFunction/ChatNavigationScreen';
import DetailChatScreen from '../Extending/ChatFunction/DetailChatScreen';

import NewRecipeScreen from '../Extending/RecipeFunction/NewRecipeScreen';
import DetailRecipeScreen from '../Extending/RecipeFunction/DetailRecipeScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import UserReactionListScreen from '../Extending/DetailPost/UserReactionListScreen';
import CommentListScreen from '../Extending/DetailPost/CommentListScreen';
import PersonalPageScreen from '../Extending/PersonalPage/PersonalPageScreen';

//import screen of SETTING
import EditProfileScreen from '../Extending/Setting/EditProfileScreen';
import ChangePasswordScreen from '../Extending/Setting/ChangePasswordScreen';
import FeedbackScreen from '../Extending/Setting/FeedbackScreen';
import TermOfServiceScreen from '../Extending/Setting/TermOfServiceScreen';
import MoreSettingScreen from '../Extending/Setting/MoreSettingScreen';

import RecipeListScreen from '../Extending/RecipeFunction/RecipeListScreen';

import { useSelector } from 'react-redux';
import CreatePostNavigation from '../HomePage/CreatePostNavigation';
import SearchScreen from '../HomePage/SearchScreen';

import DetailedPostScreen from '../Extending/DetailPost/DetailedPostScreen';

const Stack = createStackNavigator();


const AuthenScreen = () => {

  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const currentFood = useSelector(state => state.food.currentFood.data)

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
            <Stack.Screen name="NewPost" component={CreatePostNavigation}
              options={{
                headerShown: false,
                gestureEnabled: false,
                // gestureDirection: 'vertical',
                // transitionSpec: {
                //   open: config,
                //   close: closeConfig,
                // },
                //cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
              }}
            />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} />
            <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
            <Stack.Screen name="Feedback" component={FeedbackScreen} />
            <Stack.Screen name="TermOfService" component={TermOfServiceScreen} />
            <Stack.Screen name="MoreSetting" component={MoreSettingScreen} />

            <Stack.Screen name="UserReactionList" component={UserReactionListScreen}
              options={{
                title: 'Reaction',
                gestureEnabled: true,
                gestureDirection: 'vertical',
                transitionSpec: {
                  open: config,
                  close: closeConfig,
                },
                cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
              }} />

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
            <Stack.Screen name="RecipeList" component={RecipeListScreen} />
            <Stack.Screen name="DetailRecipe" component={DetailRecipeScreen} options={currentFood && {
              title: currentFood.name,
              headerRight: () => (
                <View style={styles.rightView}>
                  <Text style={styles.markText}>{currentFood.avg_score}</Text>
                  <FontAwesome name='star' size={20} color={color.starColor}></FontAwesome>
                </View>
              )
            }} />
            <Stack.Screen name="DetailChat" component={DetailChatScreen} />
            <Stack.Screen name="PersonalPage" component={PersonalPageScreen} />

            <Stack.Screen name="Search" component={SearchScreen} options={{
              headerShown: true
            }} />

            <Stack.Screen name="DetailedPost" component={DetailedPostScreen}
              options={{
                title: 'Reaction',
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                transitionSpec: {
                  open: config,
                  close: closeConfig,
                },
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }} />

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

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 7,
    paddingHorizontal: 15
  },
  leftView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  topText: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: 'bold',
    color: color.textGray,
    marginLeft: 15
  },
  rightView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 16,
  },
  markText: {
    fontFamily: 'Roboto',
    fontSize: 13,
    color: color.textIconSmall,
    marginRight: 5,
  }
})