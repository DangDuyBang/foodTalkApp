import {createContext, useReducer} from 'react'
import { UIReducer, initialUIState} from '../context/UIContext'


export const UIContext = createContext()

export const UIProvider = ({children}) => {
    const [uiState, uiDispatch] = useReducer(UIReducer, initialUIState);

    return (
        <UIContext.Provider value = {{uiState, uiDispatch}}> 

            {children}
        
        </UIContext.Provider>
    )
}