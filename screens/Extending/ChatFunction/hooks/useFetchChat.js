import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllChat, fetchAllMessage } from '../../../../services/ChatServices'
import { setChat, setMessages } from '../../../../redux/chatReducer'

const useFetchChat = () => {

    const dispatch = useDispatch()
    const chatPaginations = useSelector(state => state.chat.chatPaginations)
    
    const fetchChat = async () => {
        if (chatPaginations.currentPage > chatPaginations.totalPage) {
            return
        }
        await fetchAllChat(chatPaginations.currentPage).then(response => {
            dispatch(setChat(response.data))
        }).catch(error => {
            if (error.response) {
                console.log(error.response.data.error);
            }
        })
    }

    const fetchMessages = async (chat_id) => {
        await fetchAllMessage(chat_id, 0).then(response => {
            dispatch(setMessages(response.data))
        }).catch(error => {
            if (error.response) {
                console.log(error.response.data.error);
            }
        });
    }

    return (
        { fetchChat, fetchMessages }
    )
}

export default useFetchChat