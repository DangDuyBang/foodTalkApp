import React from 'react'
import { useDispatch } from 'react-redux';
import { addMessage } from '../../../../redux/chatReducer';
import { sendMessage } from '../../../../services/ChatServices';

const useChatAction = () => {
    const dispatch = useDispatch()
    const createMessage = async (message) => {
        await sendMessage(message).then(response => {
            //dispatch(addMessage(response.data.content))
        })
            .catch(error => {
                if (error.response) {
                    console.log(error.response.data.error);
                }
            })
    }
    return (
        { createMessage }
    )
}

export default useChatAction