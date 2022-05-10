import axios from 'axios'
import { getStorage } from '../utils/Storage'

export const fetchCurrentUser = async () => {
    //let token = await getStorage('@token')
    return axios.get(`/api/user/me`)
}


/**
 * @param {params} params userID string
 */
export const fetchUserById = async (params) => {
    //let token = await getStorage('@token')
    return axios.get(`/api/user/fetchUserById/${params}`)
}

/**
 * @param {params} params user search key string
 */
 export const searchUser = async (params) => {
    //let token = await getStorage('@token')
    return axios.get(`/api/user/searchUsers/${params}`)
}


/**
 * @param {params} params user_id string
 */
 export const followUser = async (params) => {
    //let token = await getStorage('@token')
    return axios.post(`/api/user/follow/${params}`)
}

/**
 * @param {params} params user_id string
 */
 export const unfollowUser = async (params) => {
    //let token = await getStorage('@token')
    return axios.post(`/api/user/unfollow/${params}`)
}