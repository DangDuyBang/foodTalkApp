import {createContext, useReducer} from 'react'
import { PostReducer, initialPostState} from '../context/PostContext'


export const PostContext = createContext()

export const PostProvider = ({children}) => {
    const [postState, postDispatch] = useReducer(PostReducer, initialPostState);

    return (
        <PostContext.Provider value = {{postState, postDispatch}}> 

            {children}
        
        </PostContext.Provider>
    )
}