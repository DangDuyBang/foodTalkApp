import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const SubmitLogo = (props) => {
  return (
    <TouchableOpacity onPress={props.eventButton}>
      <View style={styles.containerButton} backgroundColor={props.colorView}>
        <Image
          style={styles.logo}
          resizeMode="stretch"
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_960_720.png",
          }}
        />
        <Text style={[styles.nameStyle, { color: props.colorName }]}>
          {props.nameButton}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SubmitLogo;

const styles = StyleSheet.create({
  containerButton: {
    marginHorizontal: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    width: 340,
    height: 50,
    borderRadius: 50,
    flexDirection: "row",
  },
  logo: {
    width: 28,
    height: 28,
    marginLeft: 22,
  },
  nameStyle: {
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Roboto",
    marginHorizontal: 30,
  },
});
