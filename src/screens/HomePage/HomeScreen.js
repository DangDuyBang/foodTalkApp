import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { ScrollView } from "@stream-io/flat-list-mvcp";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import uuid from "react-native-uuid";
import color from "../../assets/color/color";
import Post from "../../components/post/Post";
import Shortcut from "../../components/button/BtnFunction";
import InfinityScrollView from "../../components/view/InfinityScrollView";
import Navigators from "../../navigators/navigators/Navigators";
import { lightTheme, darkTheme } from "../../assets/color/Theme";
import PostServices from "../../services/PostServices";

const HomeScreen = () => {
  const theme = useSelector((state) => state.theme.theme);
  const posts = useSelector((state) => state.post.posts);
  const currentUser = useSelector((state) => state.user.currentUser);

  const {
    navigateToPostComment,
    navigateToCreatePost,
    navigateToRecipeCreate,
    navigateToAccount,
    navigateToPostReacter,
  } = Navigators();

  const { fetchAllPost } = PostServices();

  const useLoads = () => {
    if (posts.count !== 0 && posts.rows.length >= posts.count) return;
    fetchAllPost(posts.currentPage, 20);
  };

  React.useEffect(() => {
    if (posts.rows.length === 0) useLoads();
  }, []);

  const styles = theme.mode === "light" ? styles_light : styles_dark;

  return (
    <SafeAreaView style={styles.container}>
      <InfinityScrollView
        showsVerticalScrollIndicator={false}
        useLoads={useLoads}
      >
        <View style={styles.createPostFrame}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
            }}
          >
            <TouchableOpacity onPress={navigateToAccount}>
              <Image
                style={{ height: 40, width: 40, borderRadius: 100 }}
                resizeMode="cover"
                source={{
                  // uri: currentUser.avatar_url,
                  uri: currentUser.avatar_url,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToCreatePost}>
              <View style={styles.createPostView}>
                <Text
                  style={{
                    fontFamily: "Roboto",
                    fontSize: 15,
                    marginLeft: 7,
                    color: color.textGray,
                  }}
                >
                  {" "}
                  Share your story with everyone.
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToCreatePost}>
              <MaterialIcons
                name="photo-library"
                size={28}
                color={color.iconGreen}
              ></MaterialIcons>
            </TouchableOpacity>
          </View>

          <View style={styles.shortcutView}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Shortcut
                nameShortcut="Add Recipe"
                iconShortcut="silverware-clean"
                iconColor={color.primary}
                onFunction={navigateToRecipeCreate}
              />
              <Shortcut
                nameShortcut="Recent Restaurant"
                iconShortcut="map-marker-radius"
                iconColor={color.errorColor}
              />
              <Shortcut
                nameShortcut="Review Video"
                iconShortcut="video-check"
                iconColor={color.textBlue}
              />
              <Shortcut
                nameShortcut="Live Stream"
                iconShortcut="video-wireless"
                iconColor={color.errorColor}
              />
            </ScrollView>
          </View>
        </View>

        <View style={styles.body}>
          {posts && posts.rows.length > 0 ? (
            posts.rows.map((post) => (
              <Post
                post={post}
                key={uuid.v4()}
                onCommentList={navigateToPostComment}
                onReacterList={navigateToPostReacter}
              ></Post>
            ))
          ) : (
            <View
              style={{
                alignItems: "center",
              }}
            >
              <LottieView
                source={require("../../assets/lottie/spoon-loading-utensils.json")}
                autoPlay
                loop
                style={{
                  width: 230,
                  height: 230,
                }}
              />
            </View>
          )}
        </View>
      </InfinityScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles_light = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.SECOND_BACKGROUND_COLOR,
    // paddingBottom: 80,
  },
  top: {
    borderBottomWidth: 0.5,
    flexDirection: "row",
    paddingTop: 30,
    paddingVertical: 5,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
  },
  iconRightTop: {
    flexDirection: "row",
    marginRight: 16,
  },
  searchUserFrame: {
    // backgroundColor: color.post,
    // width: 50,
    // height: 50,
    // borderRadius: 50,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  chatFrame: {
    // backgroundColor: color.post,
    // width: 50,
    // height: 50,
    // borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    backgroundColor: lightTheme.SECOND_BACKGROUND_COLOR,
    paddingBottom: 80,
  },
  createPostFrame: {
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
    marginBottom: 3,
    //marginTop: 5,
    paddingTop: 15,
  },
  createPostView: {
    backgroundColor: lightTheme.INPUT_COLOR,
    paddingVertical: 12,
    paddingRight: 16,
    paddingLeft: 8,
    borderRadius: 100,
    justifyContent: "center",
  },
  shortcutView: {
    borderColor: color.textIconSmall,
    flexDirection: "row",
    paddingLeft: 20,
    paddingTop: 10,
    marginTop: 10,
    backgroundColor: "#F6F2F2",
  },
});

const styles_dark = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.SECOND_BACKGROUND_COLOR,
    // paddingBottom: 80,
  },
  top: {
    borderBottomWidth: 0.5,
    flexDirection: "row",
    paddingTop: 30,
    paddingVertical: 5,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
  },
  iconRightTop: {
    flexDirection: "row",
    marginRight: 16,
  },
  searchUserFrame: {
    // backgroundColor: color.post,
    // width: 50,
    // height: 50,
    // borderRadius: 50,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  chatFrame: {
    // backgroundColor: color.post,
    // width: 50,
    // height: 50,
    // borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    backgroundColor: darkTheme.SECOND_BACKGROUND_COLOR,
    paddingBottom: 80,
  },
  createPostFrame: {
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
    marginBottom: 3,
    //marginTop: 5,
    paddingTop: 15,
  },
  createPostView: {
    backgroundColor: darkTheme.INPUT_COLOR,
    paddingVertical: 12,
    paddingRight: 16,
    paddingLeft: 8,
    borderRadius: 100,
    justifyContent: "center",
  },
  shortcutView: {
    borderColor: color.textIconSmall,
    flexDirection: "row",
    paddingLeft: 20,
    paddingTop: 10,
    marginTop: 10,
    backgroundColor: "#313131",
  },
});
