import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    socketio: null,
    isLoggedIn: false,
    selectedUserProfile: null,
    users: [],

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
            state.isLoggedIn = true
        },

        setSocketio: (state, action) => {
            state.socketio = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setCurrentUser, setSocketio} = userSlice.actions

export default userSlice.reducer