import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
  postPagination: {
    currentPage: 0,
    totalPage: 0,
  },
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    },

    addPost: (state, action) => {
      state.posts.unshift(action.payload)
    },

    //socket

    likeUnlikePost: (state, action) => {
      const { _id, num_heart, reactions } = action.payload
      const index = state.posts.findIndex(post => post._id === _id)
      state.posts[index].num_heart = num_heart
      state.posts[index].reactions = reactions
    },

    likePost: (state, action) => {
      const index = state.posts.findIndex(post => post._id === action.payload.post._id)
      state.posts[index].num_heart += 1
      state.posts[index].reactions.push(action.payload.user._id)
    },

    unLikePost: (state, action) => {
      const index = state.posts.findIndex(post => post._id === action.payload.post._id)
      state.posts[index].num_heart -= 1
      state.posts[index].reactions = state.posts[index].reactions.filter(reaction => reaction !== action.payload.user._id)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPosts, likeUnlikePost, addPost, likePost, unLikePost } = postSlice.actions

export default postSlice.reducer