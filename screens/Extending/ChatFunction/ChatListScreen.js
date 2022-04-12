import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import color from '../../../contains/color'
import ChatPreview from '../../../components/ChatPreview'
import InputSearch from '../../../components/InputSearch'

const data = [
    {
        id: '1',
        chatAvatar: 'https://i.pinimg.com/564x/35/e9/f7/35e9f7e7b6ce436d9360d3d7e7b50c92.jpg',
        nameUser: 'Dang Duy Bang',
        chatRecently: "How much is it? How much is it? How much is it? How much is it?",
        chatTime: '23:01 Today',
        Seen: false,
        Online: true
    },
    {
        id: '2',
        chatAvatar: 'https://i.pinimg.com/564x/49/b6/79/49b6799e28e25824a8936b818d442481.jpg',
        nameUser: "Dinh Minh Thuy",
        chatRecently: "Can you revew this product? How much is it? How much is it? How much is it?",
        chatTime: "12:26 Today",
        Seen: true,
        Online: false
    },
    {
        id: '3',
        chatAvatar: 'https://i.pinimg.com/564x/c4/83/37/c4833719551572707eb614d06f6082e9.jpg',
        nameUser: "Dinh Thi Bao Chau",
        chatRecently: "Yeah, I agree with you",
        chatTime: "07:11 Today",
        Seen: false,
        Online: false
    },
    {
        id: '4',
        chatAvatar: 'https://growdiaries.com/static/users/photo/43497/6df5165b9e43c97d7aa77abfe5fa56d1_450.jpg',
        nameUser: "Doraemon",
        chatRecently: "Hello, I have a question for you.How much is it? How much is it? How much is it?",
        chatTime: "17:26 Tue",
        Seen: false,
        Online: true
    },
    {
        id: '5',
        chatAvatar: 'https://i.pinimg.com/564x/7f/fe/43/7ffe43bdb745f58931f01284710d1cc9.jpg',
        nameUser: "Dang Tram Anh",
        chatRecently: "It's too expensive",
        chatTime: "12:26 Mon",
        Seen: true,
        Online: false
    },
    {
        id: '6',
        chatAvatar: 'https://gamek.mediacdn.vn/133514250583805952/2020/5/15/photo-1-15895160830411798901207.jpg',
        nameUser: "Nobi Nobita",
        chatRecently: "What is it?",
        chatTime: "22:26 Sun",
        colorHigh: 'black',
        Seen: true,
        Online: true
    }, // Dot
]

const ChatListScreen = ({ navigation }) => {

    const [lists, setLists] = useState(data)

    const deleteItem = index => {
        const arr = [...lists];
        arr.splice(index, 1);
        setLists(arr);
    }

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Ionicons name='arrow-back' size={35} color={color.textGray}></Ionicons>
                </TouchableOpacity>
                <Text style={styles.topText}>Chat</Text>
            </View>
            <InputSearch inputIcon='search' inputName='Search' widthSearch={380} />
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    data={lists}
                    renderItem={({ item, index }) => {
                        return <ChatPreview data={item} deleteChatEvent={() => deleteItem(index)} />
                    }}
                />
            </SafeAreaView>
        </View>
    )
}

export default ChatListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        paddingTop: 35,
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