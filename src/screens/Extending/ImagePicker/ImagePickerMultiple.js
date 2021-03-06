import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import * as ImageManipulator from "expo-image-manipulator";
import { ImageBrowser } from "expo-image-picker-multiple";
import { Ionicons } from "@expo/vector-icons";
import color from "../../../assets/color/color";

export default class ImageBrowserScreen extends Component {
  _getHeaderLoader = () => (
    <ActivityIndicator
      size="small"
      color={color.primary}
      style={{ marginRight: 16 }}
    />
  );

  imagesCallback = (callback) => {
    const { navigation, route } = this.props;
    const { onCallBack } = route.params;
    this.props.navigation.setOptions({
      headerRight: () => this._getHeaderLoader(),
    });

    callback
      .then(async (photos) => {
        const cPhotos = [];
        for (let photo of photos) {
          const pPhoto = await this._processImageAsync(photo.uri, {
            format: ImageManipulator.SaveFormat.JPEG,
          });
          cPhotos.push({
            uri: pPhoto.uri,
            name: photo.filename,
            type: "image/jpg",
          });
        }
        onCallBack(cPhotos);
        navigation.goBack();
      })
      .catch((e) => console.log(e));
  };

  async _processImageAsync(uri) {
    const file = await ImageManipulator.manipulateAsync(
      uri
      // [{resize: { width: 1200 , height: 800}}],
    );
    return file;
  }

  _renderDoneButton = (count, onSubmit) => {
    if (!count) return null;
    return (
      <TouchableOpacity style={{ marginRight: 16 }} onPress={onSubmit}>
        <Ionicons
          name="checkmark-sharp"
          size={35}
          color={color.primary}
        ></Ionicons>
      </TouchableOpacity>
    );
  };

  updateHandler = (count, onSubmit) => {
    this.props.navigation.setOptions({
      title: `Selected ${count} files`,
      headerRight: () => this._renderDoneButton(count, onSubmit),
    });
  };

  renderSelectedComponent = (number) => (
    <View style={styles.countBadge}>
      <Text style={styles.countBadgeText}>{number}</Text>
    </View>
  );

  render() {
    const emptyStayComponent = <Text style={styles.emptyStay}>Empty =(</Text>;

    return (
      <View style={[styles.flex, styles.container]}>
        <ImageBrowser
          max={10}
          onChange={this.updateHandler}
          callback={this.imagesCallback}
          renderSelectedComponent={this.renderSelectedComponent}
          emptyStayComponent={emptyStayComponent}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    position: "relative",
  },
  emptyStay: {
    textAlign: "center",
  },
  countBadge: {
    paddingHorizontal: 8.6,
    paddingVertical: 5,
    borderRadius: 50,
    position: "absolute",
    right: 3,
    bottom: 3,
    justifyContent: "center",
    backgroundColor: "#0580FF",
  },
  countBadgeText: {
    fontWeight: "bold",
    alignSelf: "center",
    padding: "auto",
    color: "#ffffff",
  },
});
