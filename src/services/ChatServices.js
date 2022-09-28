import axios from "axios";
import { useDispatch } from "react-redux";
import {
  addChat,
  addMessage,
  fetchChats,
  setChat,
  setMessages,
  fetchMessages
} from "../redux/reducers/chatReducer";
import { setToast } from "../redux/reducers/uiReducer";

export default function () {
  const dispatch = useDispatch();
  const createChat = (payload) =>
    axios
      .post(`/chats/${payload}`)
      .then((response) => dispatch(addChat(response.data)))
      .catch((err) => {
        console.log(err);
        if (err.response) {
          dispatch(
            setToast({
              type: "error",
              title: "Error creating post",
              message: err.response.data,
            })
          );
        }
      });

  const createMessage = (payload) =>
    axios
      .post("/messages", payload)
      .then((response) => dispatch(addMessage(response.data)))
      .catch((err) => {
        console.log(err);
        if (err.response) {
          dispatch(
            setToast({
              type: "error",
              title: "Error send message",
              message: err.response.data,
            })
          );
        }
      });

  const fetchChat = (page, limit) =>
    axios
      .get(`/chats?page=${page}&limit=${limit}`)
      .then((response) => dispatch(fetchChats(response.data)))
      .catch((err) => {
        if (err.response) console.log(err.response.data);
      });

  const setChats = (limit) =>
    axios
      .get(`/chats?page=1&limit=20`)
      .then((response) => dispatch(setChat(response.data)))
      .catch((err) => {
        if (err.response) console.log(err.response.data);
      });

  const fetchMessage = (chat_id, page, limit) =>
    axios
      .get(`/messages/${chat_id}?page=${page}&limit=${limit}`)
      .then((response) => dispatch(fetchMessages(response.data)))
      .catch((err) => {
        if (err.response) console.log(err.response.data);
      });

      const setMessage = (chat_id, limit) =>
      axios
        .get(`/messages/${chat_id}?page=1&limit=${limit}`)
        .then((response) => dispatch(setMessages(response.data)))
        .catch((err) => {
          if (err.response) console.log(err.response.data);
        });

  return {
    createChat,
    createMessage,
    fetchChat,
    setChats,
    fetchMessage,
    setMessage
  }
}

