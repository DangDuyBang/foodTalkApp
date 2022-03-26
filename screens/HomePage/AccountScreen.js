import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import color from '../../contains/color'
import { Ionicons } from '@expo/vector-icons'
import ComunityPostScreen from './ComunityPostScreen'
import HeartedPostScreen from './HeartedPostScreen'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { UserContext } from '../../providers/UserProvider'
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

const Tab = createMaterialTopTabNavigator();

const AccountScreen = ({ navigation }) => {
  const { userState, userDispatch } = useContext(UserContext)

  const eventChat = () => {
    navigation.navigate('ChatNavigation')
  }

  const eventLogout = () => {
    navigation.navigate('SignIn')
  }

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: 'center' }}>
        <View style={{ height: 3, width: 35, backgroundColor: color.textBlack, marginTop: 15 }} />
        <Text style={{ fontFamily: 'Roboto', fontSize: 22, fontWeight: 'bold', color: color.textGray }}>Setting</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.frameOptionSetting}>
          <Text style={styles.optionSetting}>Edit Profile</Text>
          <Text style={styles.optionSetting}>></Text>
        </View >
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.frameOptionSetting}>
          <Text style={styles.optionSetting}>Change Password</Text>
          <Text style={styles.optionSetting}>></Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.frameOptionSetting}>
          <Text style={styles.optionSetting}>Feedback</Text>
          <Text style={styles.optionSetting}>></Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.frameOptionSetting}>
          <Text style={styles.optionSetting}>Term of Service</Text>
          <Text style={styles.optionSetting}>></Text>
        </View>
      </TouchableOpacity>
      <View style={{ height: 0.5, width: '100%', backgroundColor: color.textGray, marginTop: 15 }} />
      <TouchableOpacity onPress={eventLogout}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 20
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

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={['39%', -300]}
        borderRadius={10}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <View style={styles.top}>
        <Text style={styles.nameUser}>{userState.currentUser.username}</Text>
        <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
          <Ionicons name='settings' size={24} color={color.textGray} />
        </TouchableOpacity>
      </View>
      <Animated.View
        style={{
          margin: 0,
          opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
        }}>
        <ScrollView>
          <View style={styles.mid}>
            <View style={styles.imageFrame}>
              <Image
                //source={require('../../contains//assetImages//background_signIn.jpg')}
                style={styles.coverImage}
                resizeMode='stretch'
                source={{
                  uri: 'https://i.pinimg.com/564x/f7/c9/21/f7c9219902a7472f5c9bc244548311ce.jpg',
                }}
              />

              <View style={styles.avatarFrame}>
                <Image
                  //source={require('../../contains//assetImages//background_signIn.jpg')}
                  style={styles.avatarImage}
                  resizeMode='stretch'
                  source={{
                    uri: 'https://i.pinimg.com/564x/eb/ef/d5/ebefd5173889e9a8502cf04e7b016847.jpg',
                  }}
                />
              </View>

              <View style={styles.fullNameFrame}>
                <Text style={styles.fullName}>{userState.currentUser.first_name + " " + userState.currentUser.last_name}</Text>
                <TouchableOpacity>
                  <Ionicons name='pencil' size={18} color={color.textIconSmall}></Ionicons>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.chatFrame}>
              <TouchableOpacity onPress={eventChat}>
                <Ionicons name='chatbubble-ellipses-outline' size={42} color={color.primary}></Ionicons>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bot}>
            <View style={styles.followView}>
              <View style={styles.followingView}>
                <Text style={styles.followText}>Following</Text>
                <Text style={styles.followNumberText}>{userState.currentUser.following.length || "0"}</Text>
              </View>
              <View style={styles.followingView}>
                <Text style={styles.followText}>Follower</Text>
                <Text style={styles.followNumberText}>{userState.currentUser.follower.length || "0"}</Text>
              </View>
              <View style={styles.followingView}>
                <Text style={styles.followText}>Like</Text>
                <Text style={styles.followNumberText}>0</Text>
              </View>
            </View>

            <Text style={styles.aboutText}>My passion is cooking</Text>

          </View>

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
                      name="fast-food-outline"
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
    paddingTop: 50,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  nameUser: {
    fontSize: 20,
    color: color.textGray,
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  },
  mid: {
    marginTop: 5,
    flexDirection: 'row-reverse'
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
    marginTop: 200
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
    marginTop: 35,
    fontFamily: 'Roboto',
    fontSize: 15,
    marginBottom: 50,
  },
  panel: {
    backgroundColor: color.background,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 0.5
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
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})