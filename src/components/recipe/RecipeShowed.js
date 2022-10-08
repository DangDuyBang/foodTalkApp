import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import color from "../../assets/color/color";
import { lightTheme, darkTheme } from "../../assets/color/Theme";
import { useSelector } from "react-redux";

const RecipeShowed = (props) => {
  const theme = useSelector((state) => state.theme.theme);

  const styles =
    theme.mode === "light" ? (styles = styles_light) : (styles = styles_dark);

  return (
    <TouchableOpacity>
      <View style={styles.infoPostUser}>
        <View style={styles.avatarFrame}>
          <Image
            style={styles.avatarImage}
            resizeMode="cover"
            source={{
              uri: props.food.photo,
            }}
          />
        </View>
        <Text style={styles.nameUserText}>{props.food.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeShowed;

const styles_light = StyleSheet.create({
  infoPostUser: {
    flexDirection: "row",
    marginLeft: 15,
    alignItems: "center",
  },
  avatarFrame: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: color.primary,
    marginRight: 5,
  },
  avatarImage: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  nameUserText: {
    fontFamily: "Roboto",
    fontSize: 13,
    color: lightTheme.SECOND_TEXT_COLOR,
    fontWeight: "bold",
    marginBottom: 3,
  },
  textModePost: {
    fontFamily: "Roboto",
    color: color.textIconSmall,
    fontSize: 11,
  },
});

const styles_dark = StyleSheet.create({
  infoPostUser: {
    flexDirection: "row",
    marginLeft: 15,
    alignItems: "center",
  },
  avatarFrame: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: color.primary,
    marginRight: 5,
  },
  avatarImage: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  nameUserText: {
    fontFamily: "Roboto",
    fontSize: 13,
    color: darkTheme.SECOND_TEXT_COLOR,
    fontWeight: "bold",
    marginBottom: 3,
  },
  textModePost: {
    fontFamily: "Roboto",
    color: color.textIconSmall,
    fontSize: 11,
  },
});
