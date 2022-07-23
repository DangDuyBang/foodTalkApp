import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import color from "../../assets/color/color";
import { Ionicons } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import useEditProfile from "./hooks/useEditProfile";
import { useSelector } from "react-redux";
import { lightTheme, darkTheme } from "../../assets/color/Theme"

const EditProfileScreen = ({ navigation }) => {
  const theme = useSelector((state) => state.theme.theme);

  let styles;
  {
    theme.mode === "light" ?
      styles = styles_light
      : styles = styles_dark;
  }

  let text_COLOR;
  {
    theme.mode === "light" ?
      text_COLOR = lightTheme.SECOND_TEXT_COLOR
      : text_COLOR = darkTheme.SECOND_TEXT_COLOR;
  }

  const {
    uriCover,
    uriAvatar,
    openCoverImagePickerAsync,
    payload,
    onFirstNameChange,
    onLastNameChange,
    onUsernameChange,
    onAboutChange,
    onChangeProfile,
  } = useEditProfile({ navigation });

  navigation.setOptions({
    title: "Update Profile",
    headerRight: () => (
      <TouchableOpacity style={{ marginRight: 16 }} onPress={onChangeProfile}>
        <Ionicons
          name="checkmark-sharp"
          size={35}
          color={color.primary}
        ></Ionicons>
      </TouchableOpacity>
    ),
  });
  const [isAvatar, setIsAvatar] = useState(true);

  const changeCover = () => {
    bs.current.snapTo(0);
    setIsAvatar(false);
  };

  const changeAvatar = () => {
    bs.current.snapTo(0);
    setIsAvatar(true);
  };

  const currentUser = useSelector((state) => state.user.currentUser.data);

  const renderInner = () => (
    <View style={styles.panel}>
      <View
        onPress={() => bs.current.snapTo(1)}
        style={{ alignItems: "center" }}
      >
        <View
          style={{
            height: 4,
            width: 65,
            borderRadius: 100,
            backgroundColor: color.textIconSmall,
            marginTop: 15,
          }}
        />
        <Text
          onPress={() => bs.current.snapTo(1)}
          style={{
            fontFamily: "Roboto",
            fontSize: 22,
            fontWeight: "bold",
            color: text_COLOR,
            marginBottom: 10,
          }}
        >
          Upload Photo
        </Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          openCoverImagePickerAsync(true, bs.current.snapTo(1), isAvatar)
        }
      >
        <View style={styles.frameOptionSetting}>
          <Text style={styles.optionSetting}>Take Photo</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          openCoverImagePickerAsync(false, bs.current.snapTo(1), isAvatar)
        }
      >
        <View style={styles.frameOptionSetting}>
          <Text style={styles.optionSetting}>Choose From Library</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => bs.current.snapTo(1)}>
        <View style={styles.frameOptionSetting}>
          <Text style={styles.optionSetting}>Cancel</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle}></View>
      </View>
    </View>
  );

  const bs = React.createRef();
  const fall = new Animated.Value(1);
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={["31%", -300]}
        borderRadius={10}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View
        style={{
          margin: 0,
          opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
          marginBottom: 60,
        }}
      >
        <ScrollView>
          <View style={styles.mid}>
            <View style={styles.imageFrame}>
              <View style={styles.coverFrame}>
                <TouchableOpacity onPress={changeCover}>
                  {!uriCover ? (
                    <View
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Image
                        style={styles.coverImage}
                        resizeMode="cover"
                        source={{
                          uri: currentUser.cover_url,
                        }}
                      />
                      <Ionicons
                        style={{ position: "absolute" }}
                        name="camera-outline"
                        size={30}
                        color={color.textGray}
                      ></Ionicons>
                    </View>
                  ) : (
                    <View
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Image
                        style={styles.coverImage}
                        resizeMode="cover"
                        source={uriCover}
                      />
                      {/* <Ionicons style={{ position: 'absolute' }} name='camera-outline' size={30} color={color.textGray}></Ionicons> */}
                    </View>
                  )}
                </TouchableOpacity>
              </View>

              <View style={styles.avatarFrame}>
                <TouchableOpacity onPress={changeAvatar}>
                  {!uriAvatar ? (
                    <View
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Image
                        style={styles.avatarImage}
                        resizeMode="stretch"
                        source={{
                          uri: currentUser.avatar_url,
                        }}
                      />
                      <Ionicons
                        style={{ position: "absolute" }}
                        name="camera-outline"
                        size={25}
                        color={color.textGray}
                      ></Ionicons>
                    </View>
                  ) : (
                    <View
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Image
                        style={styles.avatarImage}
                        resizeMode='contain'
                        source={uriAvatar}
                      />
                      {/* <Ionicons style={{ position: 'absolute' }} name='camera-outline' size={25} color={color.textGray}></Ionicons> */}
                    </View>
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.infomationView}>
              <View style={styles.infoOptionView}>
                <Text style={styles.inforOptions}>First Name</Text>
                <TextInput
                  maxLength={25}
                  style={styles.inputInfo}
                  value={payload.first_name}
                  onChangeText={onFirstNameChange}
                  selectTextOnFocus={true}
                />
              </View>
              <View style={styles.infoOptionView}>
                <Text style={styles.inforOptions}>Last Name</Text>
                <TextInput
                  maxLength={10}
                  style={styles.inputInfo}
                  value={payload.last_name}
                  selectTextOnFocus={true}
                  onChangeText={onLastNameChange}
                />
              </View>
              <View style={styles.infoOptionView}>
                <Text style={styles.inforOptions}>Username</Text>
                <TextInput
                  maxLength={15}
                  style={styles.inputInfo}
                  value={payload.username}
                  onChangeText={onUsernameChange}
                  selectTextOnFocus={true}
                />
              </View>
              <View style={styles.infoOptionView}>
                <Text style={styles.inforOptions}>Email</Text>
                <TextInput
                  style={styles.inputInfo}
                  editable={false}
                  placeholder={currentUser.email}
                  placeholderTextColor={darkTheme.HIDE_ICON_COLOR}
                />
              </View>
              <View style={styles.infoOptionView}>
                <Text style={styles.inforOptions}>About</Text>
                <TextInput
                  maxLength={150}
                  style={styles.inputInfo}
                  multiline={true}
                  value={payload.about}
                  selectTextOnFocus={true}
                  onChangeText={onAboutChange}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

export default EditProfileScreen;

const styles_light = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
  },
  topView: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 7,
    paddingHorizontal: 15,
  },
  topLeftView: {
    flexDirection: "row",
    alignItems: "center",
  },
  topText: {
    fontFamily: "Roboto",
    fontSize: 22,
    fontWeight: "bold",
    color: lightTheme.SECOND_TEXT_COLOR,
    marginLeft: 15,
  },
  mid: {
    marginTop: 5,
  },
  imageFrame: {
    alignItems: "center",
    paddingBottom: 30,
  },
  coverFrame: {
    width: 420,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  coverImage: {
    width: 420,
    height: 250,
  },
  avatarFrame: {
    width: 110,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
    borderRadius: 200,
    position: "absolute",
    marginTop: 200,
  },
  avatarImage: {
    width: 110,
    height: 110,
    borderRadius: 200,
  },
  infomationView: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  infoOptionView: {
    marginBottom: 10,
  },
  inforOptions: {
    fontFamily: "Roboto",
    color: lightTheme.SECOND_TEXT_COLOR,
    fontWeight: "bold",
    fontSize: 18,
  },
  inputInfo: {
    borderBottomWidth: 0.2,
    paddingVertical: 5,
    fontSize: 16,
    paddingHorizontal: 10,
    textAlignVertical: "top",
    color: lightTheme.SECOND_TEXT_COLOR,
    borderColor: lightTheme.LINE_COLOR
  },
  panel: {
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
  },
  optionSetting: {
    fontFamily: "Roboto",
    fontSize: 16,
    marginLeft: 5,
    color: lightTheme.SECOND_TEXT_COLOR,
    fontWeight: "900",
  },
  frameOptionSetting: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginHorizontal: 20,
    marginTop: 10,
    paddingVertical: 15,
    borderRadius: 15,
    backgroundColor: lightTheme.SECOND_BACKGROUND_COLOR,
  },
});

