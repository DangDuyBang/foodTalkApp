import { StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import uuid from "react-native-uuid";
import PostComment from "../../components/post/PostComment";
import InputComment from "../../components/input/InputComment";
import InfinityScrollView from "../../components/view/InfinityScrollView";
import { deleteCurrentPost } from "../../redux/reducers/postReducer";
import PostServices from "../../services/PostServices";
import { lightTheme, darkTheme } from "../../assets/color/Theme";

const PostCommentScreen = ({ route }) => {
  const theme = useSelector((state) => state.theme.theme);

  const styles = theme.mode === "light" ? styles_light : styles_dark;

  const { post_id } = route.params;
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.post.currentPost.comments);

  const { fetchAllComment, createComment } = PostServices();

  const fetchComment = () => {
    if (comments.count !== 0 && comments.rows.length >= comments.count) return;
    fetchAllComment(post_id, comments.currentPage, 20);
  };

  useEffect(() => {
    if (comments.rows.length === 0) fetchComment();

    return () => {
      dispatch(deleteCurrentPost());
    };
  }, []);

  const [isReplyPress, setIsReplyPress] = useState(false);
  const [nameUser, setNameUser] = useState("");
  const [payload, setPayload] = useState({
    post: post_id,
    content: "",
  });

  const [loading, setLoading] = useState(false);

  const handleReplyPress = (nameUserComment, comment_id) => {
    if (isReplyPress === false) {
      setIsReplyPress(true);
      setNameUser(nameUserComment);
      setPayload({
        ...payload,
        parent: comment_id,
      });
    }
  };

  const handleCloseReplying = () => {
    if (isReplyPress === true) {
      const data = { ...payload };
      delete data["parent"];
      setPayload({
        ...data,
      });
      setIsReplyPress(false);
    }
  };

  const handleAddComment = () =>
    createComment(payload).then(() => {
      setPayload({
        post: post_id,
        content: "",
      });
    });

  const handleAddReplyComment = () => {
    if (isReplyPress) {
      createComment(payload).then(() => {
        setPayload({
          post: post_id,
          content: "",
        });
        setIsReplyPress(false);
        setLoading(false);
      });
    }
  };

  const onChangeContent = (text) => {
    setPayload({
      ...payload,
      content: text,
    });
  };

  return (
    <View style={styles.container}>
      <InfinityScrollView useLoads={fetchComment}>
        {comments.rows.map((item) => {
          return (
            <>
              <PostComment
                key={uuid.v4()}
                comment={item}
                onReplyPress={handleReplyPress}
                reply
              />

              {item.children &&
                item.children.map((i) => {
                  return (
                    <PostComment
                      key={uuid.v4()}
                      comment={i}
                      onReplyPress={handleReplyPress}
                      leftMargin={60}
                      display="none"
                    />
                  );
                })}
            </>
          );
        })}
      </InfinityScrollView>
      <View style={styles.commentTypeView}>
        {isReplyPress ? (
          <InputComment
            nameUserReply={nameUser}
            onCloseReply={handleCloseReplying}
            onAddComment={handleAddReplyComment}
            onChangeText={onChangeContent}
            content={payload.content}
            loading={loading}
            isReply={isReplyPress}
            autoFocus={true}
          />
        ) : (
          <InputComment
            nameUserReply="none"
            displayReply="none"
            onAddComment={handleAddComment}
            onChangeText={onChangeContent}
            content={payload.content}
            isReply={isReplyPress}
            loading={loading}
            autoFocus={true}
          />
        )}
      </View>
    </View>
  );
};

export default PostCommentScreen;

const styles_light = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
    justifyContent: "space-between",
    paddingTop: 5,
  },
  commentTypeView: {
    paddingTop: 5,
  },
});

const styles_dark = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
    justifyContent: "space-between",
    paddingTop: 5,
  },
  commentTypeView: {
    paddingTop: 5,
  },
});
