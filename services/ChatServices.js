import axios from 'axios'
import { getStorage } from '../utils/Storage'


/**
 * @param {params} params user_id string
 */
 export const createChatRoom = async (params) => {
    //let token = await getStorage('@token')
    return axios.post(`/api/chat/create-chat/${params}`)
}


/**
 * @param {payload} payload { chat, content, type }
 */
 export const sendMessage = async (payload) => {
    //let token = await getStorage('@token')
    return axios.post(`/api/chat/send-message`, payload)
}

/**
 * @param {params} params user_id string
 */
 export const seenMessage = async (params) => {
    //let token = await getStorage('@token')
    return axios.post(`/api/chat/seen/${params}`)
}

export const fetchAllChat = async (currentPage) => {
    //let token = await getStorage('@token')
    return axios.get(`/api/chat/chats/?page${currentPage}`)
}

/**
 * @param {params} params chat_id string
 */
export const fetchAllMessage = async (params) => {
    //let token = await getStorage('@token')
    return axios.get(`/api/chat/messages/${params}`)
}