import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect } from 'react'
import color from '../../contains/color'
import { Ionicons, AntDesign } from '@expo/vector-icons'

import ComunityPostScreen from './ComunityPostScreen'
import HeartedPostScreen from './HeartedPostScreen'
import PrivatePostScreen from './PrivatePostScreen'
import RecipePublicScreen from './RecipePublicScreen'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from "@react-navigation/stack";

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { Portal } from '@gorhom/portal';
import { useSelector, useDispatch } from 'react-redux'
import AvatarUser from '../../components/AvatarUser'
import { fetchUserPost } from '../../services/PostServices'
import { setUserPosts } from '../../redux/userReducer'
import useFetchPost from './hooks/useFetchPost'
import InfinityScrollView from '../../components/InfinityScrollView'
import useFetchFood from './hooks/useFetchFood'


const Tab = createMaterialTopTabNavigator();

const AccountScreen = ({ navigation }) => {
  const currentUser = useSelector(state => state.user.currentUser.data)


  const eventChat = () => {
    navigation.navigate('ChatNavigation')
  }

  const eventEditProfile = () => {
    bs.current.snapTo(1)
    navigation.navigate('EditProfile')
  }

  const eventChangePassword = () => {
    bs.current.snapTo(1)
    navigation.navigate('ChangePassword')
  }

  const eventFeedback = () => {
    bs.current.snapTo(1)
    navigation.navigate('Feedback')
  }

  const eventTermOfService = () => {
    bs.current.snapTo(1)
    navigation.navigate('TermOfService')
  }

  const eventMoreSetting = () => {
    bs.current.snapTo(1)
    navigation.navigate('MoreSetting')
  }

  const eventLogout = () => {
    Alert.alert("LOG OUT!", "Are you sure you want to log out of this Account?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => navigation.navigate('SignIn') }
    ]);
    return true;
  }

  const renderInner = () => (
    <View style={styles.panel}>
      <View onPress={() => bs.current.snapTo(1)} style={{ alignItems: 'center' }}>
        <View style={{ height: 4, width: 65, borderRadius: 100, backgroundColor: color.textIconSmall, marginTop: 15 }} />
        <Text onPress={() => bs.current.snapTo(1)} style={{ fontFamily: 'Roboto', fontSize: 22, fontWeight: 'bold', color: color.textGray }}>Setting</Text>
      </View>
      <TouchableOpacity onPress={eventEditProfile}>
        <View style={styles.frameOptionSetting}>
          <Text style={styles.optionSetting}>Edit Profile</Text>
          <Text style={styles.optionSetting}>{'>'}</Text>
        </View >
      </TouchableOpacity>
      <TouchableOpacity onPress={eventChangePassword}>
        <View style={styles.frameOptionSetting}>
          <Text style={styles.optionSetting}>Change Password</Text>
          <Text style={styles.optionSetting}>{'>'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={eventFeedback}>
        <View style={styles.frameOptionSetting}>
          <Text style={styles.optionSetting}>Feedback</Text>
          <Text style={styles.optionSetting}>{'>'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={eventTermOfService}>
        <View style={styles.frameOptionSetting}>
          <Text style={styles.optionSetting}>Term of Service</Text>
          <Text style={styles.optionSetting}>{'>'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={eventMoreSetting}>
        <View style={styles.frameOptionSetting}>
          <Text style={styles.optionSetting}>More</Text>
          <Text style={styles.optionSetting}>{'>'}</Text>
        </View>
      </TouchableOpacity>
      <View style={{ height: 0.5, width: '100%', backgroundColor: color.textGray, marginTop: 15 }} />
      <TouchableOpacity onPress={eventLogout}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 25
          }}>
          <Ionicons name='exit-outline' size={42} color={color.errorColor}></Ionicons>
          <Text style={[styles.optionSetting, { marginBottom: 20 }]}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle}></View>
      </View>
    </View>
  );

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  const { fetchUserPosts } = useFetchPost()
  const { fetchUserFoodsList } = useFetchFood()

  useEffect(() => {
    fetchUserPosts()
    fetchUserFoodsList()

  }, []);

  return (
    <View style={styles.container}>
      <Portal name="modal">
        <BottomSheet
          ref={bs}
          snapPoints={['41%', -300]}
          borderRadius={10}
          renderContent={renderInner}
          renderHeader={renderHeader}
          initialSnap={1}
          callbackNode={fall}
          enabledGestureInteraction={true}
        />
      </Portal>
      <View style={styles.top}>
        <Text style={styles.nameUser}>{currentUser.username}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            <Ionicons name='settings' style={{ marginRight: 15 }} size={28} color={color.primary} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress = { eventChat }}>
            <Ionicons name='chatbubble-ellipses-outline'  size={28} color={color.primary}></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
      <Animated.View
        style={{
          margin: 0,
          opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
        }}
      >
        <ScrollView>
          <View style={styles.mid}>
            <View style={styles.imageFrame}>
              <Image
                //source={require('../../contains//assetImages//background_signIn.jpg')}
                style={styles.coverImage}
                resizeMode='cover'
                source={{
                  uri: currentUser.cover_url,
                }}
              />

              <View style={styles.avatarFrame}>
                <Image
                  style={styles.avatarImage}
                  resizeMode='cover'
                  source={{
                    // uri: currentUser.avatar_url,
                    uri: currentUser.avatar_url,
                  }}
                />
              </View>

              <View style={styles.fullNameFrame}>
                <Text style={styles.fullName}>{currentUser.first_name + " " + currentUser.last_name}</Text>
                <TouchableOpacity onPress={eventEditProfile}>
                  <Ionicons name='pencil' size={18} color={color.textIconSmall}></Ionicons>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.bot}>
            <View style={styles.followView}>
              <View style={styles.followingView}>
                <Text style={styles.followText}>Following</Text>
                <Text style={styles.followNumberText}>{currentUser.following.length || "0"}</Text>
              </View>
              <View style={styles.followingView}>
                <Text style={styles.followText}>Follower</Text>
                <Text style={styles.followNumberText}>{currentUser.follower.length || "0"}</Text>
              </View>
              <View style={styles.followingView}>
                <Text style={styles.followText}>Like</Text>
                <Text style={styles.followNumberText}>0</Text>
              </View>
            </View>

            {currentUser.about !== '' && <Text style={styles.aboutText}>
              {currentUser.about}
            </Text>}
          </View>

          {/* <TouchableOpacity onPress={() => navigation.navigate('PersonalPage')}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 10
            }}>
              <AntDesign name='book' size={20} color={color.primary}></AntDesign>
              <Text style={{
                fontFamily: 'Roboto',
                color: color.primary,
                fontSize: 15,
                fontWeight: 'bold',
                marginLeft: 5
              }}>
                Recipe
              </Text>
            </View>
          </TouchableOpacity> */}

          <Tab.Navigator tabBarOptions={{
            showLabel: false,
            showIcon: true,
            style: {

            },
            paddingHorizontal: 15,
          }}>
            <Tab.Screen name="Comunity" component={ComunityPostScreen} options={{
              tabBarIcon: ({ focused }) => (
                <View style={{
                  position: 'absolute',
                  top: '0%',
                }}>
                  <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <Ionicons
                      name="ios-create-outline"
                      size={25}
                      color={focused ? color.textBlack : color.hideColor}
                    ></Ionicons>
                  </View>
                </View>
              )
            }} />
            <Tab.Screen name="Hearted" component={HeartedPostScreen} options={{
              tabBarIcon: ({ focused }) => (
                <View style={{
                  position: 'absolute',
                  top: '0%',
                }}>
                  <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <Ionicons
                      name="heart-outline"
                      size={25}
                      color={focused ? color.textBlack : color.hideColor}
                    ></Ionicons>
                  </View>
                </View>
              )
            }} />
            <Tab.Screen name="Private" component={PrivatePostScreen} options={{
              tabBarIcon: ({ focused }) => (
                <View style={{
                  position: 'absolute',
                  top: '0%',
                }}>
                  <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <Ionicons
                      name="lock-closed-outline"
                      size={25}
                      color={focused ? color.textBlack : color.hideColor}
                    ></Ionicons>
                  </View>
                </View>
              )
            }} />
            <Tab.Screen name="RecipePublic" component={RecipePublicScreen} options={{
              tabBarIcon: ({ focused }) => (
                <View style={{
                  position: 'absolute',
                  top: '0%',
                }}>
                  <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <Ionicons
                      name="book-outline"
                      size={25}
                      color={focused ? color.textBlack : color.hideColor}
                    ></Ionicons>
                  </View>
                </View>
              )
            }} />
          </Tab.Navigator>
        </ScrollView>
      </Animated.View>
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    marginBottom: 100,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 12,
    paddingBottom: 8,
  },
  nameUser: {
    fontSize: 22,
    color: color.textGray,
    fontWeight: 'bold',
  },
  mid: {
    marginTop: 5,
    flexDirection: 'row-reverse',
  },
  imageFrame: {
    alignItems: 'center',
  },
  coverImage: {
    width: 420,
    height: 250,
  },
  chatFrame: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.post,
    position: 'absolute',
    marginRight: 10,
    marginTop: 10
  },
  avatarFrame: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.background,
    borderRadius: 120,
    position: 'absolute',
    marginTop: 195,
  },
  avatarImage: {
    width: 90,
    height: 90,
    borderRadius: 150,
  },
  fullNameFrame: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 55,
  },
  fullName: {
    fontSize: 20,
    color: color.textGray,
    fontWeight: 'bold',
    marginRight: 10,
    marginLeft: 40,
  },
  followView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 35
  },
  followingView: {
    alignItems: 'center',
    width: 80,
    height: 30
  },
  followText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: color.textIconSmall,
  },
  followNumberText: {
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 16,
    color: color.textGray,
  },
  aboutText: {
    textAlign: 'center',
    marginBottom: 35,
    fontFamily: 'Roboto',
    fontSize: 15,
    marginHorizontal: 30
  },
  panel: {
    backgroundColor: color.background,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
  },
  optionSetting: {
    fontFamily: 'Roboto',
    fontSize: 16,
    marginLeft: 5,
    marginTop: 20,
    color: color.textGray,
    fontWeight: '900'
  },
  frameOptionSetting: {
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bot: {
    marginBottom: 35
  }
})