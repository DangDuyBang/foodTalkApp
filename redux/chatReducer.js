import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    chats: [],
    chatPaginations: {
        currentPage: 0,
        totalPage: 0,
    },
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChat: (state, action) => {
        state.chats.push(...action.payload.chats)
        state.chatPaginations.currentPage +=1
        state.chatPaginations.totalPage = action.payload.pagination.totalPage
    },

  },
})

// Action creators are generated for each case reducer function
export const { setChat } = chatSlice.actions

export default chatSlice.reducer