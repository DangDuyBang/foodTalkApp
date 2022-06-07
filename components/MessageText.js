import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import color from '../contains/color'

const MessageText = (props) => {

    return (
        <View style={[styles.container, { flexDirection: props.flexDirection }]}>
            <View style={[styles.avatarFrame, { display: props.display }]}>
                <Image
                    style={styles.avatarUserChat}
                    resizeMode='cover'
                    source={{
                        uri: 'https://i.pinimg.com/564x/20/ea/60/20ea60a9af3b1a7a4b754fd61688aba5.jpg',
                    }}
                />
            </View>
            <View style={{
                maxWidth: '60%',
                flexDirection: props.flexDirection,
            }}>
                <View style={styles.messageFrame}>
                    <Text style={styles.messageSend}>{props.messageSend}</Text>
                </View>
                <Text style={styles.timeSend}>{props.timeSend}</Text>
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