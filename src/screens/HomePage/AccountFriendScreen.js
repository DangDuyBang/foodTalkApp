import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";
import color from "../../assets/color/color";
import BtnNoLogo from "../../components/button/BtnNoLogo";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PostFriendScreen from "../Post/PostFriendScreen";
import RecipeFriendScreen from "../Recipe/RecipeFriendScreen";
import { useDispatch, useSelector } from "react-redux";
import useFetchPost from "../hooks/fetch/useFetchPost";
import useFetchFood from "../hooks/fetch/useFetchFood";
import { removeSelectedUserProfile } from "../../redux/userReducer";
import useUserAction from "../hooks/action/useUserAction";
import Navigators from "../../navigators/navigators/Navigators";
import { lightTheme, darkTheme } from "../../assets/color/Theme"

const Tab = createMaterialTopTabNavigator();

const AccountFriendScreen = ({ navigation }) => {
  const theme = useSelector((state) => state.theme.theme);

  let styles;
  {
    theme.mode === "light" ?
      styles = styles_light
      : styles = styles_dark;
  }

  const dispatch = useDispatch();
  const selectedUserProfile = useSelector(
    (state) => state.user.selectedUserProfile
  );
  const { useFollow, useUnfollow } = useUserAction();

  const currentUser = useSelector((state) => state.user.currentUser);

  const { navigateToChat } = Navigators();

  const isFollowing = () => {
    const index = currentUser.data.following.findIndex(
      (f) => f._id === selectedUserProfile.data._id
    );
    return index !== -1;
  };

  const eventFollowing = () => {
    useFollow(selectedUserProfile.data._id);
  };

  const eventUnfollowing = async () => {
    await useUnfollow(selectedUserProfile.data._id);
  };

  const { fetchSelectedUserPosts } = useFetchPost();
  const { fetchSelectedUserFoodsList } = useFetchFood();

  useEffect(() => {
    navigation.setOptions({
      title: selectedUserProfile.data.username,
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
          {isFollowing() ? (
            <TouchableOpacity onPress={navigateToChat}>
              <Ionicons
                name="chatbubble-ellipses-outline"
                style={{ marginRight: 15 }}
                size={28}
                color={color.primary}
              ></Ionicons>
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity>
            <Entypo
              name="dots-three-horizontal"
              style={{ marginRight: 15 }}
              size={28}
              color={color.primary}
            />
          </TouchableOpacity>
        </View>
      ),
    });

    fetchSelectedUserPosts();
    fetchSelectedUserFoodsList();

    return () => {
      dispatch(removeSelectedUserProfile());
    };
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mid}>
          <View style={styles.imageFrame}>
            <Image
              //source={require('../../assets/ImageDefault/background_signIn.jpg')}
              style={styles.coverImage}
              resizeMode="stretch"
              source={{
                uri: selectedUserProfile.data.cover_url,
              }}
            />
            <View style={styles.avatarFrame}>
              <Image
                style={styles.avatarImage}
                resizeMode='contain'
                source={{
                  // uri: currentUser.avatar_url,
                  uri: selectedUserProfile.data.avatar_url,
                }}
              />
            </View>

            <View style={styles.fullNameFrame}>
              <Text style={styles.fullName}>
                {selectedUserProfile.data.first_name +
                  " " +
                  selectedUserProfile.data.last_name}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bot}>
          <View
            style={{
              alignItems: "center",
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {isFollowing() ? (
              <BtnNoLogo
                eventButton={eventUnfollowing}
                nameButton="Following"
                colorView={color.inputColor}
                colorName={color.textIconSmall}
              />
            ) : (
              <BtnNoLogo
                eventButton={eventFollowing}
                nameButton="Follow"
                colorView={color.primary}
                colorName={color.background}
              />
            )}
          </View>
          <View style={styles.followView}>
            <View style={styles.followingView}>
              <Text style={styles.followText}>Following</Text>
              <Text style={styles.followNumberText}>
                {selectedUserProfile.data.following.length || 0}
              </Text>
            </View>
            <View style={styles.followingView}>
              <Text style={styles.followText}>Follower</Text>
              <Text style={styles.followNumberText}>
                {selectedUserProfile.data.follower.length || 0}
              </Text>
            </View>
            <View style={styles.followingView}>
              <Text style={styles.followText}>Like</Text>
              <Text style={styles.followNumberText}>50</Text>
            </View>
          </View>

          <Text style={styles.aboutText}>{selectedUserProfile.data.about}</Text>
        </View>

        {/* <TouchableOpacity>
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

        <Tab.Navigator
          tabBarOptions={{
            showLabel: false,
            showIcon: true,
            style: styles.tabAccount,
            paddingHorizontal: 15,
          }}
        >
          <Tab.Screen
            name="PostFriend"
            component={PostFriendScreen}
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
                    <Ionicons
                      name="ios-create-outline"
                      size={25}
                      color={focused ? lightTheme.SECOND_ICON_COLOR : lightTheme.HIDE_ICON_COLOR}
                    ></Ionicons>
                  </View>
                </View>
              ),
            }}
          />

          <Tab.Screen
            name="RecipeFriend"
            component={RecipeFriendScreen}
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
                    <Ionicons
                      name="book-outline"
                      size={25}
                      color={focused ? lightTheme.SECOND_ICON_COLOR : lightTheme.HIDE_ICON_COLOR}
                    ></Ionicons>
                  </View>
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </ScrollView>
    </View>
  );
};

export default AccountFriendScreen;

const styles_light = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
  },
  mid: {
    flexDirection: "row-reverse",
  },
  imageFrame: {
    alignItems: "center",
  },
  coverImage: {
    width: 420,
    height: 250,
  },
  chatFrame: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: lightTheme.SECOND_BACKGROUND_COLOR,
    position: "absolute",
    marginRight: 10,
    marginTop: 10,
  },
  avatarFrame: {
    width: 110,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: lightTheme.SECOND_BACKGROUND_COLOR,
    borderRadius: 200,
    position: "absolute",
    marginTop: 200,
  },
  avatarImage: {
    width: 110,
    height: 110,
    borderRadius: 200,
  },
  fullNameFrame: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 55,
  },
  fullName: {
    fontSize: 20,
    color: lightTheme.SECOND_TEXT_COLOR,
    fontWeight: "bold",
    marginRight: 10,
  },
  followView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
  followingView: {
    alignItems: "center",
    width: 80,
    height: 30,
  },
  followText: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: lightTheme.THIRD_TEXT_COLOR,
  },
  followNumberText: {
    fontWeight: "bold",
    fontFamily: "Roboto",
    fontSize: 16,
    color: lightTheme.SECOND_TEXT_COLOR,
  },
  aboutText: {
    textAlign: "center",
    marginVertical: 35,
    fontFamily: "Roboto",
    fontSize: 15,
    marginHorizontal: 30,
    color: darkTheme.SECOND_TEXT_COLOR
  },
  tabAccount: {
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
    borderTopWidth: 1,
    borderColor: lightTheme.SECOND_ICON_COLOR
  }
});

const styles_dark = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
  },
  mid: {
    flexDirection: "row-reverse",
  },
  imageFrame: {
    alignItems: "center",
  },
  coverImage: {
    width: 420,
    height: 250,
  },
  chatFrame: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: darkTheme.SECOND_BACKGROUND_COLOR,
    position: "absolute",
    marginRight: 10,
    marginTop: 10,
  },
  avatarFrame: {
    width: 110,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: darkTheme.SECOND_BACKGROUND_COLOR,
    borderRadius: 200,
    position: "absolute",
    marginTop: 200,
  },
  avatarImage: {
    width: 110,
    height: 110,
    borderRadius: 200,
  },
  fullNameFrame: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 55,
  },
  fullName: {
    fontSize: 20,
    color: darkTheme.SECOND_TEXT_COLOR,
    fontWeight: "bold",
    marginRight: 10,
  },
  followView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
  followingView: {
    alignItems: "center",
    width: 80,
    height: 30,
  },
  followText: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: darkTheme.THIRD_TEXT_COLOR,
  },
  followNumberText: {
    fontWeight: "bold",
    fontFamily: "Roboto",
    fontSize: 16,
    color: darkTheme.SECOND_TEXT_COLOR,
  },
  aboutText: {
    textAlign: "center",
    marginVertical: 35,
    fontFamily: "Roboto",
    fontSize: 15,
    marginHorizontal: 30,
    color: darkTheme.SECOND_TEXT_COLOR
  },
  tabAccount: {
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
    borderTopWidth: 1,
    borderColor: darkTheme.SECOND_ICON_COLOR
  }
});
