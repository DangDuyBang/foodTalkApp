import { StyleSheet, View, SafeAreaView } from 'react-native'
import React from 'react'
import InputSearch from '../../../components/InputSearch'
import color from '../../../contains/color'
import User from '../../../components/User'
import InfinityScrollView from '../../../components/InfinityScrollView'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentChat } from '../../../redux/chatReducer'
import { useNavigation } from '@react-navigation/native'
import { createChatRoom } from '../../../services/ChatServices'
import uuid from 'react-native-uuid';

const UserList = () => {
    const followers = useSelector(state => state.user.currentUser.data.following)
    const chats = useSelector(state => state.chat.chats)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const fetchChatRoom = (user) => {
        const index = chats.indexOf(i => i.user_1._id === user._id || i.user_2._id === user._id)
        if (index != -1) {
            dispatch(setCurrentChat(chats[index]))
            navigation.navigate('DetailChat')
        } else {
            createChatRoom(user._id).then(res => {
                dispatch(setCurrentChat(res.data.room))
                navigation.navigate('DetailChat')
            }).catch(err => {
                if (err.response) {
                    console.log(err.response.data.error);
                }
            })
        }
    }

    return (
        <View style={styles.container}>
            <View style={{
                marginHorizontal: 15
            }}>
                <InputSearch inputIcon='search' inputName='Search' widthSearch={'100%'} />
            </View>

            <SafeAreaView style={{ flex: 1 }}>
                <InfinityScrollView>
                    {followers && followers.map((user) => <User key={uuid.v4()} fetchChatRoom={fetchChatRoom} data={user}></User>)}
                </InfinityScrollView>
            </SafeAreaView>
        </View>
    )
}

export default UserList

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