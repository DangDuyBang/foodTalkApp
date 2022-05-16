import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: {
        data: null,
        foods: [],
        posts: [],
        postPagination: {
            currentPage: 0,
            totalPages: 0,

        },
        foodPagination: {
            currentPage: 0,
            totalPages: 0,

        },
    },
    socketio: null,
    isLoggedIn: false,
    selectedUserProfile: {
        data: null,
        foods: [],
        posts: [],
        postPagination: {
            currentPage: 0,
            totalPages: 0,

        },
        foodPagination: {
            currentPage: 0,
            totalPages: 0,

        },
    },
    users: [],

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser.data = action.payload
            state.isLoggedIn = true
        },

        setSocketio: (state, action) => {
            state.socketio = action.payload
        },

        follow: (state, action) => {
            state.currentUser.following = action.payload.following
        },

        setSelectedUserProfile: (state, action) => {
            state.selectedUserProfile.data = action.payload
        },

        setSelectedUserFoods: (state, action) => {
            state.selectedUserProfile.foods.push(...action.payload.foods)
            state.selectedUserProfile.foodPagination.currentPage += 1
            state.selectedUserProfile.foodPagination.totalPage = action.payload.pagination.totalPage
        },

        setSelectedUserPosts: (state, action) => {
            state.selectedUserProfile.posts.push(...action.payload.posts)
            state.selectedUserProfile.postPagination.currentPage += 1
            state.selectedUserProfile.postPagination.totalPage = action.payload.pagination.totalPage
        },

        removeSelectedUserProfile: (state, action) => {
            state.selectedUserProfile = {
                data: null,
                foods: [],
                posts: [],
                postPagination: {
                    currentPage: 0,
                    totalPages: 0,

                },
                foodPagination: {
                    currentPage: 0,
                    totalPages: 0,

                },
            }
        },

        setUserFoods: (state, action) => {
            state.currentUser.foods.push(...action.payload.foods)
            state.currentUser.foodPagination.currentPage += 1
            state.currentUser.foodPagination.totalPage = action.payload.pagination.totalPage
        },

        addUserFood: (state, action) => {
            state.currentUser.foods.unshift(action.payload)
        },

        setUserPosts: (state, action) => {
            state.currentUser.posts.push(...action.payload.posts)
            state.currentUser.postPagination.currentPage += 1
            state.currentUser.postPagination.totalPage = action.payload.pagination.totalPage
        },

        addUserPost: (state, action) => {
            state.currentUser.posts.unshift(action.payload)
        }

    },
})

// Action creators are generated for each case reducer function
export const {
    setCurrentUser,
    setSocketio,
    follow,
    setSelectedUserProfile,
    removeSelectedUserProfile,
    setUserFoods,
    setUserPosts,
    addUserFood,
    addUserPost,
    setSelectedUserFoods,
    setSelectedUserPosts
} = userSlice.actions

export default userSlice.reducer