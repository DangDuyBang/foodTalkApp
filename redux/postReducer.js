import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
  postPagination: {
    currentPage: 0,
    totalPage: 0,
  },

  currentPost: {
    data: null,
    comments: [],
    commentPagination: {
      currentPage: 0,
      totalPage: 0
    },

    reactions: [],

    userPosts: [],
    userPostPagination: {
      currentPage: 0,
      totalPage: 0,
    },
  },

}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts.push(...action.payload.posts)
      state.postPagination.currentPage += 1
      state.postPagination.totalPage = action.payload.pagination.totalPage
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

      if(state.currentPost.data) {
        state.currentPost.data.num_heart = num_heart
        state.currentPost.reactions = reactions
      }
    },

    likePost: (state, action) => {
      const index = state.posts.findIndex(post => post._id === action.payload.post._id)
      state.posts[index].num_heart += 1
      state.posts[index].reactions.push(action.payload.user._id)

      if(state.currentPost.data) {
        state.currentPost.data.num_heart += 1
        state.currentPost.data.reactions.push(action.payload.user._id)
      }
    },

    unLikePost: (state, action) => {
      const index = state.posts.findIndex(post => post._id === action.payload.post._id)
      state.posts[index].num_heart -= 1
      state.posts[index].reactions = state.posts[index].reactions.filter(reaction => reaction !== action.payload.user._id)

      if(state.currentPost.data) {
        state.currentPost.data.num_heart -= 1
        state.currentPost.data.reactions = state.currentPost.data.reactions.filter(reaction => reaction !== action.payload.user._id)
      }
    },

    setCurrentPost: (state, action) => {
      state.currentPost.data = action.payload
    },

    setComment: (state, action) => {
      state.currentPost.comments.push(...action.payload.comments)
      state.currentPost.commentPagination.currentPage += 1
      state.currentPost.commentPagination.totalPage = action.payload.pagination.totalPage
    },

    setReactions: (state, action) => {
      state.currentPost.reactions.push(...action.payload.reacts.reactions)
    },

    deleteCurrentReaction: (state, action) => {
      state.currentPost.reactions = []
    },

    deleteCurrentPost: (state, action) => {
      state.currentPost.comments = []
      state.currentPost.commentPagination.currentPage = 0
      state.currentPost.commentPagination.totalPage = 0
    },

    addComment: (state, action) => {
      if (state.currentPost) {
        const index = state.currentPost.comments.findIndex(comment => comment._id === action.payload.parent)
        if (index !== -1) {
          state.currentPost.comments[index].children.push(action.payload)
        } else {
          state.currentPost.comments.unshift(action.payload)
        }
      }

      const i = state.posts.findIndex(post => post._id === action.payload.post)
      state.posts[i].num_comment += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPosts, likeUnlikePost, addPost, likePost, unLikePost, setComment, deleteCurrentPost, addComment, setReactions, deleteCurrentReaction, setCurrentPost} = postSlice.actions

export default postSlice.reducer