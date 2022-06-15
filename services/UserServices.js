import axios from 'axios'

export const fetchCurrentUser = async () => {
    return axios.get(`/api/user/me`)
}

/**
 * @param {params} params userID string
 */
export const fetchUserById = async (params) => {
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

export const seenNoti = async(params) => {
    return axios.post(`/api/user/seen-noti/${params}`)
}