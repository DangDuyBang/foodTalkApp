import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import color from "../../assets/color/color";
import { Ionicons } from "@expo/vector-icons";
import InputPass from "../../components/input/InputPass";
import BtnNoLogo from "../../components/button/BtnNoLogo";
import { lightTheme, darkTheme } from "../../assets/color/Theme"
import { useSelector } from "react-redux";

const ChangePasswordScreen = ({ navigation }) => {
  const theme = useSelector((state) => state.theme.theme);

  const styles = theme.mode === "light" ? styles_light : styles_dark;

  navigation.setOptions({
    title: "Change password",
    headerRight: () => (
      <TouchableOpacity style={{ marginRight: 16 }}>
        <Ionicons
          name="checkmark-sharp"
          size={35}
          color={color.primary}
        ></Ionicons>
      </TouchableOpacity>
    ),
  });

  const handleChangePassword = () => {
    alert("Change Password Successfully");
  };

  return (
    <View style={styles.container}>
      <View style={styles.bodyView}>
        <InputPass inputIconLeft="lock" inputName="Current Password" />
        <InputPass inputIconLeft="lock" inputName="New Password" />
        <InputPass inputIconLeft="lock" inputName="Confirm New Password" />
        <BtnNoLogo
          nameButton="Change Password"
          colorView={color.primary}
          colorName={color.background}
          eventButton={handleChangePassword}
        />
      </View>
    </View>
  );
};

export default ChangePasswordScreen;

const styles_light = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
    paddingBottom: 10,
  },
  topView: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 7,
    paddingHorizontal: 15,
  },
  topText: {
    fontFamily: "Roboto",
    fontSize: 22,
    fontWeight: "bold",
    color: lightTheme.SECOND_TEXT_COLOR,
    marginLeft: 15,
  },
  bodyView: {
    paddingTop: 20,
    alignItems: "center",
  },
});

const styles_dark = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
    paddingBottom: 10,
  },
  topView: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 7,
    paddingHorizontal: 15,
  },
  topText: {
    fontFamily: "Roboto",
    fontSize: 22,
    fontWeight: "bold",
    color: darkTheme.SECOND_TEXT_COLOR,
    marginLeft: 15,
  },
  bodyView: {
    paddingTop: 20,
    alignItems: "center",
  },
});
