import { StyleSheet, Text, View, TouchableOpacity, Alert, Switch } from "react-native";
import React, { useState } from "react";
import color from "../../assets/color/color";
import { FontAwesome } from "@expo/vector-icons";
import { lightTheme, darkTheme } from "../../assets/color/Theme"

const MoreSettingScreen = ({ navigation }) => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [descript, setDescript] = useState("You are in light mode.")

  const toggleSwitch = () => {
    if (isDarkMode) {
      setDescript("You are in light mode.")
    } else {
      setDescript("You are in dark mode.// Chưa hoàn thiện")
    }

    setIsDarkMode(previousState => !previousState)
  }

  navigation.setOptions({
    title: "More Settings",
    headerStyle: {
      backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
    },
    headerTintColor: darkTheme.SECOND_TEXT_COLOR
  });

  const eventDisableAccount = () => {
    Alert.alert(
      "Disable Account !",
      "Are you sure you want to lock your account !?",
      [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "YES",
          onPress: () => null,
        },
      ]
    );
    return true;
  };

  return (
    <View style={styles.container}>
      <View style={styles.modeView}>
        <Text style={styles.titleText}>Dark mode</Text>
        <Switch
          trackColor={{ false: 'gray', true: 'tomato' }}
          thumbColor={isDarkMode ? "white" : "gray"}
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>

      <Text style={styles.descriptionText}>
        {descript}
      </Text>

      <View style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={styles.lineView}></View>
      </View>

      <Text style={styles.titleText}>Account</Text>
      <Text style={styles.descriptionText}>
        This means that your account has been locked. After you do it, you will
        not be able to log in to your account until the admin unlocks you.
      </Text>
      <TouchableOpacity onPress={eventDisableAccount}>
        <View style={styles.optionMore}>
          <FontAwesome
            name="ban"
            size={23}
            color={color.errorColor}
          ></FontAwesome>
          <Text style={styles.optionText}>Disable Account</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MoreSettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
  },
  optionMore: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    width: "100%",
  },
  titleText: {
    fontFamily: "Roboto",
    color: darkTheme.SECOND_TEXT_COLOR,
    fontSize: 19,
    fontWeight: "bold",
    marginLeft: 20,
  },
  descriptionText: {
    marginHorizontal: 20,
    fontFamily: "Roboto",
    color: color.textIconSmall,
    marginVertical: 5,
  },
  optionText: {
    color: color.errorColor,
    marginLeft: 30,
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "bold",
  },
  lineView: {
    width: 370,
    borderWidth: 0.5,
    marginVertical: 15,
    borderColor: darkTheme.HIDE_ICON_COLOR
  },
  modeView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 13
  }
});
