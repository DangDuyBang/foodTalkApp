import axios from "axios";
import { useDispatch } from "react-redux";
import config from "../config";
import { setToast } from "../redux/reducers/uiReducer";
import { setCurrentUser, setToken } from "../redux/reducers/userReducer";

export default () => {
  const dispatch = useDispatch();

  const loginUser = (userData) =>
    axios
      .post(
        "/auth",
        { access_token: config.access_token },
        {
          auth: {
            username: userData.email,
            password: userData.password,
          },
        }
      )
      .then((response) => {
        dispatch(setToken(response.data.token));
        dispatch(setCurrentUser(response.data.user));
        dispatch(
          setToast({
            type: "success",
            text1: "Wellcome",
            text2: "Take your time to cook some recipes",
          })
        );
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          dispatch(
            setToast({
              type: "error",
              text1: err.response.data,
              text2: "Wrong password, enter again",
            })
          );
        }
      });

  const signUpUser = (userData) =>
    axios
      .post(
        "/users",
        Object.assign(userData, { access_token: config.access_token })
      )
      .then((response) => {
        dispatch(setToken(response.data.token));
        dispatch(setCurrentUser(response.data.user));
        dispatch(
          setToast({
            type: "success",
            text1: "Wellcome",
            text2: "Take your time to cook some recipes",
          })
        );
      })
      .catch((err) => {
        if (err.response) {
          dispatch(
            setToast({
              type: "error",
              text1: "Error",
              text2: err.response.data,
            })
          );
        }
      });

  const changePassword = ({ password, email, currentPassword }) =>
    axios
      .put(
        "/users/me/password",
        { password: password },
        {
          auth: {
            username: email,
            password: currentPassword,
          },
        }
      )
      .then((response) =>
        dispatch(
          setToast({
            type: "success",
            text1: "Success",
            text2: "Your password has been updated",
          })
        )
      )
      .catch((err) => {
        console.log(err);
        if (err.response) {
          dispatch(
            setToast({
              type: "error",
              text1: "Error",
              text2: err.response.data,
            })
          );
        }
      });

  const updateProfile = (userData) =>
    axios
      .put("/users/me", userData)
      .then((response) => {
        dispatch(setCurrentUser(response.data));
        dispatch(
          setToast({
            type: "success",
            text1: "Success",
            text2: "Your profile has been updated",
          })
        );
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          dispatch(
            setToast({
              type: "error",
              text1: "Error",
              text2: err.response.data,
            })
          );
        }
      });

  return {
    loginUser,
    signUpUser,
    changePassword,
    updateProfile,
  };
};
