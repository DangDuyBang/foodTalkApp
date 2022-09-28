import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AuthServices from "../../../services/AuthServices";
import UserServices from "../../../services/UserServices";

const useSignIn = () => {
  const [initialState, setInitialState] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { loginUser } = AuthServices();
  const { fetchNoti } = UserServices();
  const notifications = useSelector((state) => state.ui.notifications);

  useEffect(()=> {
    if (loading === true){
      loginUser(initialState)
      .then(() => fetchNoti(notifications.currentPage, 20))
      .then(() => setLoading(false))
    }
  }, [loading])

  const handlePasswordChange = (text) => {
    setInitialState({ ...initialState, password: text });
    // setError({ ...error, password: '' })
  };

  const handleEmailChange = (text) => {
    setInitialState({ ...initialState, email: text });
    // setError({ ...error, email: '' })
  };

  const handleLoginUser = (e) =>
    setLoading(true)

  return {
    loading,
    handleLoginUser,
    handleEmailChange,
    handlePasswordChange,
  };
};

export default useSignIn;
