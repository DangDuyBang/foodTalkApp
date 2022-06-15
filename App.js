import 'react-native-gesture-handler';
import AuthenScreen from './screens/Authentication/AuthenScreen';
import axios from 'axios';
import { io } from 'socket.io-client';
import { useEffect } from 'react'
import { PortalProvider } from '@gorhom/portal';
import { LogBox } from 'react-native';
import Toast from 'react-native-toast-message';
import toastConfig from './utils/ToastConfig';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, addPost, likeUnlikePost } from './redux/postReducer';
import { addNotification } from './redux/uiReducer';
import { addMessage } from './redux/chatReducer';

axios.defaults.baseURL = 'https://foodtalk-backend.herokuapp.com'

LogBox.ignoreAllLogs(true)

export default function App() {

  const dispatch = useDispatch()
  const toast = useSelector(state => state.ui.toast)
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)

  useEffect(() => {
    if (isLoggedIn) {
      let socketio = io('https://foodtalk-backend.herokuapp.com', { transports: ['websocket'] })
      //dispatch(setSocketio(socketio))

      socketio.on('connect', () => {
        console.log('connected')
      })

      socketio.on('friend-login-status', ({ user_id }) => {
        //userDispatch({ type: 'FOLLOWER_LOGIN', payload: user_id })
      })

      socketio.on('friend-logout-status', ({ user_id }) => {
        //userDispatch({ type: 'FOLLOWER_LOGOUT', payload: user_id })

      })

      socketio.on('new-message', ({ data }) => {
        dispatch(addMessage(data))
      })

      socketio.on('message-seen', ({ data }) => {
        //do something
      })

      socketio.on('new-food', ({ data }) => {
        //do something
      })

      socketio.on('new-food-rate', ({ data }) => {
        //foodDispatch({ type: 'ADD_RATE', payload: data })
      })

      socketio.on('delete-food-rate', ({ data }) => {
        //do something
      })

      socketio.on('new-post', ({ data }) => {
        //postDispatch({ type: 'ADD_POST', payload: data })
        dispatch(addPost(data))
      })

      socketio.on('like-post', ({ data }) => {
        dispatch(likeUnlikePost(data))
      })

      socketio.on('dislike-post', ({ data }) => {
        //do something
        dispatch(likeUnlikePost(data))
      })

      socketio.on('new-comment-post', ({ data }) => {
        //do something
        dispatch(addComment(data))
      })

      socketio.on('follow-request-status', ({ data }) => {
        //do something
      })

      socketio.on('notification', ({ data }) => {
        //({ type: 'ADD_NOTIFICATION', payload: data })
        dispatch(addNotification(data))
      })

      return () => {
        socketio.disconnect()
        //userDispatch({ type: 'SET_SOCKETIO', payload: null })
        console.log('disconnect')
      }
    }
  }, [isLoggedIn])


  useEffect(() => {
    if (toast) {
      Toast.show({
        type: toast.type,
        text1: toast.text1,
        text2: toast.text2,
        visibilityTime: 5000,
        autoHide: true,
      })
    }

  }, [toast])


  return (
    <>
      <PortalProvider>
        <AuthenScreen />
      </PortalProvider>
      <Toast config={toastConfig} />
    </>
  );
}

