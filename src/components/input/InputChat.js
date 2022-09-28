import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import color from "../../assets/color/color";
import { useSelector } from "react-redux";

const InputChat = (props) => {
  const currentChat = useSelector((state) => state.chat.currentChat);
  const [payload, setPayload] = useState("");

  const handleTextChange = (text) => {
    setPayload(text);
  };

  const handleSendMessage = () => {
    setPayload("");
    props.createMessage({
        content: payload,
        chat: currentChat._id,
        type: "TEXT"
    });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          style={{
            backgroundColor: color.inputColor,
            // marginBottom: 20,
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 20,
            width: "77%",
            fontFamily: "Roboto",
            fontSize: 14,
          }}
          placeholder="Write message ..."
          multiline={true}
          value={payload}
          onChangeText={handleTextChange}
        />
        <TouchableOpacity>
          <Ionicons
            style={styles.sendIcon}
            name="images"
            size={24}
            color={color.iconGreen}
          ></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSendMessage}>
          <Ionicons
            style={styles.sendIcon}
            name="send"
            size={24}
            color={color.primary}
          ></Ionicons>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
    borderTopWidth: 2,
    borderTopColor: color.inputColor,
  },
  sendIcon: {
    marginTop: 10,
  },
  nameReplyView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 5,
    alignItems: "center",
  },
});
