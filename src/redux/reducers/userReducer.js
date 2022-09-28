import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  socketio: null,
  isLoggedIn: false,
  selectedUser: null,
  token: '',
  usersSearch: {
    count: 0,
    rows: [],
    currentPage: 1,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    deleteToken: (state) => {
      state.token = ''
    },

    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      state.isLoggedIn = true;
    },

    updateProfile: (state, action) => {
      state.currentUser = Object.assign(state.currentUser, action.payload);
    },

    setSocketio: (state, action) => {
      state.socketio = action.payload;
    },

    follow: (state, action) => {
      state.currentUser.following.push(action.payload);
      // state.selectedUser.data.follower = action.payload.following
    },

    follower: (state, action) => {
      state.currentUser.follower.push(action.payload);
    },

    unfollower: (state, action) => {
      state.currentUser.follower = state.currentUser.follower.filter(
        (u) => u._id !== action.payload._id
      );
    },

    unfollow: (state, action) => {
      state.currentUser.following = state.currentUser.following.filter(
        (u) => u._id !== action.payload._id
      );
    },

    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },

    removeSelectedUser: (state, action) => {
      state.selectedUser = null;
    },

    setUsersSearch: (state, action) => {
      state.searchUser.count = action.payload.count;
      state.searchUser.rows.push(...action.payload.rows);
      state.searchUser.currentPage += 1;
    },

    deleteSearchUser: (state, action) => {
      state.searchUser = {
        count: 0,
        rows: [],
        currentPage: 1,
      };
    },

    logout: (state, action) => {
      state.isLoggedIn = false;
      state.socketio = null;
      state.selectedUser = null;
      state.usersSearch = {
        count: 0,
        rows: [],
        currentPage: 1,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCurrentUser,
  setSocketio,
  follow,
  setSelectedUser,
  removeSelectedUser,
  setUsersSearch,
  deleteSearchUser,
  logout,
  unfollow,
  updateProfile,
  setToken,
  deleteToken
} = userSlice.actions;

export default userSlice.reducer;
