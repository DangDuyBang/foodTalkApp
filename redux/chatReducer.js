import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  chats: [],
  chatPaginations: {
    currentPage: 0,
    totalPage: 0,
  },
  currentChat: null,
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
      state.chats = action.payload.chats
      state.chatPaginations.currentPage = 1
      state.chatPaginations.totalPage = action.payload.pagination.totalPage
    },

    setChatPaginations: (state, action) => {
      state.chats.push(...action.payload.chats)
      state.chatPaginations.currentPage += 1
    },

    setCurrentChat: (state, action) => {
      state.currentChat = action.payload
    },

    setMessages: (state, action) => {
      state.messages = action.payload.messages
      state.messagesPagination.currentPage = 1
      state.messagesPagination.totalPage = action.payload.pagination.totalPage
    },

    addMessage: (state, action) => {
      const index = state.chats.findIndex(chat => chat._id === action.payload.chat)
      if(index !== -1 ){
        state.chats[index].lastMessage = action.payload
      }

      if(state.currentChat) {
        state.messages.unshift(action.payload)
      }
    },

    setMessagesPagination: (state, action) => {
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
export const { setChat, setCurrentChat, setMessages, setMessagesPagination, removeMessages, addMessage, setChatPaginations } = chatSlice.actions

export default chatSlice.reducer