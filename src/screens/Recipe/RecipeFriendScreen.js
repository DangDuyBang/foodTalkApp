import { StyleSheet, Text, View } from "react-native";
import React from "react";
import color from "../../assets/color/color";
import { darkTheme, lightTheme } from "../../assets/color/Theme";
import { useSelector } from "react-redux";

const RecipeFriendScreen = () => {
  const theme = useSelector((state) => state.theme.theme);

  let styles;
  {
    theme.mode === "light" ?
      styles = styles_light
      : styles = styles_dark;
  }

  let background_COLOR, text_COLOR;
  {
    theme.mode === "light" ?
      background_COLOR = lightTheme.FIRST_BACKGROUND_COLOR
      : background_COLOR = darkTheme.FIRST_BACKGROUND_COLOR;
  }
  {
    theme.mode === "light" ?
      text_COLOR = lightTheme.SECOND_TEXT_COLOR
      : text_COLOR = darkTheme.SECOND_TEXT_COLOR;
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          width: "100%",
          backgroundColor: background_COLOR
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            marginTop: 50,
            textAlign: "center",
            color: text_COLOR
          }}
        >
          There's no thing at all {"\n"}
          User's recipes will be display at here.
        </Text>
      </View>
    </View>
  );
};

export default RecipeFriendScreen;

const styles_light = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
  },
});

const styles_dark = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
  },
});
