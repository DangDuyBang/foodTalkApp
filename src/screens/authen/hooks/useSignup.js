import React from "react";
import { useEffect } from "react";
import AuthServices from "../../../services/AuthServices";

const useSignup = () => {
  const { signUpUser } = AuthServices();
  const [payload, setPayload] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [error, setError] = React.useState({});
  const [confirmPassword, setConfirmPassword] = React.useState("");

  useEffect(() => {
    if (loading === true)
      signUpUser(payload)
        .then(() => setLoading(false))
        .catch(() => setLoading(false));
  }, [loading]);

  const handleUsernameChange = (username) => {
    setPayload({ ...payload, username: username });
  };

  const handleNameChange = (name) => {
    setPayload({ ...payload, name: name });
  };

  const handlePasswordChange = (password) => {
    setPayload({ ...payload, password: password });
  };

  const handleEmailChange = (email) => {
    setPayload({ ...payload, email: email });
  };

  const handleConfirmPasswordChange = (password) => {
    setConfirmPassword(password);
  };

  const handleCheckedChange = () => {
    setChecked(!checked);
  };

  const handleConfirm = () => {
    if (!checked) {
      setError({ checked: "Please check to the agree" });
      return;
    }

    if (confirmPassword !== payload.password) {
      setError({ confirm_password: "Password does not match" });
      return;
    }

    setLoading(true);
  };

  return {
    loading,
    error,
    checked,
    handleCheckedChange,
    handleUsernameChange,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleConfirm,
  };
};

export default useSignup;
