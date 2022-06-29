import axios from "axios";
import { getStorage } from "../utils/Storage";

/**
 * @param {payload} payload { foods, content, photos, location: {name, lat, lng}, is_public }
 */
export const createPost = async (payload) => {
  return axios.post(`/api/post/create-post`, payload);
};

/**
 * @param {payload} payload { post, content, parent }
 */
export const createComment = async (payload) => {
  return axios.post(`/api/post/create-comment`, payload);
};

/**
 * @param {params} params post_id string
 */
export const likeDislikePost = async (params) => {
  return axios.post(`/api/post/like-dislike/${params}`);
};

export const fetchAllPost = async (currentPage) => {
  return axios.get(`/api/post/posts/?page=${currentPage}`);
};

export const fetchTrendingPost = async () => {
  return axios.get(`/api/post/trending`);
};

/**
 * @param {params} params post_id string
 */
export const fetchPostById = async (params) => {
  return axios.get(`/api/post/posts/${params}`);
};

/**
 * @param {post_id} post_id post_id string
 */
export const fetchAllComment = async (post_id, currentPage) => {
  return axios.get(`/api/post/comments/${post_id}/?page=${currentPage}`);
};

/**
 * @param {params} params post_id string
 */
export const fetchAllReaction = async (params) => {
  return axios.get(`/api/post/reactions/${params}`);
};

export const fetchUserPost = async (user_id, currentPage) => {
  return axios.get(`/api/post/user-posts/${user_id}/?page=${currentPage}`);
};
