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

  },
})

// Action creators are generated for each case reducer function
export const { setToast } = uiSlice.actions

export default uiSlice.reducer