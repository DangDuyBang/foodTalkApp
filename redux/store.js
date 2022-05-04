import { configureStore } from '@reduxjs/toolkit'
import foodReducer from './foodReducer'
import postReducer from './postReducer'
import uiReducer from './uiReducer'
import userReducer from './userReducer'

export const store = configureStore({
  reducer: {
      user: userReducer,
      post: postReducer,
      ui: uiReducer,
      food: foodReducer
  },
})