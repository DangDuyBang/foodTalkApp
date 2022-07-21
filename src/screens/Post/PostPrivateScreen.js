import { StyleSheet, Text, View } from "react-native";
import React from "react";
import color from "../../assets/color/color";
import { lightTheme, darkTheme } from "../../assets/color/Theme"
import { useSelector } from "react-redux";

const PrivatePostScreen = () => {
  const theme = useSelector((state) => state.theme.theme);

  let styles;
  {
    theme.mode === "light" ?
      styles = styles_light
      : styles = styles_dark;
  }

  return (
    <View style={styles.container}>
      <View style={styles.nonePostTextView}>
        <Text style={styles.nonePostText}>
          There's no thing at all {"\n"}
          User's posts will be display at here.
        </Text>
      </View>
    </View>
  );
};

export default PrivatePostScreen;

const styles_light = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 5,
    // paddingBottom: 130,
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
  },
  nonePostText: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 50,
    textAlign: "center",
    color: lightTheme.SECOND_TEXT_COLOR,
  },
  nonePostTextView: {
    alignItems: "center",
    width: "100%",
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
  }
});

const styles_dark = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 5,
    // paddingBottom: 130,
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
  },
  nonePostText: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 50,
    textAlign: "center",
    color: darkTheme.SECOND_TEXT_COLOR
  },
  nonePostTextView: {
    alignItems: "center",
    width: "100%",
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
  }
});
