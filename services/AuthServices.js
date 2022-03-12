import axios from 'axios'
import { getStorage } from '../utils/Storage'

export const loginUser = (userData) => {
    return axios.post('/api/auth/login', userData)
}

export const fetchCurrentUser = async () => {
    let token = await getStorage('@token')
    return axios.get(`/api/user/me`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export const logoutUser = async () => {
    return axios.post('/api/auth/logout')
}