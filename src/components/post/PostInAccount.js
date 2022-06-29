import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import color from "../../assets/color/color";
import Navigators from "../../navigators/navigators/Navigators";
const WIDTH = Dimensions.get("window").width;

const PostInAccount = (props) => {
  const { navigateToDetailPost } = Navigators();
  const handlePress = () => {
    navigateToDetailPost(props.post);
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Image
          style={styles.imagePostInAccount}
          source={{
            uri: props.post.photos[0],
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default PostInAccount;

const styles = StyleSheet.create({
  container: {
    width: WIDTH / 3,
    height: WIDTH / 3,
    backgroundColor: color.textIconSmall,
    justifyContent: "center",
    alignItems: "center",
  },
  imagePostInAccount: {
    width: "100%",
    height: "100%",
  },
});
