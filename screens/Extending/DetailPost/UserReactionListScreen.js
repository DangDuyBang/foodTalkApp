import { StyleSheet, View } from "react-native";
import React from "react";
import color from "../../../contains/color";
import UserReaction from "../../../components/user/UserReaction";
import useFetchPost from "../../HomePage/hooks/useFetchPost";
import InfinityScrollView from "../../../components/InfinityScrollView";
import { useDispatch, useSelector } from "react-redux";
import { deleteCurrentReaction } from "../../../redux/postReducer";

const UserReactionListScreen = ({ route }) => {
  const { post_id } = route.params;
  const { useFetchReaction } = useFetchPost();
  const dispatch = useDispatch();
  const reactions = useSelector((state) => state.post.currentPost.reactions);

  const fetchReacts = () => {
    useFetchReaction(post_id);
  };

  React.useEffect(() => {
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

export default UserReactionListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
});
