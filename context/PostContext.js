export const initialPostState = {
    posts: [],
    postPagination: {
        currentPage: 0,
        totalPage: 0,
    },
    post: {
        comments: [],
        commentPagination: {
            currentPage: 0,
            totalPage: 0,
        },
        reacts: [],
        reactPagination: {
            currentPage: 0,
            totalPage: 0,
        },
    },
}

export const PostReducer = (state, action) => {
    switch (action.type) {
        case 'SET_POST':
            return {...state, posts: action.payload}
        
        case 'ADD_POST':
            return {...state, posts: [action.payload, ...state.posts]}

        case 'POST_PAGINATION':
            return {
                ...state,
                posts: [...state.posts, ...action.payload.posts],
                postPagination: {
                    ...state.postPagination,
                    currentPage: action.payload.currentPage,
                    totalPage: action.payload.totalPage,
                }
            }

        case 'SET_CURRENT_POST':
            return {...state, post: action.payload}


        case 'REMOVE_CURRENT_POST':
            return {
                ...state,
                post: {
                    comments: [],
                    commentPagination: {
                        currentPage: 0,
                        totalPage: 0,
                    },
                    reacts: [],
                    reactPagination: {
                        currentPage: 0,
                        totalPage: 0,
                    },
                },
            }
        

        case 'SET_COMMENT_POST': 
            return {
                ...state,
                post: {
                    ...state.post,
                    comments: action.payload
                }
            }
        
        case 'ADD_COMMENT_POST':
            return {
                ...state,
                post: {
                    ...state.post,
                    comments: [action.payload, ...state.post.comments],
                }
            }

        case 'SET_REACT_POST': 
            return {
                ...state,
                post: {
                    ...state.post,
                    reacts: action.payload
                }
            }
        
        case 'ADD_REACT_POST':
            return {
                ...state,
                post: {
                    ...state.post,
                    reacts: [action.payload, ...state.post.reacts],
                }
            }

        case 'COMMENT_PAGINATION':
            return {
                ...state,
                post: {
                    ...state.post,
                        commentPagination: {
                            ...state.post.commentPagination,
                            currentPage: action.payload.currentPage,
                            totalPage: action.payload.totalPage,
                        },
                        comments: state.post.comments && state.post.comments.length 
                            ? [...state.post.comments, ...action.payload.comments]
                            : [...action.payload.comments],
                }
            }

        case 'REACT_PAGINATION':
            return {
                ...state,
                post: {
                    ...state.post,
                        reactPagination: {
                            ...state.post.reactPagination,
                            currentPage: action.payload.currentPage,
                            totalPage: action.payload.totalPage,
                        },
                        comments: state.post.reacts && state.post.reacts.length 
                            ? [...state.post.reacts, ...action.payload.reacts]
                            : [...action.payload.reacts],
                }
            }

        default:
            throw new Error(`action type ${action.type} not supported`)


    }
}
