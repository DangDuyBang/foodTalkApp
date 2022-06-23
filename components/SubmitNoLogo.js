import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import color from "../contains/color";

const SubmitNoLogo = (props) => {
  return (
    <TouchableOpacity onPress={!props.loading ? props.eventButton : null}>
      <View
        style={[
          styles.containerButton,
          { borderWidth: props.widthBorder },
          { borderColor: props.colorBorder },
        ]}
        backgroundColor={props.colorView}
      >
        {props.loading ? (
          <ActivityIndicator color="blue" />
        ) : (
          <Text style={[styles.nameStyle, { color: props.colorName }]}>
            {props.nameButton}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SubmitNoLogo;

const styles = StyleSheet.create({
  containerButton: {
    marginHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    width: 340,
    height: 50,
    borderRadius: 50,
  },
  nameStyle: {
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Roboto",
  },
});
