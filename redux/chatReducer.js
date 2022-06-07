import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  chats: [],
  chatPaginations: {
    currentPage: 0,
    totalPage: 0,
  },
  curerntChat: null,
  messages: [],
  messagesPagination: {
    currentPage: 0,
    totalPage: 0,
  }
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChat: (state, action) => {
      state.chats.push(...action.payload.chats)
      state.chatPaginations.currentPage += 1
      state.chatPaginations.totalPage = action.payload.pagination.totalPage
    },

    setCurrentChat: (state, action) => {
      state.curerntChat = action.payload
    },

    setMessages: (state, action) => {
      state.messages = action.payload.messages
      state.messagesPagination.currentPage = 1
      state.messagesPagination.totalPage = action.payload.pagination.totalPage
    },

    messagesPagination: (state, action) => {
      state.messages.push(...action.payload.messages)
      state.messagesPagination.currentPage += 1
    },

    removeMessages: (state, action) => {
      state.messages = []
      state.messagesPagination.currentPage = 0
      state.messagesPagination.totalPage = 0
    }

  },
})

// Action creators are generated for each case reducer function
export const { setChat, setCurrentChat, setMessages, setMessagesPagination, removeMessages } = chatSlice.actions

export default chatSlice.reducer