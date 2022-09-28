import { StyleSheet, Text, View } from "react-native";
import React, {useEffect} from "react";
import PostInAccount from "../../components/post/PostInAccount";
import InfinityScrollView from "../../components/view/InfinityScrollView";
import { useSelector } from "react-redux";
import PostServices from "../../services/PostServices"
import LottieView from "lottie-react-native";
import uuid from "react-native-uuid";
import { darkTheme, lightTheme } from "../../assets/color/Theme";

const PostFriendScreen = () => {
  const theme = useSelector((state) => state.theme.theme);

  const styles = theme.mode === "light" ? styles_light : styles_dark;

  const background_COLOR =
    theme.mode === "light"
      ? lightTheme.FIRST_BACKGROUND_COLOR
      : darkTheme.FIRST_BACKGROUND_COLOR;
      
  const text_COLOR =
    theme.mode === "light"
      ? lightTheme.SECOND_TEXT_COLOR
      : darkTheme.SECOND_TEXT_COLOR;

  const posts = useSelector((state) => state.post.selectedUserPost);
  const selectedUser = useSelector(state=> state.user.selectedUser)
  const { fetchUserPosts } = PostServices();

  useEffect(() => {
    fetchUserPosts(selectedUser._id, posts.currentPage, 20)
  }, [])
  

  if (posts.rows.length === 0) {
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
            color: text_COLOR,
          }}
        >
          There's no thing at all {"\n"}
          User's posts will be display at here.
        </Text>
      </View>
    );
  }

  return (
    <InfinityScrollView onLoads={posts.rows.length > posts.count? null: ()=> fetchUserPosts(selectedUser._id, posts.currentPage, 20)}>
      <View style={styles.container}>
        {posts && posts.rows.length > 0 ? (
          posts.rows.map((post) => <PostInAccount post={post} key={uuid.v4()} />)
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
