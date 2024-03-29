import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import { Portal } from "@gorhom/portal";
import { useSelector, useDispatch } from "react-redux";
import color from "../../assets/color/color";
import PostPublicScreen from "../Post/PostPublicScreen";
import PostHeartedScreen from "../Post/PostHeartedScreen";
import PostPrivateScreen from "../Post/PostPrivateScreen";
import RecipePublicScreen from "../Recipe/RecipePublicScreen";
import { logout } from "../../redux/reducers/userReducer";
import { logoutUser } from "../../services/AuthServices";
import axios from "axios";
import Navigators from "../../navigators/navigators/Navigators";
import { lightTheme, darkTheme } from "../../assets/color/Theme";
import PostServices from "../../services/PostServices";
import FoodServices from "../../services/FoodServices";

const Tab = createMaterialTopTabNavigator();

const AccountScreen = () => {
  const theme = useSelector((state) => state.theme.theme);

  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const {
    navigateToChat,
    navigateToEditProfile,
    navigateToMoreSetting,
    navigateToTermOfService,
    navigateToChangePassword,
    navigateToFeedBack,
  } = Navigators();

  const eventEditProfile = () => {
    bs.current.snapTo(1);
    navigateToEditProfile();
  };

  const eventChangePassword = () => {
    bs.current.snapTo(1);
    navigateToChangePassword();
  };

  const eventFeedback = () => {
    bs.current.snapTo(1);
    navigateToFeedBack();
  };

  const eventTermOfService = () => {
    bs.current.snapTo(1);
    navigateToTermOfService();
  };

  const eventMoreSetting = () => {
    bs.current.snapTo(1);
    navigateToMoreSetting();
  };

  const handleLogout = async () => {
    dispatch(logout());
    await logoutUser()
      .then((res) => console.log(res.data.message))
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data.err);
        }
      });

    axios.defaults.headers.common["Authorization"] = "";
  };

  const eventLogout = () => {
    Alert.alert(
      "LOG OUT!",
      "Are you sure you want to log out of this Account?",
      [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: handleLogout },
      ]
    );
    return true;
  };

  const renderInner = () => (
    <View style={styles.panel}>
      <View
        onPress={() => bs.current.snapTo(1)}
        style={{ alignItems: "center" }}
      >
        <View
          style={{
            height: 4,
            width: 65,
            borderRadius: 100,
            backgroundColor: color.textIconSmall,
            marginTop: 15,
          }}
        />
        <Text onPress={() => bs.current.snapTo(1)} style={styles.titleSetting}>
          Setting
        </Text>
      </View>
      <TouchableOpacity onPress={eventEditProfile}>
        <View style={styles.frameOptionSetting}>
          <Text style={styles.optionSetting}>Edit Profile</Text>
          <Text style={styles.optionSetting}>{">"}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={eventChangePassword}>
        <View style={styles.frameOptionSetting}>
          <Text style={styles.optionSetting}>Change Password</Text>
          <Text style={styles.optionSetting}>{">"}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={eventFeedback}>
        <View style={styles.frameOptionSetting}>
          <Text style={styles.optionSetting}>Feedback</Text>
          <Text style={styles.optionSetting}>{">"}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={eventTermOfService}>
        <View style={styles.frameOptionSetting}>
          <Text style={styles.optionSetting}>Term of Service</Text>
          <Text style={styles.optionSetting}>{">"}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={eventMoreSetting}>
        <View style={styles.frameOptionSetting}>
          <Text style={styles.optionSetting}>More</Text>
          <Text style={styles.optionSetting}>{">"}</Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: color.textGray,
          marginTop: 15,
        }}
      />
      <TouchableOpacity onPress={eventLogout}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 25,
          }}
        >
          <Ionicons
            name="exit-outline"
            size={42}
            color={color.errorColor}
          ></Ionicons>
          <Text style={[styles.optionSetting, { marginBottom: 20 }]}>
            Logout
          </Text>
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

  const posts = useSelector((state) => state.post.userPosts);
  const foods = useSelector((state) => state.food.userFoods);
  const { fetchPersonalPosts } = PostServices();
  const { fetchPersonalFoods } = FoodServices();

  const fetchUPost = () => {
    if (posts.rows.length > posts.count) return;
    fetchPersonalPosts(posts.currentPage, 20);
  };

  const fetchUFood = () => {
    if (foods.rows.length > foods.count) return;
    fetchPersonalFoods(foods.currentPage, 20);
  };

  useEffect(() => {
    if (posts.rows.length === 0) fetchUPost();
    if (foods.rows.length === 0) fetchUFood();
  }, []);

  const styles = theme.mode === "light" ? styles_light : styles_dark;

  return (
    <View style={styles.container}>
      <Portal name="modal">
        <BottomSheet
          ref={bs}
          snapPoints={["41%", -300]}
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
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            <Ionicons
              name="settings"
              style={{ marginRight: 15 }}
              size={28}
              color={color.primary}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToChat}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={28}
              color={color.primary}
            ></Ionicons>
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
                //source={require('../../assets/ImageDefault/background_signIn.jpg')}
                style={styles.coverImage}
                resizeMode="cover"
                source={{
                  uri: currentUser.cover_url,
                }}
              />

              <View style={styles.avatarFrame}>
                <Image
                  style={styles.avatarImage}
                  resizeMode="cover"
                  source={{
                    // uri: currentUser.avatar_url,
                    uri: currentUser.avatar_url,
                  }}
                />
              </View>

              <View style={styles.fullNameFrame}>
                <Text style={styles.fullName}>
                  {currentUser.name}
                </Text>
                <TouchableOpacity onPress={eventEditProfile}>
                  {theme.mode === "light" ? (
                    <Ionicons
                      name="pencil"
                      size={18}
                      color={lightTheme.SECOND_ICON_COLOR}
                    ></Ionicons>
                  ) : (
                    <Ionicons
                      name="pencil"
                      size={18}
                      color={darkTheme.SECOND_BUTTON_COLOR}
                    ></Ionicons>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.bot}>
            <View style={styles.followView}>
              <View style={styles.followingView}>
                <Text style={styles.followText}>Following</Text>
                <Text style={styles.followNumberText}>
                  {currentUser.following.length || "0"}
                </Text>
              </View>
              <View style={styles.followingView}>
                <Text style={styles.followText}>Follower</Text>
                <Text style={styles.followNumberText}>
                  {currentUser.follower.length || "0"}
                </Text>
              </View>
              <View style={styles.followingView}>
                <Text style={styles.followText}>Like</Text>
                <Text style={styles.followNumberText}>0</Text>
              </View>
            </View>

            {currentUser.about !== "" && (
              <Text style={styles.aboutText}>{currentUser.about}</Text>
            )}
          </View>

          <Tab.Navigator
            tabBarOptions={{
              showLabel: false,
              showIcon: true,
              style: styles.tabAccount,
              paddingHorizontal: 15,
            }}
          >
            <Tab.Screen
              name="PostPublic"
              component={PostPublicScreen}
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
                        color={
                          focused
                            ? lightTheme.SECOND_ICON_COLOR
                            : lightTheme.HIDE_ICON_COLOR
                        }
                      ></Ionicons>
                    </View>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="PostHearted"
              component={PostHeartedScreen}
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
                        name="heart-outline"
                        size={25}
                        color={
                          focused
                            ? lightTheme.SECOND_ICON_COLOR
                            : lightTheme.HIDE_ICON_COLOR
                        }
                      ></Ionicons>
                    </View>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="PostPrivate"
              component={PostPrivateScreen}
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
                        name="lock-closed-outline"
                        size={25}
                        color={
                          focused
                            ? lightTheme.SECOND_ICON_COLOR
                            : lightTheme.HIDE_ICON_COLOR
                        }
                      ></Ionicons>
                    </View>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="RecipePublic"
              component={RecipePublicScreen}
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
                        color={
                          focused
                            ? lightTheme.SECOND_ICON_COLOR
                            : lightTheme.HIDE_ICON_COLOR
                        }
                      ></Ionicons>
                    </View>
                  </View>
                ),
              }}
            />
          </Tab.Navigator>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

