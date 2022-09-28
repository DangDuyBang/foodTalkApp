import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: {
    count: 0,
    rows: [],
    currentPage: 1,
  },
  currentChat: null,
  messages: {
    count: 0,
    rows: [],
    currentPage: 1,
  },
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChat: (state, action) => {
      state.chats.count = action.payload.count;
      state.chats.rows = action.payload.rows;
      state.chats.currentPage = 2;
    },

    fetchChats: (state, action) => {
      state.chats.rows.push(action.payload.rows);
      state.chats.currentPage += 1;
    },

    setCurrentChat: (state, action) => {
      state.currentChat = action.payload;
    },

    setMessages: (state, action) => {
      state.messages.count = action.payload.count;
      state.messages.rows = action.payload.rows;
      state.messages.currentPage = 2;
    },

    fetchMessages: (state, action) => {
      state.messages.rows.push(...action.payload.rows);
      state.messages.currentPage += 1;
    },

    addMessage: (state, action) => {
      const index = state.chats.rows.findIndex(
        (chat) => chat._id === action.payload.chat
      );
      if (index !== -1) {
        state.chats.rows[index].lastMessage = action.payload;
      }

      if (state.currentChat) {
        state.messages.rows.unshift(action.payload);
      }
    },

    removeMessages: (state, action) => {
      state.messages = {
        count: 0,
        rows: [],
        currentPage: 1,
      };
    },

    addChat: (state, action) => {
      state.chats.rows.push(action.payload);
      state.chats.count += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setChat,
  fetchChats,
  setCurrentChat,
  setMessages,
  removeMessages,
  addMessage,
  addChat,
  fetchMessages
} = chatSlice.actions;

export default chatSlice.reducer;
