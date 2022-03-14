import {createContext, useReducer} from 'react'
import { UserReducer, initialUserState} from '../context/UserContext'


export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [userState, userDispatch] = useReducer(UserReducer, initialUserState);

    return (
        <UserContext.Provider value = {{userState, userDispatch}}> 

            {children}
        
        </UserContext.Provider>
    )
}