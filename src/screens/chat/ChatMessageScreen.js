import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import color from "../../assets/color/color";
import InputChat from "../../components/input/InputChat";
import { useDispatch, useSelector } from "react-redux";
import { removeMessages, setMessages } from "../../redux/reducers/chatReducer";
import InfinityScrollView from "../../components/view/InfinityScrollView";
import MessageText from "../../components/chat/MessageText";
import useChatServices from "../../services/ChatServices";
import moment from "moment";
import uuid from "react-native-uuid";

const ChatMessageScreen = ({ navigation }) => {
  const currentChat = useSelector((state) => state.chat.currentChat);
  const messages = useSelector((state) => state.chat.messages);
  const currentUser = useSelector((state) => state.user.currentUser);

  const { setMessage, fetchMessage, createMessage } = useChatServices();
  const dispatch = useDispatch();

  const useLoads = () => {
    if (messages.rows.length >= messages.count) return;
    fetchMessage(currentChat._id, messages.currentPage, 50);
  };

  const user = () => {
    if (currentChat.user_1._id === currentUser._id) return currentChat.user_2;
    else return currentChat.user_1;
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.userChatView}>
          <View style={styles.avatarFrame}>
            <Image
              style={styles.avatarUserChat}
              source={{
                uri: user().avatar_url,
              }}
            />
          </View>
          <View style={styles.nameAndTimeViewUserChat}>
            <Text style={styles.nameUserChat}>{user().username}</Text>
            <Text style={styles.timeOnline}>
              {moment(user().last_login).fromNow()}
            </Text>
          </View>
        </View>
      ),
    });

    if (messages.rows.length === 0) setMessage(currentChat._id, 50);

    return () => {
      dispatch(removeMessages());
    };
  }, []);

  return (
    <View style={styles.container}>
      <InfinityScrollView
        scrollEnd={true}
        reverse={true}
        useLoadReverse={() => useLoads()}
      >
        {messages.rows &&
          messages.rows
            .slice(0)
            .reverse()
            .map((message) => (
              <MessageText message={message} key={uuid.v4()} />
            ))}
      </InfinityScrollView>
      <View style={styles.sendMessageView}>
        <InputChat createMessage={createMessage} />
      </View>
    </View>
  );
};

export default ChatMessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
  topView: {
    flexDirection: "row",
    marginTop: 30,
    borderBottomWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    borderBottomColor: color.inputColor,
  },
  iconArrow: {
    marginRight: 15,
    color: color.textGray,
  },
  topText: {
    fontSize: 20,
    fontFamily: "Roboto",
    color: color.textGray,
  },
  userChatView: {
    flexDirection: "row",
  },
  avatarFrame: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: color.textGray,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarUserChat: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  nameAndTimeViewUserChat: {},
  nameUserChat: {
    fontFamily: "Roboto",
    color: color.textGray,
    fontWeight: "bold",
    fontSize: 16,
  },
  timeOnline: {
    fontFamily: "Roboto",
    color: color.textIconSmall,
    fontSize: 12,
  },
  bodyView: {
    // paddingHorizontal: 20
  },
  sendMessageView: {},
});
