import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import color from '../contains/color'
import moment from 'moment'
import { useSelector } from 'react-redux'

const MessageText = (props) => {
    const currentUser = useSelector(state => state.user.currentUser.data)

    const isCurrentUser = () => {
        return props.message.author._id === currentUser._id
    }

    return (
        <View style={[styles.container, { flexDirection: isCurrentUser ? 'row-reverse' : 'row' }]}>
            <View style={isCurrentUser ? { display: 'none' } : styles.avatarFrame}>
                <Image
                    style={styles.avatarUserChat}
                    resizeMode='cover'
                    source={{
                        uri: props.message.author.avatar_url,
                    }}
                />
            </View>
            <View style={{
                maxWidth: '60%',
                flexDirection: isCurrentUser ? 'row-reverse' : 'row',
            }}>
                <View style={styles.messageFrame}>
                    <Text style={styles.messageSend}>{props.message.content}</Text>
                </View>
                <Text style={styles.timeSend}>{moment(props.message.created_at).fromNow()}</Text>
            </View>
        </View>
    )
}

export default MessageText

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        //alignItems: 'flex-end',
        marginBottom: 18
    },
    messageFrame: {
        backgroundColor: color.post,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
    },
    messageSend: {

    },
    timeSend: {
        fontSize: 10,
        marginHorizontal: 5,
        textAlignVertical: 'bottom'
    },
    avatarFrame: {
        width: 33,
        height: 33,
        borderRadius: 33,
        backgroundColor: color.textGray,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarUserChat: {
        width: 33,
        height: 33,
        borderRadius: 33,
    },
})