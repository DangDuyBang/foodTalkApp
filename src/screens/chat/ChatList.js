import { StyleSheet, View, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import color from "../../assets/color/color";
import ChatPreview from "../../components/chat/ChatPreview";
import InputSearch from "../../components/input/InputSearch";
import { useSelector } from "react-redux";
import InfinityScrollView from "../../components/view/InfinityScrollView";
import uuid from "react-native-uuid";
import Navigators from "../../navigators/navigators/Navigators";
import useChatService from "../../services/ChatServices"

const Chat = () => {
  const chats = useSelector((state) => state.chat.chats);
  const { navigateToDetailChat } = Navigators();
  const { fetchChat, setChats } = useChatService()

  const deleteItem = (index) => {
    const arr = [...lists];
    arr.splice(index, 1);
    setLists(arr);
  };

  const useLoads = () => {
    if (chats.rows.length >= chats.count) return;
    fetchChat(chats.currentPage, 20)
  };

  useEffect(() => {
    if(chats.rows.length === 0) setChats()
  }, []);

  const eventDetailChat = (chat) => {
    navigateToDetailChat(chat);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          marginHorizontal: 15,
        }}
      >
        <InputSearch inputIcon="search" inputName="Search" widthSearch={320} />
      </View>

      <SafeAreaView style={{ flex: 1 }}>
        <InfinityScrollView useLoads={useLoads}>
          {chats.rows &&
            chats.rows.map((chat, index) => (
              <ChatPreview
                data={chat}
                key={uuid.v4()}
                deleteChatEvent={() => deleteItem(index)}
                onDetailChat={eventDetailChat}
              />
            ))}
        </InfinityScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Chat;

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
