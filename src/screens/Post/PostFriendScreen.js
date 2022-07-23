import { StyleSheet, Text, View } from "react-native";
import React from "react";
import color from "../../assets/color/color";
import PostInAccount from "../../components/post/PostInAccount";
import InfinityScrollView from "../../components/view/InfinityScrollView";
import { useSelector } from "react-redux";
import useFetchPost from "../hooks/fetch/useFetchPost";
import LottieView from "lottie-react-native";
import uuid from "react-native-uuid";
import { darkTheme, lightTheme } from "../../assets/color/Theme";

const ImagePic = {
  imagePost_first:
    "https://i.pinimg.com/564x/3f/32/94/3f32941eb6f31b5b7b972da29aefa329.jpg",

  imagePost_fith:
    "https://i.pinimg.com/564x/fd/c9/c4/fdc9c4dc5ac319f37d2072054acec0b2.jpg",

  imagePost_sixth:
    "https://i.pinimg.com/564x/3b/38/bc/3b38bc462ced2aab576dc3965515fda7.jpg",

  imagePost_seventh:
    "https://i.pinimg.com/736x/99/4e/de/994ede70d8621abfd4d7ec7e4d12dced.jpg",
};

const PostFriendScreen = () => {
  const theme = useSelector((state) => state.theme.theme);

  let styles;
  {
    theme.mode === "light" ?
      styles = styles_light
      : styles = styles_dark;
  }

  let background_COLOR, text_COLOR;
  {
    theme.mode === "light" ?
      background_COLOR = lightTheme.FIRST_BACKGROUND_COLOR
      : background_COLOR = darkTheme.FIRST_BACKGROUND_COLOR;
  }
  {
    theme.mode === "light" ?
      text_COLOR = lightTheme.SECOND_TEXT_COLOR
      : text_COLOR = darkTheme.SECOND_TEXT_COLOR;
  }

  const posts = useSelector((state) => state.user.selectedUserProfile.posts);
  const { fetchSelectedUserPosts } = useFetchPost();

  if (posts.length === 0) {
    return (
      <View
        style={{
          alignItems: "center",
          width: "100%",
          backgroundColor: background_COLOR,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            marginTop: 50,
            textAlign: "center",
            color: text_COLOR
          }}
        >
          There's no thing at all {"\n"}
          User's posts will be display at here.
        </Text>
      </View>
    );
  }

  return (
    <InfinityScrollView onLoads={fetchSelectedUserPosts}>
      <View style={styles.container}>
        {posts && posts.length > 0 ? (
          posts.map((post) => <PostInAccount post={post} key={uuid.v4()} />)
        ) : (
          <View
            style={{
              alignItems: "center",
              width: "100%",
            }}
          >
            <LottieView
              source={require("../../assets/lottie/data-loading-animation.json")}
              autoPlay
              loop
              style={{
                width: 100,
                height: 100,
              }}
            />
          </View>
        )}
      </View>
    </InfinityScrollView>
  );
};

export default PostFriendScreen;

const styles_light = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
    //paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 25,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

const styles_dark = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
    //paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 25,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
