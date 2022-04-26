export const initialUIState = {
    toast: null,
    notifications: [],
    loading: false,
    chatList: [],
}

export const UIReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TOAST':
            return {
                ...state,
                toast: action.payload,
            }
        
        case 'SET_NOTIFICATIONS':
            return { ...state, notifications: action.payload}

        case 'SET_LOADING':
            return { ...state, loading: action.payload}

        case 'SET_POST_MODEL':
            return { ...state, postModel: action.payload}

        case 'ADD_NOTIFICATION':
            return { ...state, notifications: [action.payload, ...state.notifications]}

        case 'ADD_CHAT':
            return { ...state, chatList:[action.payload, ...state.chatList]}

        case 'REMOVE_CHAT':
            let list = state.filter((user) => user.id !== action.payload.id)
            return { ...state, chatList: list}

        default:
            throw new Error(`action type ${action.type} not supported`)
    }
}