const styles_dark = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
  },
  topView: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 7,
    paddingHorizontal: 15,
  },
  topLeftView: {
    flexDirection: "row",
    alignItems: "center",
  },
  topText: {
    fontFamily: "Roboto",
    fontSize: 22,
    fontWeight: "bold",
    color: darkTheme.SECOND_TEXT_COLOR,
    marginLeft: 15,
  },
  mid: {
    marginTop: 5,
  },
  imageFrame: {
    alignItems: "center",
    paddingBottom: 30,
  },
  coverFrame: {
    width: 420,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  coverImage: {
    width: 420,
    height: 250,
  },
  avatarFrame: {
    width: 110,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
    borderRadius: 200,
    position: "absolute",
    marginTop: 200,
  },
  avatarImage: {
    width: 110,
    height: 110,
    borderRadius: 200,
  },
  infomationView: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  infoOptionView: {
    marginBottom: 10,
  },
  inforOptions: {
    fontFamily: "Roboto",
    color: darkTheme.SECOND_TEXT_COLOR,
    fontWeight: "bold",
    fontSize: 18,
  },
  inputInfo: {
    borderBottomWidth: 0.2,
    paddingVertical: 5,
    fontSize: 16,
    paddingHorizontal: 10,
    textAlignVertical: "top",
    color: darkTheme.SECOND_TEXT_COLOR,
    borderColor: darkTheme.LINE_COLOR
  },
  panel: {
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
  },
  optionSetting: {
    fontFamily: "Roboto",
    fontSize: 16,
    marginLeft: 5,
    color: darkTheme.SECOND_TEXT_COLOR,
    fontWeight: "900",
  },
  frameOptionSetting: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginHorizontal: 20,
    marginTop: 10,
    paddingVertical: 15,
    borderRadius: 15,
    backgroundColor: darkTheme.SECOND_BACKGROUND_COLOR,
  },
});
