import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import color from '../../../contains/color'
import ChatPreview from '../../../components/ChatPreview'
import InputSearch from '../../../components/InputSearch'

const ChatListScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
                    <Ionicons name='arrow-back' size={35} color={color.textGray}></Ionicons>
                </TouchableOpacity>
                <Text style={styles.topText}>Chat</Text>
            </View>
            <InputSearch inputIcon='search' inputName='Search' widthSearch={380} />
            <ScrollView>
                <View style={styles.body}>
                    <ChatPreview
                        chatAvatar='https://i.pinimg.com/564x/80/5a/bc/805abceef60e44441973971436765310.jpg'
                        nameUser="Dang Duy Bang"
                        chatRecently="How much is it?"
                        chatTime="23:01 Today"
                        colorHigh='gray'
                    />
                    <ChatPreview
                        chatAvatar='https://i.pinimg.com/564x/49/b6/79/49b6799e28e25824a8936b818d442481.jpg'
                        nameUser="Dinh Minh Thuy"
                        chatRecently="Can you revew this product?"
                        chatTime="12:26 Today"
                        colorHigh='gray'
                    />
                    <ChatPreview
                        chatAvatar='https://i.pinimg.com/564x/c4/83/37/c4833719551572707eb614d06f6082e9.jpg'
                        nameUser="Dinh Thi Bao Chau"
                        chatRecently="Yeah, I agree with you"
                        chatTime="07:11 Today"
                        colorHigh='gray'
                    />
                    <ChatPreview
                        chatAvatar='https://growdiaries.com/static/users/photo/43497/6df5165b9e43c97d7aa77abfe5fa56d1_450.jpg'
                        nameUser="Doraemon"
                        chatRecently="Hello, I have a question for you."
                        chatTime="17:26 Tue"
                        colorHigh='black'
                        bold='bold'
                    />
                    <ChatPreview
                        chatAvatar='https://i.pinimg.com/564x/7f/fe/43/7ffe43bdb745f58931f01284710d1cc9.jpg'
                        nameUser="Dang Tram Anh"
                        chatRecently="It's too expensive"
                        chatTime="12:26 Mon"
                        colorHigh='gray'
                    />
                    <ChatPreview
                        chatAvatar='https://gamek.mediacdn.vn/133514250583805952/2020/5/15/photo-1-15895160830411798901207.jpg'
                        nameUser="Nobi Nobita"
                        chatRecently="What is it?"
                        chatTime="22:26 Sun"
                        colorHigh='black'
                        bold='bold'
                    />
                    <ChatPreview
                        chatAvatar='https://i.pinimg.com/564x/80/5a/bc/805abceef60e44441973971436765310.jpg'
                        nameUser="Dang Duy Bang"
                        chatRecently="How much is it?"
                        chatTime="23:01 Today"
                        colorHigh='gray'
                    />
                    <ChatPreview
                        chatAvatar='https://i.pinimg.com/564x/49/b6/79/49b6799e28e25824a8936b818d442481.jpg'
                        nameUser="Dinh Minh Thuy"
                        chatRecently="Can you revew this product?"
                        chatTime="12:26 Today"
                        colorHigh='gray'
                    />
                    <ChatPreview
                        chatAvatar='https://i.pinimg.com/564x/c4/83/37/c4833719551572707eb614d06f6082e9.jpg'
                        nameUser="Dinh Thi Bao Chau"
                        chatRecently="Yeah, I agree with you"
                        chatTime="07:11 Today"
                        colorHigh='gray'
                    />
                    <ChatPreview
                        chatAvatar='https://growdiaries.com/static/users/photo/43497/6df5165b9e43c97d7aa77abfe5fa56d1_450.jpg'
                        nameUser="Doraemon"
                        chatRecently="Hello, I have a question for you."
                        chatTime="17:26 Tue"
                        colorHigh='black'
                        bold='bold'
                    />
                    <ChatPreview
                        chatAvatar='https://i.pinimg.com/564x/7f/fe/43/7ffe43bdb745f58931f01284710d1cc9.jpg'
                        nameUser="Dang Tram Anh"
                        chatRecently="It's too expensive"
                        chatTime="12:26 Mon"
                        colorHigh='gray'
                    />
                    <ChatPreview
                        chatAvatar='https://gamek.mediacdn.vn/133514250583805952/2020/5/15/photo-1-15895160830411798901207.jpg'
                        nameUser="Nobi Nobita"
                        chatRecently="What is it?"
                        chatTime="22:26 Sun"
                        colorHigh='black'
                        bold='bold'
                    />
                    <ChatPreview
                        chatAvatar='https://i.pinimg.com/564x/80/5a/bc/805abceef60e44441973971436765310.jpg'
                        nameUser="Dang Duy Bang"
                        chatRecently="How much is it?"
                        chatTime="23:01 Today"
                        colorHigh='gray'
                    />
                    <ChatPreview
                        chatAvatar='https://i.pinimg.com/564x/49/b6/79/49b6799e28e25824a8936b818d442481.jpg'
                        nameUser="Dinh Minh Thuy"
                        chatRecently="Can you revew this product?"
                        chatTime="12:26 Today"
                        colorHigh='gray'
                    />
                    <ChatPreview
                        chatAvatar='https://i.pinimg.com/564x/c4/83/37/c4833719551572707eb614d06f6082e9.jpg'
                        nameUser="Dinh Thi Bao Chau"
                        chatRecently="Yeah, I agree with you"
                        chatTime="07:11 Today"
                        colorHigh='gray'
                    />
                    <ChatPreview
                        chatAvatar='https://growdiaries.com/static/users/photo/43497/6df5165b9e43c97d7aa77abfe5fa56d1_450.jpg'
                        nameUser="Doraemon"
                        chatRecently="Hello, I have a question for you."
                        chatTime="17:26 Tue"
                        colorHigh='black'
                        bold='bold'
                    />
                    <ChatPreview
                        chatAvatar='https://i.pinimg.com/564x/7f/fe/43/7ffe43bdb745f58931f01284710d1cc9.jpg'
                        nameUser="Dang Tram Anh"
                        chatRecently="It's too expensive"
                        chatTime="12:26 Mon"
                        colorHigh='gray'
                    />
                    <ChatPreview
                        chatAvatar='https://gamek.mediacdn.vn/133514250583805952/2020/5/15/photo-1-15895160830411798901207.jpg'
                        nameUser="Nobi Nobita"
                        chatRecently="What is it?"
                        chatTime="22:26 Sun"
                        colorHigh='black'
                        bold='bold'
                    />
                    <ChatPreview
                        chatAvatar='https://i.pinimg.com/564x/80/5a/bc/805abceef60e44441973971436765310.jpg'
                        nameUser="Dang Duy Bang"
                        chatRecently="How much is it?"
                        chatTime="23:01 Today"
                        colorHigh='gray'
                    />
                    <ChatPreview
                        chatAvatar='https://i.pinimg.com/564x/49/b6/79/49b6799e28e25824a8936b818d442481.jpg'
                        nameUser="Dinh Minh Thuy"
                        chatRecently="Can you revew this product?"
                        chatTime="12:26 Today"
                        colorHigh='gray'
                    />
                    <ChatPreview
                        chatAvatar='https://i.pinimg.com/564x/c4/83/37/c4833719551572707eb614d06f6082e9.jpg'
                        nameUser="Dinh Thi Bao Chau"
                        chatRecently="Yeah, I agree with you"
                        chatTime="07:11 Today"
                        colorHigh='gray'
                    />
                    <ChatPreview
                        chatAvatar='https://growdiaries.com/static/users/photo/43497/6df5165b9e43c97d7aa77abfe5fa56d1_450.jpg'
                        nameUser="Doraemon"
                        chatRecently="Hello, I have a question for you."
                        chatTime="17:26 Tue"
                        colorHigh='black'
                        bold='bold'
                    />
                    <ChatPreview
                        chatAvatar='https://i.pinimg.com/564x/7f/fe/43/7ffe43bdb745f58931f01284710d1cc9.jpg'
                        nameUser="Dang Tram Anh"
                        chatRecently="It's too expensive"
                        chatTime="12:26 Mon"
                        colorHigh='gray'
                    />
                    <ChatPreview
                        chatAvatar='https://gamek.mediacdn.vn/133514250583805952/2020/5/15/photo-1-15895160830411798901207.jpg'
                        nameUser="Nobi Nobita"
                        chatRecently="What is it?"
                        chatTime="22:26 Sun"
                        colorHigh='black'
                        bold='bold'
                    />
                    <ChatPreview
                        chatAvatar='https://i.pinimg.com/564x/80/5a/bc/805abceef60e44441973971436765310.jpg'
                        nameUser="Dang Duy Bang"
                        chatRecently="How much is it?"
                        chatTime="23:01 Today"
                        colorHigh='gray'
                    />
                    <ChatPreview
                        chatAvatar='https://i.pinimg.com/564x/49/b6/79/49b6799e28e25824a8936b818d442481.jpg'
                        nameUser="Dinh Minh Thuy"
                        chatRecently="Can you revew this product?"
                        chatTime="12:26 Today"
                        colorHigh='gray'
                    />
                    <ChatPreview
                        chatAvatar='https://i.pinimg.com/564x/c4/83/37/c4833719551572707eb614d06f6082e9.jpg'
                        nameUser="Dinh Thi Bao Chau"
                        chatRecently="Yeah, I agree with you"
                        chatTime="07:11 Today"
                        colorHigh='gray'
                    />
                    <ChatPreview
                        chatAvatar='https://growdiaries.com/static/users/photo/43497/6df5165b9e43c97d7aa77abfe5fa56d1_450.jpg'
                        nameUser="Doraemon"
                        chatRecently="Hello, I have a question for you."
                        chatTime="17:26 Tue"
                        colorHigh='black'
                        bold='bold'
                    />
                    <ChatPreview
                        chatAvatar='https://i.pinimg.com/564x/7f/fe/43/7ffe43bdb745f58931f01284710d1cc9.jpg'
                        nameUser="Dang Tram Anh"
                        chatRecently="It's too expensive"
                        chatTime="12:26 Mon"
                        colorHigh='gray'
                    />
                    <ChatPreview
                        chatAvatar='https://gamek.mediacdn.vn/133514250583805952/2020/5/15/photo-1-15895160830411798901207.jpg'
                        nameUser="Nobi Nobita"
                        chatRecently="What is it?"
                        chatTime="22:26 Sun"
                        colorHigh='black'
                        bold='bold'
                    />
                </View>
            </ScrollView>
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