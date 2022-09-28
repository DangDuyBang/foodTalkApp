import { StyleSheet, Text, View } from "react-native";
import React from "react";
import color from "../../assets/color/color";
import { lightTheme, darkTheme } from "../../assets/color/Theme"
import { useSelector } from "react-redux";

const TermOfServiceScreen = ({ navigation }) => {
  const theme = useSelector((state) => state.theme.theme);

  const styles = theme.mode === "light" ? styles_light : styles_dark;

  navigation.setOptions({
    title: "Term of Service",
  });

  return (
    <View style={styles.container}>
      <Text style={styles.textService}>Term of Service</Text>
    </View>
  );
};

export default TermOfServiceScreen;

const styles_light = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  textService: {
    color: lightTheme.SECOND_TEXT_COLOR
  }
});

const styles_dark = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  textService: {
    color: darkTheme.SECOND_TEXT_COLOR
  }
});
