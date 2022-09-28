import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Share,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import color from "../../assets/color/color";
import { FontAwesome, Entypo, Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import AvatarUser from "../../components/user/AvatarUser";
import SwipeSlide from "../../components/view/SwipeSlide";
import RecipeShowed from "../../components/recipe/RecipeShowed";
import moment from "moment";
import PostComment from "../../components/post/PostComment";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCurrentPost,
  likePost,
  unLikePost,
} from "../../redux/reducers/postReducer";
import PostServices from "../../services/PostServices";
import InputComment from "../../components/input/InputComment";
import InfinityScrollView from "../../components/view/InfinityScrollView";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import { setToast } from "../../redux/reducers/uiReducer";
import uuid from "react-native-uuid";
import Navigators from "../../navigators/navigators/Navigators";
import { lightTheme, darkTheme } from "../../assets/color/Theme";

const PostDetailScreen = ({ navigation }) => {
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

  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const currentPost = useSelector((state) => state.post.currentPost);
  const { fetchAllComment, fetchAllReaction, createComment, likeDislikePost } =
    PostServices();
  const [payload, setPayload] = useState({
    post: currentPost.data._id,
    content: "",
  });

  const [loading, setLoading] = useState(false);

  const [isReplyPress, setIsReplyPress] = useState(false);
  const [nameUser, setNameUser] = useState("");

  const { navigateToSearch } = Navigators();

  const fetchComment = () => {
    if (
      currentPost.comments.count !== 0 &&
      currentPost.comments.rows.length >= currentPost.comments.count
    )
      return;
    fetchAllComment(currentPost.data._id, currentPost.comments.currentPage, 20);
  };

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
        post: currentPost.data._id,
        content: "",
      });
    });

  const handleAddReplyComment = () => {
    if (isReplyPress) {
      createComment(payload).then(() => {
        setPayload({
          post: currentPost.data._id,
          content: "",
        });
        setIsReplyPress(false);
      });
    }
  };

  const onChangeContent = (text) => {
    setPayload({
      ...payload,
      content: text,
    });
  };

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: background_COLOR,
      },
      headerTintColor: text_COLOR,
      headerTitle: () => (
        <Text style={styles.nameUserText}>
          {currentPost.data.author.username}
        </Text>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 12 }}
          onPress={navigateToSearch}
        >
          <FontAwesome
            name="search"
            size={22}
            style={{
              color: lightTheme.THIRD_TEXT_COLOR,
              marginRight: 10,
            }}
          ></FontAwesome>
        </TouchableOpacity>
      ),
    });

    if (currentPost.comments.rows.length === 0) fetchComment();

    return () => {
      dispatch(deleteCurrentPost());
    };
  }, []);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const isLikedUser = () => {
    return currentPost.data.reactions.includes(currentUser._id);
  };

  const animation = React.useRef(null);

  React.useEffect(() => {
    if (isLikedUser()) {
      animation.current.play(19, 50);
    } else {
      animation.current.play(0, 19);
    }
  }, [currentPost.data.reactions]);

  const heartEvent = async () => {
    if (isLikedUser()) {
      dispatch(unLikePost({ post: currentPost.data, user: currentUser }));
    } else {
      dispatch(likePost({ post: currentPost.data, user: currentUser }));
    }

    likeDislikePost(currentPost.data._id)
  };

  const deleteEvent = () => {
    Alert.alert("DELETE!", "Are you sure you want to delete this post?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      {
        text: "YES",
        onPress: () => {
          dispatch(
            setToast({
              type: "success",
              text1: "Delete Post",
              text2: "You have deleted this post successfully!",
            })
          );
          navigation.goBack();
        },
      },
    ]);
    return true;
  };

  const renderInner = () => (
    <View style={styles.panel}>
      <View
        onPress={() => bs.current.snapTo(1)}
        style={{ alignItems: "center" }}
      >
        <View
          style={{
            height: 4,
            width: 65,
            borderRadius: 100,
            backgroundColor: darkTheme.HIDE_ICON_COLOR,
            marginTop: 15,
          }}
        />
      </View>
      <TouchableOpacity onPress={deleteEvent}>
        <View style={styles.frameOptionSetting}>
          <Ionicons
            name="trash-outline"
            size={25}
            color={color.errorColor}
          ></Ionicons>
          <Text style={styles.optionSetting}>Delete</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle}></View>
      </View>
    </View>
  );

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={["8%", -300]}
        borderRadius={10}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View
        style={{
          margin: 0,
          opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
        }}
      >
        <InfinityScrollView useLoads={fetchComment}>
          <View style={styles.topPost}>
            <View style={styles.avatarAndNameView}>
              <AvatarUser sizeImage={40} profile={currentPost.data.author} />
              <View style={styles.nameAndTimeView}>
                <Text style={styles.nameUserText}>
                  {currentPost.data.author.username}

                  {currentPost.data.location.name !== "" && (
                    <Text
                      style={[
                        styles.nameUserText,
                        { fontWeight: "normal" },
                        { fontSize: 14 },
                      ]}
                    >
                      {" "}
                      is in
                    </Text>
                  )}
                  {currentPost.data.location && (
                    <Text style={[styles.nameUserText, { fontSize: 14 }]}>
                      {" "}
                      {currentPost.data.location.name}
                    </Text>
                  )}
                </Text>
                <Text style={styles.timePost}>
                  {moment(currentPost.data.created_at).fromNow()}
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
              <Entypo
                name="dots-three-vertical"
                size={22}
                style={{
                  color: color.textIconSmall,
                  marginTop: 10,
                }}
              ></Entypo>
            </TouchableOpacity>
          </View>
          <View style={styles.contentPost}>
            {
              // props.post.content ?
              //     <Text style={{
              //         marginLeft: 25,
              //         marginBottom: 10
              //     }}>
              //         {props.post.content}
              //     </Text> :
              //     null
              <Text
                style={{
                  marginLeft: 25,
                  marginBottom: 10,
                  color: text_COLOR,
                }}
              >
                {currentPost.data.content}
              </Text>
            }

            <View style={styles.imageFrame}>
              {currentPost.data.photos && currentPost.data.photos.length > 0 ? (
                <SwipeSlide photos={currentPost.data.photos} />
              ) : null}
            </View>
          </View>
          <View style={styles.midPost}>
            <View style={styles.heartCommentShareAndBookView}>
              <View style={styles.heartCommentShareView}>
                <TouchableOpacity onPress={heartEvent}>
                  <LottieView
                    ref={animation}
                    style={styles.heartIconLottie}
                    source={require("../../assets/lottie/44921-like-animation.json")}
                    autoPlay={false}
                    loop={false}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <FontAwesome
                    style={styles.commentIcon}
                    name="comments-o"
                    size={26}
                    color={color.textIconSmall}
                  ></FontAwesome>
                </TouchableOpacity>

                <TouchableOpacity onPress={onShare}>
                  <FontAwesome
                    style={styles.shareIcon}
                    name="share"
                    size={22}
                    color={color.textIconSmall}
                  ></FontAwesome>
                </TouchableOpacity>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{
                  paddingRight: 20,
                  borderColor: color.textIconSmall,
                  marginLeft: 10,
                }}
              >
                {/* <RecipeShowed food='https://i.pinimg.com/564x/3d/43/b5/3d43b5816213b46616e178174f2c2dbb.jpg' /> */}

                {currentPost.data.foods && currentPost.data.foods.length > 0
                  ? currentPost.data.foods.map((food) => (
                      <RecipeShowed food={food} key={uuid.v4()} />
                    ))
                  : null}
              </ScrollView>
            </View>
          </View>
          <View style={styles.botPost}>
            <TouchableOpacity>
              <Text style={styles.heartNumber}>
                {currentPost.data.reactions.length === 0
                  ? "Give your first reaction"
                  : isLikedUser()
                  ? `Liked by you and ${
                      currentPost.data.reactions.length - 1
                    } others people`
                  : `Liked by ${currentPost.data.length} others people`}
              </Text>
            </TouchableOpacity>

            {/* <TouchableOpacity>
                        <Text style={styles.commentNumber}>{currentPost.data.num_comment === 0 ? 'No comment' : `View all ${currentPost.data.num_comment} comments`}</Text>
                    </TouchableOpacity> */}
          </View>

          <View style={styles.commentListView}>
            {currentPost.comments.rows &&
              currentPost.comments.rows.map((comment) => {
                return (
                  <>
                    <PostComment
                      onReplyPress={handleReplyPress}
                      reply
                      comment={comment}
                      key={uuid.v4()}
                    />

                    {comment.children &&
                      comment.children.map((i) => {
                        return (
                          <PostComment
                            key={uuid.v4()}
                            comment={i}
                            leftMargin={60}
                            reply={false}
                          />
                        );
                      })}
                  </>
                );
              })}
            {/* <PostComment /> */}
          </View>
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
            />
          )}
        </View>
      </Animated.View>
    </View>
  );
};

