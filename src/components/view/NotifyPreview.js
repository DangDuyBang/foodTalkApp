import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import color from "../../assets/color/color";
import moment from "moment";
import AvatarUser from "../../components/user/AvatarUser";
import { useDispatch, useSelector } from "react-redux";
import { seenNotification } from "../../redux/reducers/uiReducer";
import UserServices from "../../services/UserServices";
import Navigators from "../../navigators/navigators/Navigators";
import { lightTheme, darkTheme } from "../../assets/color/Theme"

const NotifyPreview = (props) => {
  const theme = useSelector((state) => state.theme.theme);

  const styles = theme.mode === "light" ? styles_light : styles_dark;
  const {seenNoti} = UserServices()

  const dispatch = useDispatch();

  const { navigateToDetailPost, navigateToDetailRecipe } = Navigators();
  const handlePress = () => {
    if (props.data.type === "POST") {
      navigateToDetailPost(props.data.post_data);
    }

    if(props.data.type === "FOOD") {
      navigateToDetailRecipe(props.data.food_data)
    }
    if (!props.data.is_seen) {
      dispatch(seenNotification(props.data._id));
      seenNoti(props.data._id)
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={
          props.data.is_seen
            ? styles.container
            : [styles.container, { backgroundColor: color.post }]
        }
      >
        <View style={styles.avatarAndName}>
          <AvatarUser sizeImage={50} profile={props.data.author} />
          <View style={styles.textContain}>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.Username}>
                  {props.data.author.username}
                </Text>
                <Text style={[styles.timeNotify]}>
                  {moment(props.data.created_at).fromNow()}
                </Text>
              </View>
            </View>
            <Text style={[styles.notificationType]} numberOfLines={1}>
              {props.data.content}.
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NotifyPreview;

const styles_light = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatarAndName: {
    flexDirection: "row",
  },
  AvatarFrame: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  textContain: {
    marginLeft: 10,
    justifyContent: "center",
  },
  Username: {
    color: lightTheme.SECOND_TEXT_COLOR,
    fontWeight: "bold",
    fontSize: 17,
  },
  notificationType: {
    color: color.textIconSmall,
    fontFamily: "Roboto",
    fontSize: 16,
  },
  tinyAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  timeNotify: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: color.textIconSmall,
    marginLeft: 16,
  },
});

const styles_dark = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatarAndName: {
    flexDirection: "row",
  },
  AvatarFrame: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  textContain: {
    marginLeft: 10,
    justifyContent: "center",
  },
  Username: {
    color: darkTheme.SECOND_TEXT_COLOR,
    fontWeight: "bold",
    fontSize: 17,
  },
  notificationType: {
    color: color.textIconSmall,
    fontFamily: "Roboto",
    fontSize: 16,
  },
  tinyAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  timeNotify: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: color.textIconSmall,
    marginLeft: 16,
  },
});
