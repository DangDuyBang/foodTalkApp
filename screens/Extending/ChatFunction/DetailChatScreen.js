import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import color from '../../../contains/color'
import { FontAwesome } from '@expo/vector-icons'
import InputChat from '../../../components/InputChat'
import { useDispatch, useSelector } from 'react-redux'
import useFetchChat from './hooks/useFetchChat'
import { removeMessages } from '../../../redux/chatReducer'
import InfinityScrollView from '../../../components/InfinityScrollView'
import MessageText from '../../../components/MessageText'
import useChatAction from './hooks/useChatAction'

const DetailChatScreen = ({ navigation, route }) => {
    const currentChat = useSelector(state => state.chat.currentChat)
    const messages = useSelector(state => state.chat.messages)
    const dispatch = useDispatch()

    const { fetchMessages } = useFetchChat()
    const { createMessage } = useChatAction()

    useEffect(() => {
        fetchMessages(currentChat._id)

        return () => {
            dispatch(removeMessages())
        }
    }, [])


    navigation.setOptions({
        headerTitle: () => (
            <View style={styles.userChatView}>
                <View style={styles.avatarFrame}>
                    <Image
                        style={styles.avatarUserChat}
                        source={{
                            uri: currentChat.user_1.avatar_url,
                        }}
                    />
                </View>
                <View style={styles.nameAndTimeViewUserChat}>
                    <Text style={styles.nameUserChat}>{currentChat.user_1.username}</Text>
                    <Text style={styles.timeOnline}>{currentChat.user_1.is_current}</Text>
                </View>
            </View>
        ),
    })
    return (
        <View style={styles.container}>
            <InfinityScrollView reverse = {true} useLoadReverse={() => fetchMessages(currentChat._id)}>
                <View style={styles.bodyView}>
                    {messages && messages.slice(0).reverse().map((message, index) => <MessageText message={message} key={index} />)}
                </View>
            </InfinityScrollView>

            <View style={styles.sendMessageView}>
                <InputChat createMessage={createMessage} />
            </View>
        </View>
    )
}

export default DetailChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
    },
    topView: {
        flexDirection: 'row',
        marginTop: 30,
        borderBottomWidth: 2,
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center',
        borderBottomColor: color.inputColor,
    },
    iconArrow: {
        marginRight: 15,
        color: color.textGray,
    },
    topText: {
        fontSize: 20,
        fontFamily: 'Roboto',
        color: color.textGray
    },
    userChatView: {
        flexDirection: 'row'
    },
    avatarFrame: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: color.textGray,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarUserChat: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    nameAndTimeViewUserChat: {

    },
    nameUserChat: {
        fontFamily: 'Roboto',
        color: color.textGray,
        fontWeight: 'bold',
        fontSize: 16
    },
    timeOnline: {
        fontFamily: 'Roboto',
        color: color.textIconSmall,
        fontSize: 12,
    },
    bodyView: {
        paddingHorizontal: 20
    },
    sendMessageView: {

    }
})