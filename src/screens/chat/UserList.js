import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View, SafeAreaView } from "react-native";
import InputSearch from "../../components/input/InputSearch";
import color from "../../assets/color/color";
import User from "../../components/user/User";
import InfinityScrollView from "../../components/view/InfinityScrollView";
import useChatService from "../../services/ChatServices";
import uuid from "react-native-uuid";
import Navigators from "../../navigators/navigators/Navigators";

const UserList = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const userList = [...currentUser.following, ...currentUser.follower];

  const { createChat } = useChatService();

  const chats = useSelector((state) => state.chat.chats);

  const { navigateToDetailChat } = Navigators();

  const fetchChatRoom = (user) => {
    const index = chats.rows.indexOf(
      (i) => i.user_1._id === user._id || i.user_2._id === user._id
    );
    if (index !== -1) {
      navigateToDetailChat(chats.rows[index]);
    } else {
      createChat(user._id)
        .then((res) => navigateToDetailChat(res.data))
        .catch((err) => {
          if (err.response) {
            console.log(err.response.data.error);
          }
        });
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          marginHorizontal: 15,
        }}
      >
        <InputSearch
          inputIcon="search"
          inputName="Search"
          widthSearch={"100%"}
        />
      </View>

      <SafeAreaView style={{ flex: 1 }}>
        <InfinityScrollView>
          {userList &&
            userList.map((user) => (
              <User
                key={uuid.v4()}
                fetchChatRoom={fetchChatRoom}
                data={user}
              ></User>
            ))}
        </InfinityScrollView>
      </SafeAreaView>
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    paddingBottom: 75,
  },
  topView: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 7,
    paddingHorizontal: 15,
  },
  topText: {
    fontFamily: "Roboto",
    fontSize: 22,
    fontWeight: "bold",
    color: color.textGray,
    marginLeft: 15,
  },
});
