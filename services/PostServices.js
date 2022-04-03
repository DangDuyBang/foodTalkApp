import axios from 'axios'
import { getStorage } from '../utils/Storage'


/**
 * @param {payload} payload { foods, content, photos, location, is_public }
 */
 export const createPost = async (payload) => {
    let token = await getStorage('@token')
    return axios.post(`/api/post/create-post`,payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

/**
 * @param {payload} payload { post, content, parent }
 */
 export const createComment = async (payload) => {
    let token = await getStorage('@token')
    return axios.post(`/api/post/create-comment`,payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

/**
 * @param {params} params post_id string
 */
 export const likeDislikePost = async (params) => {
    let token = await getStorage('@token')
    return axios.post(`/api/post/like-dislike/${params}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export const fetchAllPost = async () => {
    let token = await getStorage('@token')
    return axios.get(`/api/post/posts`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export const fetchTrendingPost = async () => {
    let token = await getStorage('@token')
    return axios.get(`/api/post/trending`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}


/**
 * @param {params} params post_id string
 */
export const fetchPostById = async (params) => {
    let token = await getStorage('@token')
    return axios.get(`/api/post/posts/${params}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

/**
 * @param {params} params post_id string
 */
export const fetchAllComment = async (params) => {
    let token = await getStorage('@token')
    return axios.get(`/api/post/comments/${params}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}


/**
 * @param {params} params post_id string
 */
 export const fetchAllReaction = async (params) => {
    let token = await getStorage('@token')
    return axios.get(`/api/post/reactions/${params}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}


 export const fetchUserPost = async () => {
    let token = await getStorage('@token')
    return axios.get(`/api/post/user-post`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}