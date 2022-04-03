import axios from 'axios'
import { getStorage } from '../utils/Storage'


/**
 * @param {params} params user_id string
 */
 export const createChatRoom = async (params) => {
    let token = await getStorage('@token')
    return axios.post(`/api/chat/create-chat/${params}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}


/**
 * @param {payload} payload { chat, content, type }
 */
 export const sendMessage = async (payload) => {
    let token = await getStorage('@token')
    return axios.post(`/api/chat/send-message`, payload , {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

/**
 * @param {params} params user_id string
 */
 export const seenMessage = async (params) => {
    let token = await getStorage('@token')
    return axios.post(`/api/chat/seen/${params}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export const fetchAllChat = async () => {
    let token = await getStorage('@token')
    return axios.get(`/api/chat/chats`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

/**
 * @param {params} params chat_id string
 */
export const fetchAllMessage = async (params) => {
    let token = await getStorage('@token')
    return axios.get(`/api/chat/messages/${params}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}