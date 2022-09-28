import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllChat, fetchAllMessage } from '../../../services/ChatServices'
import { setChat, setChatPaginations, setMessages, setMessagesPagination } from '../../../redux/reducers/chatReducer'

const useFetchChat = () => {

    const dispatch = useDispatch()
    const chatCount = useSelector(state => state.chat.chats)
    const messagesPagination = useSelector(state => state.chat.messagesPagination)
    
    const fetchChat = async () => {
        if(chatCount.count > )
    }

    const fetchMoreChat = async () => {
        if (chatPaginations.currentPage > chatPaginations.totalPage) {
            return
        }
        await fetchAllChat(chatPaginations.currentPage).then(response => {
            dispatch(setChatPaginations(response.data))
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

    const fetchMoreMessages = async (chat_id) => {
        if (messagesPagination.currentPage > messagesPagination.totalPage) {
            return
        }
        await fetchAllMessage(chat_id, messagesPagination.currentPage).then(response => {
            dispatch(setMessagesPagination(response.data))
        }).catch(error => {
            if (error.response) {
                console.log(error.response.data.error);
            }
        });
    }

    return (
        { fetchChat, fetchMessages, fetchMoreMessages, fetchMoreChat }
    )
}

export default useFetchChat