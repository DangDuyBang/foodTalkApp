import "react-native-gesture-handler";
import AppNavigation from "./navigators/navigations/AppNavigation";
import axios from "axios";
import { io } from "socket.io-client";
import { useEffect } from "react";
import { PortalProvider } from "@gorhom/portal";
import { LogBox } from "react-native";
import Toast from "react-native-toast-message";
import toastConfig from "./utils/ToastConfig";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  addPost,
  likeUnlikePost,
} from "./redux/reducers/postReducer";
import { addNotification } from "./redux/reducers/uiReducer";
import { addMessage } from "./redux/reducers/chatReducer";
import { addRate } from "./redux/reducers/foodReducer";
import config from "./config";

axios.defaults.baseURL = config.baseURL;

export default function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const toast = useSelector((state) => state.ui.toast);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    if (isLoggedIn) {
      let socketio = io(config.baseURL, {
        transports: ["websocket"],
        extraHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      socketio.on("connect", () => {
        console.log("connected");
      });

      socketio.on("friend-login-status", ({ user_id }) => {
        //userDispatch({ type: 'FOLLOWER_LOGIN', payload: user_id })
      });

      socketio.on("friend-logout-status", ({ user_id }) => {
        //userDispatch({ type: 'FOLLOWER_LOGOUT', payload: user_id })
      });

      socketio.on("new-message", ({ data }) => {
        dispatch(addMessage(data));
      });

      socketio.on("message-seen", ({ data }) => {
        //do something
      });

      socketio.on("new-food", ({ data }) => {
        //do something
      });

      socketio.on("new-food-rate", ({ data }) => {
        dispatch(addRate(data));
      });

      socketio.on("delete-food-rate", ({ data }) => {
        //do something
      });

      socketio.on("new-post", ({ data }) => {
        //postDispatch({ type: 'ADD_POST', payload: data })
        dispatch(addPost(data));
      });

      socketio.on("like-post", ({ data }) => {
        dispatch(likeUnlikePost(data));
      });

      socketio.on("dislike-post", ({ data }) => {
        //do something
        dispatch(likeUnlikePost(data));
      });

      socketio.on("new-comment-post", ({ data }) => {
        //do something
        dispatch(addComment(data));
      });

      socketio.on("follow-request-status", ({ data }) => {
        //do something
      });

      socketio.on("notification", ({ data }) => {
        //({ type: 'ADD_NOTIFICATION', payload: data })
        dispatch(addNotification(data));
      });

      return () => {
        socketio.disconnect();
        //dispatch(setSocketio(null))
        console.log("disconnect");
      };
    }
  }, [isLoggedIn, token]);

  useEffect(() => {
    if (toast) {
      Toast.show({
        type: toast.type,
        text1: toast.text1,
        text2: toast.text2,
        visibilityTime: 5000,
        autoHide: true,
      });
    }
  }, [toast]);

  return (
    <>
      <PortalProvider>
        <AppNavigation />
      </PortalProvider>
      <Toast config={toastConfig} />
    </>
  );
}
