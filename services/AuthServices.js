import axios from 'axios'
import { getStorage } from '../utils/Storage'

export const loginUser = (userData) => {
    return axios.post('/api/auth/login', userData)
}

export const logoutUser = async () => {
    let token = await getStorage('@token')
    return axios.post('/api/auth/logout', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}


/**
 * @param {userData} userData { first_name, last_name, email, password, username, avatar_url }
 */
export const signUpUser = async (userData) => {
    return axios.post('/api/auth/signup', userData)
}


/**
 * @param {payload} payload { currentPassword, newPassword }
 */
export const changePassword = async (payload) => {
    let token = await getStorage('@token')
    return axios.post('/api/auth/change-password',payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export const resetPassword = async () => {
    let token = await getStorage('@token')
    return axios.post('/api/auth/reset-password', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}