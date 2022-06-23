import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import color from "../../../contains/color";
import { Ionicons } from "@expo/vector-icons";
import InputPass from "../../../components/input/InputPass";
import SubmitNoLogo from "../../../components/SubmitNoLogo";

const ChangePasswordScreen = ({ navigation }) => {
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
        <SubmitNoLogo
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
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
    color: color.textGray,
    marginLeft: 15,
  },
  bodyView: {
    paddingTop: 20,
    alignItems: "center",
  },
});
