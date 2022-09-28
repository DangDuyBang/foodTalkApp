import React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import UserReaction from "../../components/user/UserReaction";
import InfinityScrollView from "../../components/view/InfinityScrollView";
import { deleteCurrentPost } from "../../redux/reducers/postReducer";
import { lightTheme, darkTheme } from "../../assets/color/Theme"
import PostServices from "../../services/PostServices";

const PostReacterScreen = ({ route }) => {
  const theme = useSelector((state) => state.theme.theme);

  const styles = theme.mode === "light" ? styles_light : styles_dark;

  const { post_id } = route.params;
  const { fetchAllReaction } = PostServices();
  const dispatch = useDispatch();
  const reactions = useSelector((state) => state.post.currentPost.reactions);

  const fetchReacts = () => {
    if(reactions.count !== 0 && reactions.rows.length > reactions.count) return
    fetchAllReaction(post_id, reactions.currentPage, 20);
  };

  React.useEffect(async () => {
    fetchReacts();
    return () => {
      dispatch(deleteCurrentPost());
    };
  }, []);

  return (
    <View style={styles.container}>
      <InfinityScrollView useLoads={fetchReacts}>
        {reactions &&
          reactions.rows.map((reaction) => <UserReaction reaction={reaction} />)}
      </InfinityScrollView>
    </View>
  );
};

export default PostReacterScreen;

const styles_light = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
  },
});

const styles_dark = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
  },
});
