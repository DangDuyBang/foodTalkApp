import { StyleSheet, Text, View } from "react-native";
import React from "react";
import color from "../../assets/color/color";
import LottieView from "lottie-react-native";

const LoadingScreen = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <Text
        style={{
          fontSize: 20,
          color: color.primary,
          marginBottom: -90,
        }}
      >
        LOADING...
      </Text>
      <LottieView
        source={require("../../assets/lottie/loading-animation.json")}
        autoPlay
        loop
        style={{
          width: 230,
          height: 230,
        }}
      />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 1,
  },
});