export default AccountScreen;

const styles_light = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 12,
    paddingBottom: 8,
  },
  nameUser: {
    fontSize: 22,
    color: lightTheme.SECOND_TEXT_COLOR,
    fontWeight: "bold",
  },
  mid: {
    marginTop: 5,
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
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
    borderRadius: 120,
    position: "absolute",
    marginTop: 195,
  },
  avatarImage: {
    width: 90,
    height: 90,
    borderRadius: 150,
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
    marginLeft: 40,
  },
  followView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 35,
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
    color: lightTheme.SECOND_TEXT_COLOR,
  },
  panel: {
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
  },
  titleSetting: {
    fontFamily: "Roboto",
    fontSize: 22,
    fontWeight: "bold",
    color: lightTheme.SECOND_TEXT_COLOR,
  },
  optionSetting: {
    fontFamily: "Roboto",
    fontSize: 16,
    marginLeft: 5,
    marginTop: 20,
    color: lightTheme.SECOND_TEXT_COLOR,
    fontWeight: "900",
  },
  frameOptionSetting: {
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bot: {
    marginBottom: 35,
  },
  tabAccount: {
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
    borderTopWidth: 1,
    borderColor: lightTheme.SECOND_ICON_COLOR,
  },
});

const styles_dark = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 12,
    paddingBottom: 8,
  },
  nameUser: {
    fontSize: 22,
    color: darkTheme.SECOND_TEXT_COLOR,
    fontWeight: "bold",
  },
  mid: {
    marginTop: 5,
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
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
    borderRadius: 120,
    position: "absolute",
    marginTop: 195,
  },
  avatarImage: {
    width: 110,
    height: 110,
    borderRadius: 150,
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
    marginLeft: 40,
  },
  followView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 35,
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
    color: darkTheme.SECOND_TEXT_COLOR,
  },
  panel: {
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
  },
  titleSetting: {
    fontFamily: "Roboto",
    fontSize: 22,
    fontWeight: "bold",
    color: darkTheme.SECOND_TEXT_COLOR,
  },
  optionSetting: {
    fontFamily: "Roboto",
    fontSize: 16,
    marginLeft: 5,
    marginTop: 20,
    color: darkTheme.SECOND_TEXT_COLOR,
    fontWeight: "900",
  },
  frameOptionSetting: {
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bot: {
    marginBottom: 35,
  },
  tabAccount: {
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
    borderTopWidth: 1,
    borderColor: darkTheme.SECOND_ICON_COLOR,
  },
});
