import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import color from "../contains/color";
import RectangleItem from "./RectangleItem";

const ExploreItem = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onExploreFunction}>
        <View style={styles.topTittleView}>
          <View style={styles.leftTittleView}>
            <View style={styles.iconTittleFrame}>
              <Ionicons
                name={props.iconLeft}
                size={28}
                color={color.primary}
              ></Ionicons>
            </View>
            <Text style={styles.tittleText}>{props.tittleLeft}</Text>
          </View>
          <Text style={styles.rightText}>{">"}</Text>
        </View>
      </TouchableOpacity>
      <ScrollView horizontal={true} style={styles.scrollExploreView}>
        <RectangleItem imageRectangle={props.imagesPic1} />
        <RectangleItem imageRectangle={props.imagesPic2} />
        <RectangleItem imageRectangle={props.imagesPic3} />
        <RectangleItem imageRectangle={props.imagesPic4} />
        <RectangleItem imageRectangle={props.imagesPic5} />
        <RectangleItem imageRectangle={props.imagesPic6} />
        <RectangleItem imageRectangle={props.imagesPic7} />
      </ScrollView>
    </View>
  );
};

export default ExploreItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  topTittleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    alignItems: "center",
  },
  leftTittleView: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconTittleFrame: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: color.post,
    justifyContent: "center",
    alignItems: "center",
  },
  tittleText: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: color.textGray,
    fontSize: 18,
    marginLeft: 5,
  },
  rightText: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: color.textGray,
    fontSize: 18,
  },
  scrollExploreView: {
    marginVertical: 20,
    paddingLeft: 15,
  },
});
