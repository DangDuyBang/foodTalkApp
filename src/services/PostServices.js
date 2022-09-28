import axios from "axios";
import { useDispatch } from "react-redux";
import {
  addComment,
  addPost,
  setComment,
  setPosts,
  setReactions,
  setSelectedUserPosts,
  setUserPosts,
} from "../redux/reducers/postReducer";
import { setToast } from "../redux/reducers/uiReducer";

export default function () {
  const dispatch = useDispatch();

  const createPost = (payload) =>
    axios
      .post("/posts", payload)
      .then((response) => {
        dispatch(
          setToast({
            type: "success",
            title: "Post created",
            message: `Post created successfully!`,
          })
        );
        dispatch(addPost(response.data));
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          dispatch(
            setToast({
              type: "error",
              title: "Error creating post",
              message: err.response.data,
            })
          );
        }
      });

  const createComment = (payload) =>
    axios
      .post("/post-comments", payload)
      .then((response) => dispatch(addComment(response.data)))
      .catch((err) => {
        if (err.response) {
          dispatch(
            setToast({
              type: "error",
              title: "Error creating comment",
              message: err.response.data,
            })
          );
        }
      });

  const likeDislikePost = (post_id) =>
    axios
      .post(`/posts/${post_id}/likeDislike`)
      .then((response) => console.log(response.data))
      .catch((err) => {
        if (err.response) {
          dispatch(
            setToast({
              type: "error",
              title: "Error reaction post",
              message: err.response.data,
            })
          );
        }
      });

  const fetchAllPost = (page, limit) =>
    axios
      .get(`/posts?page=${page}&limit=${limit}`)
      .then((response) => dispatch(setPosts(response.data)))
      .catch((err) => {
        if (err.response) console.log(err.response.data);
      });

  const fetchAllComment = (post_id, page, limit) =>
    axios
      .get(`/post-comments/${post_id}?page=${page}&limit=${limit}`)
      .then((response) => dispatch(setComment(response.data)))
      .catch((err) => {
        if (err.response) console.log(err.response);
      });

  const fetchAllReaction = (post_id, page, limit) =>
    axios
      .get(`/posts/${post_id}/reactions?page=${page}&limit=${limit}`)
      .then((response) => dispatch(setReactions(response.data)))
      .catch((err) => {
        if (err.response) console.log(err.response.data);
      });

  const fetchPersonalPosts = (page, limit) =>
    axios
      .get(`/posts/me?page=${page}&limit=${limit}`)
      .then((response) => dispatch(setUserPosts(response.data)))
      .catch((err) => {
        if (err.response) console.log(err.response.data);
      });

  const fetchUserPosts = (user_id, page, limit) =>
    axios
      .get(`/posts/${user_id}?page=${page}&limit=${limit}`)
      .then((response) => dispatch(setSelectedUserPosts(response.data)))
      .catch((err) => {
        if (err.response) console.log(err.response.data);
      });

  return {
    createPost,
    createComment,
    likeDislikePost,
    fetchAllPost,
    fetchAllComment,
    fetchAllReaction,
    fetchUserPosts,
    fetchPersonalPosts,
  };
}