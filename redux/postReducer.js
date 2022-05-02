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

    likeUnlikePost: (state, action) => {
      const { _id, num_heart, reactions } = action.payload
      const index = state.posts.findIndex(post => post._id === _id)
      state.posts[index].num_heart = num_heart
      state.posts[index].reactions = reactions
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPosts, likeUnlikePost, addPost } = postSlice.actions

export default postSlice.reducer