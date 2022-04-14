import 'react-native-gesture-handler';
import AuthenScreen from './screens/Authentication/AuthenScreen';
import axios from 'axios';
import { io } from 'socket.io-client';
import { useEffect, useContext } from 'react'
import { UserContext } from './providers/UserProvider'
import { PortalProvider } from '@gorhom/portal';

axios.defaults.baseURL = 'https://foodtalk-backend.herokuapp.com'


export default function App() {

  const { userState, userDispatch } = useContext(UserContext)

  useEffect(() => {
    if (userState.isLoggedIn) {
      let socketio = io('https://foodtalk-backend.herokuapp.com', { transports: ['websocket'] })
      userDispatch({ type: 'SET_SOCKETIO', payload: socketio })

      socketio.on('connect', () => {
        console.log('connected')
      })

      socketio.on('friend-login-status', ({ user_id }) => {
        //do something
      })

      socketio.on('friend-logout-status', ({ user_id }) => {
        //do something
      })

      socketio.on('new-message', ({ data }) => {
        //do something
      })

      socketio.on('message-seen', ({ data }) => {
        //do something
      })

      socketio.on('new-food', ({ data }) => {
        //do something
      })

      socketio.on('new-food-rate', ({ data }) => {
        //do something
      })

      socketio.on('delete-food-rate', ({ data }) => {
        //do something
      })

      socketio.on('new-post', ({ data }) => {
        //do something
      })

      socketio.on('like-post', ({ data }) => {
        //do something
      })

      socketio.on('dislike-post', ({ data }) => {
        //do something
      })

      socketio.on('new-comment-post', ({ data }) => {
        //do something
      })

      socketio.on('follow-request-status', ({ data }) => {
        //do something
      })

      socketio.on('notification', ({ data }) => {
        uiDispatch({ type: 'ADD_NOTIFICATION', payload: data })
      })

      return () => {
        socketio.disconnect()
        userDispatch({ type: 'SET_SOCKETIO', payload: null })
        console.log('disconnect')
      }
    }
  }, [userState.isLoggedIn])

  return (
    <>
      <PortalProvider>
        <AuthenScreen />
      </PortalProvider>
    </>
  );
}

