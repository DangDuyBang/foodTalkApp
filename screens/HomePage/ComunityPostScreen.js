import { StyleSheet, Text, View } from "react-native";
import React from "react";
import color from "../../contains/color";
import PostInAccount from "../../components/post/PostInAccount";
import { useSelector } from "react-redux";
import InfinityScrollView from "../../components/InfinityScrollView";
import useFetchPost from "./hooks/useFetchPost";
import LottieView from "lottie-react-native";
import uuid from "react-native-uuid";

const ComunityPostScreen = () => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    // paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 130,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
