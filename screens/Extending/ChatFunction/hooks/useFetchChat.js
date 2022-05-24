import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllChat } from '../../../../services/ChatServices'
import { setChat } from '../../../../redux/chatReducer'

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

    return (
        { fetchChat }
    )
}

export default useFetchChat