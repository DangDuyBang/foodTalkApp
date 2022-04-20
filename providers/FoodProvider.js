import {createContext, useReducer} from 'react'
import { foodReducer, initialFoodState} from '../context/FoodContext'


export const FoodContext = createContext()

export const FoodProvider = ({children}) => {
    const [foodState, foodDispatch] = useReducer(foodReducer, initialFoodState);

    return (
        <FoodContext.Provider value = {{foodState, foodDispatch}}> 

            {children}
        
        </FoodContext.Provider>
    )
}