import { StyleSheet, Text, View } from "react-native";
import React from "react";
import color from "../../assets/color/color";

const TermOfServiceScreen = ({ navigation }) => {
  navigation.setOptions({
    title: "Term of Service",
  });

  return (
    <View style={styles.container}>
      <Text>Term of Service</Text>
    </View>
  );
};

export default TermOfServiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    justifyContent: "center",
    alignItems: "center",
  },
});
