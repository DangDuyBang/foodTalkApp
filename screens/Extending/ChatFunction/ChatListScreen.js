import { StyleSheet, View, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import color from '../../../contains/color'
import ChatPreview from '../../../components/ChatPreview'
import InputSearch from '../../../components/InputSearch'
import { createStackNavigator } from "@react-navigation/stack";
import useFetchChat from './hooks/useFetchChat'
import { useDispatch, useSelector } from 'react-redux'
import InfinityScrollView from '../../../components/InfinityScrollView'
import { setCurrentChat } from '../../../redux/chatReducer'
const Stack = createStackNavigator();

const Chat = () => {

    const { fetchChat } = useFetchChat()
    const dispatch = useDispatch()
    const chats = useSelector(state => state.chat.chats)

    const deleteItem = index => {
        const arr = [...lists];
        arr.splice(index, 1);
        setLists(arr);
    }

    useEffect(() => {
        fetchChat()

        return () => {

        }
    }, [])


    const eventDetailChat = (chat) => {
        navigation.navigate('DetailChat')
        dispatch(setCurrentChat(chat))
    }

    return (
        <View style={styles.container}>
            <View style={{
                marginHorizontal: 15
            }}>
                <InputSearch inputIcon='search' inputName='Search' widthSearch={320} />
            </View>

            <SafeAreaView style={{ flex: 1 }}>
                <InfinityScrollView useLoads={fetchChat}>
                    {chats && chats.map((chat, index) => <ChatPreview data={chat} deleteChatEvent={() => deleteItem(index)} onDetailChat={eventDetailChat} />)}
                </InfinityScrollView>

            </SafeAreaView>
        </View>
    )
}

const ChatListScreen = ({ navigation }) => {

    return (
        <Stack.Navigator>
            <Stack.Screen name='ChatPage' component={Chat} options={{
                title: 'Messages',
            }
            } />
        </Stack.Navigator>
    )
}

export default ChatListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        paddingBottom: 75,
    },
    topView: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 7,
        paddingHorizontal: 15,
    },
    topText: {
        fontFamily: 'Roboto',
        fontSize: 22,
        fontWeight: 'bold',
        color: color.textGray,
        marginLeft: 15
    },
})