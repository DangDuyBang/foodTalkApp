import { StyleSheet, View } from "react-native";
import React from "react";
import color from "../../assets/color/color";
import UserReaction from "../../components/user/UserReaction";
 import useFetchPost from "../hooks/fetch/useFetchPost";
import InfinityScrollView from "../../components/view/InfinityScrollView";
import { useDispatch, useSelector } from "react-redux";
import { deleteCurrentReaction } from "../../redux/postReducer";

const PostReacterScreen = ({ route }) => {
  const { post_id } = route.params;
  const { useFetchReaction } = useFetchPost();
  const dispatch = useDispatch();
  const reactions = useSelector((state) => state.post.currentPost.reactions);

  const fetchReacts = () => {
    useFetchReaction(post_id);
  };

  React.useEffect(async () => {
    fetchReacts();
    return () => {
      dispatch(deleteCurrentReaction());
    };
  }, []);

  return (
    <View style={styles.container}>
      <InfinityScrollView useLoads={fetchReacts}>
        {reactions &&
          reactions.map((reaction) => <UserReaction reaction={reaction} />)}
      </InfinityScrollView>
    </View>
  );
};

export default PostReacterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
});
