import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const RectangleItem = (props) => {
  return (
    <TouchableOpacity style={styles.cateContainer}>
      <View style={styles.container}>
        <Image
          style={styles.imageRectangleItem}
          source={{
            uri: props.imageRectangle,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default RectangleItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 3,
    width: 120,
    height: 170,
    borderRadius: 10,
  },
  imageRectangleItem: {
    width: 120,
    height: 170,
    borderRadius: 10,
  },
});
