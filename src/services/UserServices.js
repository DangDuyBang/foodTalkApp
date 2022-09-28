import axios from "axios";
import { useDispatch } from "react-redux";
import { setNoti } from "../redux/reducers/uiReducer";
import { setUsersSearch } from "../redux/reducers/userReducer";

export default function () {
  const dispatch = useDispatch();

  const fetchNoti = (page, limit) =>
    axios
      .get(`/notifications?page=${page}&limit=${limit}`)
      .then((response) => dispatch(setNoti(response.data)))
      .catch((err) => {
        if (err.response) console.log(err.response.data);
      });

  const searchUsers = ( key, page, limit ) =>
    axios
      .get(`/users?q=${key}&page=${page}&limit=${limit}`)
      .then((response) => dispatch(setUsersSearch(response.data)))
      .catch((err) => {
        if (err.response) console.log(err.response.data);
      });

  const followUsers = (user_id) =>
    axios
      .post(`/users/follow/${user_id}`)
      .then((response) => console.log(response.data))
      .catch((err) => {
        if (err.response) console.log(err.response.data);
      });

  const unfollowUsers = (user) =>
    axios
      .post(`/users/unfollow/${user._id}`)
      .then((response) => console.log(response.data))
      .catch((err) => {
        if (err.response) console.log(err.response.data);
      });

  const seenNoti = (noti_id) =>
    axios
      .post(`/notifications/${noti_id}/seen`)
      .then((response) => console.log(response.data))
      .catch((err) => {
        if (err.response) console.log(err.response.data);
      });

  return {
    fetchNoti,
    searchUsers,
    followUsers,
    unfollowUsers,
    seenNoti,
  };
}
