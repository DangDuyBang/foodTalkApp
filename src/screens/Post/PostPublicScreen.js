import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import uuid from "react-native-uuid";
import color from "../../assets/color/color";
import PostInAccount from "../../components/post/PostInAccount";
import InfinityScrollView from "../../components/view/InfinityScrollView";
import { lightTheme, darkTheme } from "../../assets/color/Theme"
import PostServices from "../../services/PostServices";

const ComunityPostScreen = () => {
  const theme = useSelector((state) => state.theme.theme);
  const userPosts = useSelector(state => state.post.userPosts)
  const {fetchPersonalPosts} = PostServices()
  
  const fetchUPost = () => {
    if (posts.rows.length >= posts.count) return;
    fetchPersonalPosts(posts.currentPage, 20);
  };

  if (userPosts.rows.length === 0) {
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

  const styles = theme.mode === "light" ? styles_light : styles_dark;

  return (
    <InfinityScrollView useLoads={fetchUPost}>
      <View style={styles.container}>
        {userPosts.rows && userPosts.rows.length > 0 ? (
          userPosts.rows.map((post) => (
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
