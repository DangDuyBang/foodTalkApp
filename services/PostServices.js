import axios from 'axios'
import { getStorage } from '../utils/Storage'


/**
 * @param {payload} payload { foods, content, photos, location: {name, lat, lng}, is_public }
 */
export const createPost = async (payload) => {
    //let token = await getStorage('@token')
    return axios.post(`/api/post/create-post`, payload)
}

/**
 * @param {payload} payload { post, content, parent }
 */
export const createComment = async (payload) => {
    //let token = await getStorage('@token')
    return axios.post(`/api/post/create-comment`, payload)
}

/**
 * @param {params} params post_id string
 */
export const likeDislikePost = async (params) => {
    //let token = await getStorage('@token')
    return axios.post(`/api/post/like-dislike/${params}`)
}

export const fetchAllPost = async () => {
    //let token = await getStorage('@token')
    return axios.get(`/api/post/posts`)
}

export const fetchTrendingPost = async () => {
    //let token = await getStorage('@token')
    return axios.get(`/api/post/trending`)
}


/**
 * @param {params} params post_id string
 */
export const fetchPostById = async (params) => {
    //let token = await getStorage('@token')
    return axios.get(`/api/post/posts/${params}`)
}

/**
 * @param {params} params post_id string
 */
export const fetchAllComment = async (params) => {
    //let token = await getStorage('@token')
    return axios.get(`/api/post/comments/${params}`)
}


/**
 * @param {params} params post_id string
 */
export const fetchAllReaction = async (params) => {
    //let token = await getStorage('@token')
    return axios.get(`/api/post/reactions/${params}`)
}


export const fetchUserPost = async () => {
    //let token = await getStorage('@token')
    return axios.get(`/api/post/user-post`)
}