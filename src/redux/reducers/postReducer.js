import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // posts: { count, rows }
  posts: {
    count: 0,
    rows: [],
    currentPage: 1,
  },
  currentPost: {
    data: null,
    comments: {
      count: 0,
      rows: [],
      currentPage: 1,
    },

    reactions: {
      count: 0,
      rows: [],
      currentPage: 1,
    },
  },
  userPosts: {
    count: 0,
    rows: [],
    currentPage: 1,
  },

  selectedUserPost: {
    count: 0,
    rows: [],
    currentPage: 1,
  },

  searchPosts: {
    count: 0,
    rows: [],
    currentPage: 1,
  },
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts.count = action.payload.count;
      state.posts.rows.push(...action.payload.rows);
      state.posts.currentPage += 1;
    },

    addPost: (state, action) => {
      state.posts.count += 1;
      state.posts.rows.unshift(action.payload);
    },

    //socket

    likeUnlikePost: (state, action) => {
      const index = state.posts.rows.findIndex(
        (post) => post._id === action.payload._id
      );
      state.posts.rows[index].reactions = action.payload.reactions;

      if (
        state.currentPost.data &&
        state.currentPost.data._id === action.payload._id
      ) {
        state.currentPost.data.reactions = action.payload.reactions;
      }
    },

    likePost: (state, action) => {
      const index = state.posts.rows.findIndex(
        (post) => post._id === action.payload.post._id
      );
      state.posts.rows[index].reactions.push(action.payload.user._id);

      if (
        state.currentPost.data &&
        state.currentPost.data._id == action.payload.post._id
      ) {
        state.currentPost.data.reactions.push(action.payload.user._id);
      }
    },

    unLikePost: (state, action) => {
      const index = state.posts.rows.findIndex(
        (post) => post._id === action.payload.post._id
      );
      state.posts.rows[index].num_heart -= 1;
      state.posts.rows[index].reactions = state.posts.rows[
        index
      ].reactions.filter((reaction) => reaction !== action.payload.user._id);

      if (
        state.currentPost.data &&
        state.currentPost.data._id == action.payload.post._id
      ) {
        state.currentPost.data.num_heart -= 1;
        state.currentPost.data.reactions =
          state.currentPost.data.reactions.filter(
            (reaction) => reaction !== action.payload.user._id
          );
      }
    },

    setCurrentPost: (state, action) => {
      state.currentPost.data = action.payload;
    },

    setComment: (state, action) => {
      state.currentPost.comments.count = action.payload.count;
      state.currentPost.comments.rows.push(...action.payload.rows);
      state.currentPost.comments.currentPage += 1;
    },

    setReactions: (state, action) => {
      state.currentPost.reactions.count = action.payload.count;
      state.currentPost.reactions.rows.push(...action.payload.rows);
      state.currentPost.reactions.currentPage += 1;
    },

    deleteCurrentPost: (state) => {
      state.currentPost = {
        data: null,
        comments: {
          count: 0,
          rows: [],
          currentPage: 1,
        },

        reactions: {
          count: 0,
          rows: [],
          currentPage: 1,
        },
      };
    },

    addComment: (state, action) => {
      if (state.currentPost) {
        const index = state.currentPost.comments.rows.findIndex(
          (comment) => comment._id === action.payload.parent._id
        );
        if (index !== -1) {
          state.currentPost.comments.rows[index].children.unshift(
            action.payload
          );
        } else {
          state.currentPost.comments.rows.push(action.payload);
        }
      }

      const i = state.posts.rows.findIndex(
        (post) => post._id === action.payload.post._id
      );
      state.posts.rows[i].num_comment += 1;
    },

    setUserPosts: (state, action) => {
      state.userPosts.count = action.payload.count;
      state.userPosts.rows = action.payload.rows;
      state.userPosts.currentPage = 2;
    },

    fetchUserPosts: (state, action) => {
      state.userPosts.rows.push(...action.payload.rows);
      state.userPosts.currentPage += 1;
    },

    addUserPost: (state, action) => {
      state.userPosts.count += 1;
      state.userPosts.rows.unshift(action.payload);
    },

    setSelectedUserPosts: (state, action) => {
      state.selectedUserPost.count = action.payload.count;
      state.selectedUserPost.rows.push(...action.payload.rows)
      state.selectedUserPost.currentPage +=1;
    },

    setSearchPosts: (state, action) => {
      state.searchPosts.count = action.payload.count;
      state.searchPosts.rows.push(...action.payload.rows);
      state.searchPosts.currentPage += 1;
    },

    deleteSearchPosts: (state, action) => {
      state.searchPosts = { count: 0, rows: [], currentPage: 1 };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setPosts,
  likeUnlikePost,
  addPost,
  likePost,
  unLikePost,
  setComment,
  deleteCurrentPost,
  addComment,
  setReactions,
  setCurrentPost,
  setUserPosts,
  addUserPost,
  setSelectedUserPosts,
  setSearchPosts,
  deleteSearchPosts,
  fetchUserPosts,
} = postSlice.actions;

export default postSlice.reducer;
