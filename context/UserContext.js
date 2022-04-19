import { deleteStorage, getStorage } from "../utils/Storage"

export const initialUserState = {
    currentUser: null,
    socketio: null,
    isLogginIn: false,
    selectedUserProfile: null,
    users: [],
}

export const UserReducer = (state, action) => {
   switch (action.type) {
       case 'SET_CURRENT_USER':
        return {
                ...state,
                currentUser: action.payload,
                isLoggedIn: true,
            }
        
        case 'SET_SOCKETIO':
            return {
              ...state,
              socketio: action.payload,
            }

        case 'SET_USERS':
            return {
                ...state,
                users: action.payload,
            }

        case 'ADD_USER':
            let index_io1 = state.users.findIndex((user)=> user.id === action.payload.id)

            if(index_io1 === -1) {
                return {
                    ...state,
                    users: [action.payload, ...state.users],
                }
            } else {
                return {
                    ...state,
                }
            }

        case 'UPDATE_USER':
            let i_01 = state.users.findIndex((user) => user.id == action.payload.id)
            if (i_01 !== -1) {
                state.users[i_01] = action.payload
            }
            return {
                ...state,
                currentUser: action.payload,
            }
          
        case 'REMOVE_USER':
            let f_users = state.users.filter((user) => user.id != action.payload)
            return {
                  ...state,
                  users: f_users,
                }

        case 'LOGOUT_USER':
            if(getStorage('@token')){
                deleteStorage('@token')
            }

            return {
                ...state,
                currentUser: null,
                isLoggedIn: false,
                users: [],
                selectedUserProfile: null
            }

        case 'FOLLOWER_LOGOUT':
            let id1_friend = state.currentUser.follower.findIndex(
                (user) => user.id == action.payload,
              )
              if (id1_friend !== -1) {
                state.currentUser.follower[id1_friend].is_current = false
              }
              return {
                ...state,
              }

        case 'FOLLOWER_LOGIN':
            let id2_friend = state.currentUser.follower.findIndex(
                (user) => user.id == action.payload,
            )
            if (id2_friend !== -1) {
                state.currentUser.follower[id2_friend].is_current = true
            }
            return {
                ...state,
            }

        case 'ADD_SELECTED_USER_PROFILE':
            return {
                ...state,
                selectedUserProfile: action.payload,
            }

        case 'REMOVE_SELECTED_USER_PROFILE':
            return {
                ...state,
                selectedUserProfile: null,
            }
   
       default:
            throw new Error(`action type ${action.type} is undefined`)
    } 
}