import { StyleSheet, Text, View } from "react-native";
import React from "react";
import color from "../../assets/color/color";
import PostInAccount from "../../components/post/PostInAccount";
import { useSelector } from "react-redux";
import InfinityScrollView from "../../components/view/InfinityScrollView";
import useFetchPost from "../hooks/fetch/useFetchPost";
import LottieView from "lottie-react-native";
import uuid from "react-native-uuid";
import { lightTheme, darkTheme } from "../../assets/color/Theme"

const ComunityPostScreen = () => {
  const theme = useSelector((state) => state.theme.theme);
  const currentUser = useSelector((state) => state.user.currentUser);
  const { fetchUserPosts } = useFetchPost();

  if (currentUser.posts.length === 0) {
    return (
      <View
        style={{
          alignItems: "center",
          width: "100%",
          backgroundColor: color.background,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            marginTop: 50,
            textAlign: "center",
          }}
        >
          There's no thing at all {"\n"}
          User's posts will be display at here.
        </Text>
      </View>
    );
  }

  let styles;
  {
    theme.mode === "light" ?
      styles = styles_light
      : styles = styles_dark;
  }

  return (
    <InfinityScrollView useLoads={fetchUserPosts}>
      <View style={styles.container}>
        {currentUser.posts && currentUser.posts.length > 0 ? (
          currentUser.posts.map((post) => (
            <PostInAccount key={uuid.v4()} post={post} />
          ))
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

export default ComunityPostScreen;

const styles_light = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
    // paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 130,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

const styles_dark = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
    // paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 130,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
