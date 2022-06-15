import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    toast: null,
    notifications: [],
    loading: false,
    chatList: [],
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setToast: (state, action) => {
        state.toast = action.payload
    },

    setNoti: (state, action) => {
      state.notifications = action.payload
    },

    addNotification: (state, action) => {
      state.notifications.unshift(action.payload)
    },

    seenNotification: (state, action) => {
      const index = state.notifications.findIndex(n => n._id === action.payload)
      if (index > -1) {
        state.notifications[index].is_seen = true
      }
    },


  },
})

// Action creators are generated for each case reducer function
export const { setToast, setNoti, addNotification, seenNotification } = uiSlice.actions

export default uiSlice.reducer