export default PostDetailScreen;

const styles_light = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
    paddingTop: 12,
    alignItems: "center",
  },
  topPost: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  avatarAndNameView: {
    flexDirection: "row",
  },
  nameAndTimeView: {
    width: 220,
    marginLeft: 10,
  },
  nameUserText: {
    fontFamily: "Roboto",
    color: lightTheme.SECOND_TEXT_COLOR,
    fontWeight: "bold",
    fontSize: 16,
  },
  timePost: {
    fontFamily: "Roboto",
    color: lightTheme.THIRD_TEXT_COLOR,
    fontSize: 12,
  },
  followText: {
    fontFamily: "Roboto",
    color: lightTheme.FIRST_TEXT_COLOR,
    fontWeight: "bold",
    fontSize: 16,
  },
  contentPost: {
    marginTop: 10,
  },
  imageFrame: {
    width: "100%",
    //height: 250,
    backgroundColor: lightTheme.THIRD_TEXT_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  imagePost: {
    width: "100%",
    //height: 250,
  },
  heartCommentShareAndBookView: {
    flexDirection: "row",
    alignItems: "center",
  },
  heartIcon: {
    marginRight: 5,
  },
  heartIconLottie: {
    width: 60,
    height: 60,
  },
  heartNumber: {
    color: lightTheme.FIRST_TEXT_COLOR,
    fontWeight: "bold",
  },
  commentIcon: {
    marginRight: 20,
  },
  commentNumber: {},
  shareIcon: {
    marginRight: 5,
  },
  heartCommentShareView: {
    flexDirection: "row",
    alignItems: "center",
  },
  midPost: {
    marginVertical: 0,
  },
  botPost: {
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  commentListView: {
    paddingVertical: 10,
  },
  commentTypeView: {
    paddingTop: 5,
  },
  panel: {
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderTopWidth: 0.5,
  },
  optionSetting: {
    fontFamily: "Roboto",
    fontSize: 18,
    marginLeft: 5,
    color: lightTheme.ERROR_COLOR,
    fontWeight: "bold",
  },
  frameOptionSetting: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.5,
    paddingVertical: 12,
    flexDirection: "row",
  },
});

