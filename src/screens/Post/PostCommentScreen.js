import { StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";
import PostComment from "../../components/post/PostComment";
import color from "../../assets/color/color";
import InputComment from "../../components/input/InputComment";
import InfinityScrollView from "../../components/view/InfinityScrollView";
import useFetchPost from "../hooks/fetch/useFetchPost";
import { useSelector, useDispatch } from "react-redux";
import { deleteCurrentPost } from "../../redux/postReducer";
import { createComment } from "../../services/PostServices";
import uuid from "react-native-uuid";
import { lightTheme, darkTheme } from "../../assets/color/Theme"

const PostCommentScreen = ({ route }) => {
  const theme = useSelector((state) => state.theme.theme);

  let styles;
  {
    theme.mode === "light" ?
      styles = styles_light
      : styles = styles_dark;
  }

  const { post_id } = route.params;
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.post.currentPost.comments);

  const { useFetchComment } = useFetchPost();

  const fetchComment = () => {
    useFetchComment(post_id);
  };

  useEffect(() => {
    fetchComment()

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

  const handleAddComment = async () => {
    setLoading(true);
    await createComment(payload)
      .then(() => {
        setPayload({
          post: post_id,
          content: "",
        });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response) {
          console.log(err.response.data.error);
          // setError(...err, err.response.data.error)
        }
      });
  };

  const handleAddReplyComment = async () => {
    if (isReplyPress) {
      setLoading(true);
      await createComment(payload)
        .then(() => {
          setPayload({
            post: post_id,
            content: "",
          });
          setIsReplyPress(false);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);

          if (err.response) {
            console.log(err.response.data.error);
            // setError(...err, err.response.data.error)
          }
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
        {comments &&
          comments.map((item) => {
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
    paddingTop: 5
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
    paddingTop: 5
  },
  commentTypeView: {
    paddingTop: 5,
  },
});
