import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import color from "../../assets/color/color";
import { lightTheme, darkTheme } from "../../assets/color/Theme"
import { useSelector } from "react-redux";

const ProcessShow = (props) => {
  const theme = useSelector((state) => state.theme.theme);

  let styles;
  {
    theme.mode === "light" ?
      styles = styles_light
      : styles = styles_dark;
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View style={styles.numberView}>
          <Text style={styles.indexNumber}>{props.indexNumber}</Text>
          <Text style={styles.indexNumber}>. </Text>
        </View>
        <Text style={styles.stepProcess}>{props.step}</Text>
      </View>
      <TouchableOpacity onPress={props.onDeleteProcess}>
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 35,
            color: color.errorColor,
          }}
        >
          -
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProcessShow;

const styles_light = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 5,
    alignItems: "center",
    paddingRight: 15,
  },
  numberView: {
    flexDirection: "row",
  },
  indexNumber: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: lightTheme.SECOND_TEXT_COLOR
  },
  stepProcess: {
    fontFamily: "Roboto",
    flexWrap: "wrap",
    color: lightTheme.SECOND_TEXT_COLOR,
    marginRight: 10,
    fontSize: 16,
    width: "90%",
  },
});

const styles_dark = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 5,
    alignItems: "center",
    paddingRight: 15,
  },
  numberView: {
    flexDirection: "row",
  },
  indexNumber: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: darkTheme.SECOND_TEXT_COLOR
  },
  stepProcess: {
    fontFamily: "Roboto",
    flexWrap: "wrap",
    color: darkTheme.SECOND_TEXT_COLOR,
    marginRight: 10,
    fontSize: 16,
    width: "90%",
  },
});