const styles_dark = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
    paddingTop: 12,
    alignItems: "center",
  },
  topPost: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  avatarAndNameView: {
    flexDirection: "row",
  },
  nameAndTimeView: {
    width: 220,
    marginLeft: 10,
  },
  nameUserText: {
    fontFamily: "Roboto",
    color: darkTheme.SECOND_TEXT_COLOR,
    fontWeight: "bold",
    fontSize: 16,
  },
  timePost: {
    fontFamily: "Roboto",
    color: darkTheme.THIRD_TEXT_COLOR,
    fontSize: 12,
  },
  followText: {
    fontFamily: "Roboto",
    color: darkTheme.FIRST_TEXT_COLOR,
    fontWeight: "bold",
    fontSize: 16,
  },
  contentPost: {
    marginTop: 10,
  },
  imageFrame: {
    width: "100%",
    //height: 250,
    backgroundColor: darkTheme.THIRD_TEXT_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  imagePost: {
    width: "100%",
    //height: 250,
  },
  heartCommentShareAndBookView: {
    flexDirection: "row",
    alignItems: "center",
  },
  heartIcon: {
    marginRight: 5,
  },
  heartIconLottie: {
    width: 60,
    height: 60,
  },
  heartNumber: {
    color: darkTheme.FIRST_TEXT_COLOR,
    fontWeight: "bold",
  },
  commentIcon: {
    marginRight: 20,
  },
  commentNumber: {},
  shareIcon: {
    marginRight: 5,
  },
  heartCommentShareView: {
    flexDirection: "row",
    alignItems: "center",
  },
  midPost: {
    marginVertical: 0,
  },
  botPost: {
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  commentListView: {
    paddingVertical: 10,
  },
  commentTypeView: {
    paddingTop: 5,
  },
  panel: {
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderTopWidth: 0.5,
  },
  optionSetting: {
    fontFamily: "Roboto",
    fontSize: 18,
    marginLeft: 5,
    color: darkTheme.ERROR_COLOR,
    fontWeight: "bold",
  },
  frameOptionSetting: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.5,
    paddingVertical: 12,
    flexDirection: "row",
  },
});
