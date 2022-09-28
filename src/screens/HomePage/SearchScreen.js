import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import color from "../../assets/color/color";
import InputSearch from "../../components/input/InputSearch";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import RecipePreview from "../../components/recipe/RecipePreview";
import uuid from "react-native-uuid";
import Navigators from "../../navigators/navigators/Navigators";
import { lightTheme, darkTheme } from "../../assets/color/Theme";

const SearchScreen = ({ navigation }) => {
  const theme = useSelector((state) => state.theme.theme);

  const styles = theme.mode === "light" ? styles_light : styles_dark;

  const usersSearch = useSelector((state) => state.user.searchUser);
  const foodsSearch = useSelector((state) => state.food.searchFoods);

  const background_COLOR =
    theme.mode === "light"
      ? lightTheme.FIRST_BACKGROUND_COLOR
      : darkTheme.FIRST_BACKGROUND_COLOR;
      
  const text_COLOR =
    theme.mode === "light"
      ? lightTheme.SECOND_TEXT_COLOR
      : darkTheme.SECOND_TEXT_COLOR;

  const { navigateToAccount, navigateToAccountFriend } = Navigators();

  useEffect(() => {
    navigation.setOptions({
      title: "",
      header: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: background_COLOR,
            paddingTop: 10,
            paddingRight: 80,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign
              style={styles.iconLeft}
              name="arrowleft"
              size={26}
              color={text_COLOR}
            ></AntDesign>
          </TouchableOpacity>

          <View>
            <InputSearch
              autoFocus={true}
              inputIcon="search"
              inputName="Search"
              search={true}
            />
          </View>
        </View>
      ),
    });
  }, []);

  const Users = ({ user }) => {
    const currentUser = useSelector((state) => state.user.currentUser);
    const handlePress = () => {
      if (user._id === currentUser._id) {
        navigateToAccount();
      } else {
        navigateToAccountFriend(user);
      }
      //dispatch(setselectedUser(props.user))
    };
    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.userContainer}>
          <View style={styles.users}>
            <View style={styles.avatarFrame}>
              <Image
                style={styles.avatarImage}
                resizeMode="cover"
                source={{
                  // uri: currentUser.avatar_url,
                  uri: user.avatar_url,
                }}
              />
            </View>
            <View style={styles.nameUserView}>
              <Text numberOfLines={1} style={styles.nameUserText}>
                {user.username}
              </Text>

              <Text numberOfLines={1} style={styles.textModePost}>
                {user.first_name} {user.last_name}
              </Text>
            </View>
          </View>

          <View style={styles.rateStarView}>
            <Text style={styles.markText}>
              {user.is_current ? "Online" : "Offline"}
            </Text>
            {/* <FontAwesome name='star' size={20} color={color.starColor}></FontAwesome> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {usersSearch &&
        usersSearch.rows.map((user) => <Users user={user} key={uuid.v4()} />)}
      {foodsSearch &&
        foodsSearch.rows.map((food) => (
          <RecipePreview data={food} key={uuid.v4()} />
        ))}
    </View>
  );
};

export default SearchScreen;

const styles_light = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
    paddingTop: 15,
  },
  userContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  users: {
    flexDirection: "row",
    marginBottom: 10,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  iconLeft: {
    marginHorizontal: 15,
  },
  infoPostUser: {
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
  },
  avatarFrame: {
    width: 57,
    height: 57,
    borderRadius: 100,
    backgroundColor: lightTheme.SECOND_BACKGROUND_COLOR,
    marginRight: 15,
  },
  avatarImage: {
    width: 57,
    height: 57,
    borderRadius: 150,
  },
  nameUserView: {},
  nameUserText: {
    fontFamily: "Roboto",
    fontSize: 17,
    color: lightTheme.SECOND_TEXT_COLOR,
    fontWeight: "bold",
    marginBottom: 3,
  },
  textModePost: {
    fontFamily: "Roboto",
    color: lightTheme.THIRD_TEXT_COLOR,
    fontSize: 11,
  },
  rateStarView: {
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 30,
    flexDirection: "row",
  },
  markText: {
    fontFamily: "Roboto",
    fontSize: 13,
    color: lightTheme.THIRD_TEXT_COLOR,
    marginRight: 5,
  },
});

const styles_dark = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
    paddingTop: 15,
  },
  userContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  users: {
    flexDirection: "row",
    marginBottom: 10,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  iconLeft: {
    marginHorizontal: 15,
  },
  infoPostUser: {
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
  },
  avatarFrame: {
    width: 57,
    height: 57,
    borderRadius: 100,
    backgroundColor: darkTheme.SECOND_BACKGROUND_COLOR,
    marginRight: 15,
  },
  avatarImage: {
    width: 57,
    height: 57,
    borderRadius: 150,
  },
  nameUserView: {},
  nameUserText: {
    fontFamily: "Roboto",
    fontSize: 17,
    color: darkTheme.SECOND_TEXT_COLOR,
    fontWeight: "bold",
    marginBottom: 3,
  },
  textModePost: {
    fontFamily: "Roboto",
    color: darkTheme.THIRD_TEXT_COLOR,
    fontSize: 11,
  },
  rateStarView: {
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 30,
    flexDirection: "row",
  },
  markText: {
    fontFamily: "Roboto",
    fontSize: 13,
    color: darkTheme.THIRD_TEXT_COLOR,
    marginRight: 5,
  },
});
