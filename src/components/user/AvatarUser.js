import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import color from "../../assets/color/color";
import { useSelector } from "react-redux";
import Navigators from "../../navigators/navigators/Navigators";

const AvatarUser = (props) => {
  const { navigateToAccount, navigateToAccountFriend } = Navigators();
  const currentUser = useSelector((state) => state.user.currentUser);

  const handlePress = () => {
    if (props.profile._id === currentUser._id) {
      navigateToAccount();
    } else {
      navigateToAccountFriend(props.profile);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.avatarFrame,
          { height: props.sizeFrame },
          { width: props.sizeFrame },
          { position: props.position },
          { marginTop: props.marginTop },
          { marginLeft: props.marginLeft },
        ]}
      >
        <Image
          style={[
            styles.avatarImage,
            { height: props.sizeImage },
            { width: props.sizeImage },
          ]}
          resizeMode="cover"
          source={{
            // uri: currentUser.avatar_url,
            uri: props.profile.avatar_url,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default AvatarUser;

const styles = StyleSheet.create({
  avatarFrame: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.post,
    borderRadius: 120,
  },
  avatarImage: {
    borderRadius: 150,
  },
});
