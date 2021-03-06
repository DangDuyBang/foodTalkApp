import { StyleSheet, View } from "react-native";
import React from "react";
import InputText from "../../components/input/InputText";
import useSignIn from "./hooks/useSignIn";
import color from "../../assets/color/color";
import BtnNoLogo from "../../components/button/BtnNoLogo";

const ForgotPasswordScreen = () => {
  const {
    handleEmailChange,
  } = useSignIn();

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <InputText
          inputIcon="mail"
          inputName="Type Email to Reset"
          setNameText={handleEmailChange}
        />
        <BtnNoLogo
          nameButton="RESET PASSWORD"
          colorView={color.primary}
          colorName={color.background}
        />
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
  top: {
    flexDirection: "row",
    marginTop: 30,
    borderBottomWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    borderBottomColor: color.inputColor,
  },
  iconArrow: {
    marginRight: 15,
    color: color.textGray,
  },
  topText: {
    fontSize: 20,
    fontFamily: "Roboto",
    color: color.textGray,
  },
  body: {
    marginTop: 10,
    alignItems: "center",
  },
});
