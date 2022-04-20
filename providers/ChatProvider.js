import {createContext, useReducer} from 'react'
import { ChatReducer, initialChatState} from '../context/ChatContext'


export const ChatContext = createContext()

export const ChatProvider = ({children}) => {
    const [chatState, chatDispatch] = useReducer(ChatReducer, initialChatState);

    return (
        <ChatContext.Provider value = {{chatState, chatDispatch}}> 

            {children}
        
        </ChatContext.Provider>
    )
}