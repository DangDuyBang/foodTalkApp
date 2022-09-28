import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import color from "../../assets/color/color";
import { lightTheme, darkTheme } from "../../assets/color/Theme"
import { useSelector } from "react-redux";

const Shortcut = (props) => {
  const theme = useSelector((state) => state.theme.theme);

  const styles = theme.mode === "light" ? styles_light : styles_dark;

  return (
    <TouchableOpacity onPress={props.onFunction}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name={props.iconShortcut}
          size={20}
          color={props.iconColor}
        ></MaterialCommunityIcons>
        <Text style={styles.nameShortcut}>{props.nameShortcut}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Shortcut;

const styles_light = StyleSheet.create({
  container: {
    marginRight: 7,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderWidth: 0.2,
    marginBottom: 10,
    marginLeft: 2,
    borderColor: lightTheme.LINE_COLOR
  },
  nameShortcut: {
    fontFamily: "Roboto",
    fontSize: 14,
    marginLeft: 5,
    fontWeight: "bold",
    color: lightTheme.SECOND_TEXT_COLOR,
  },
});

const styles_dark = StyleSheet.create({
  container: {
    marginRight: 7,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderWidth: 0.2,
    marginBottom: 10,
    marginLeft: 2,
    borderColor: darkTheme.LINE_COLOR
  },
  nameShortcut: {
    fontFamily: "Roboto",
    fontSize: 14,
    marginLeft: 5,
    fontWeight: "bold",
    color: darkTheme.SECOND_TEXT_COLOR,
  },
});
