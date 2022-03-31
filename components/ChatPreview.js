import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import color from '../contains/color'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Ionicons } from '@expo/vector-icons'

const ChatPreview = (props) => {
    const rightSwipe = () => {
        return (
            <TouchableOpacity onPress={props.deleteChatEvent} activeOpacity={0.5}>
                <View style={styles.deleteBox}>
                    <Ionicons name='trash-outline' size={35} color={color.background} />
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <Swipeable renderRightActions={rightSwipe}>
            <TouchableOpacity>
                <View style={styles.container} >
                    <View style={styles.avatarAndName}>
                        <View style={styles.chatAvatarFrame}>
                            <Image
                                style={styles.tinyAvatar}
                                source={{
                                    uri: props.data.chatAvatar,
                                }}
                            />
                        </View>
                        <Text style={{ color: color.iconGreen, position: 'absolute', left: 35, top: 30 }}>●</Text>
                        <View style={styles.textContain}>
                            <Text style={styles.chatUsername}>{props.data.nameUser}</Text>
                            <Text style={[styles.chatRecently, { color: props.data.colorHigh }, { fontWeight: props.bold }]}
                                numberOfLines={1}>
                                {/* {props.chatRecently.length < 15
                                ? `${props.chatRecently}`
                                : `${props.chatRecently.substring(0, 12)}...`} */}
                                {props.data.chatRecently}</Text>
                        </View>
                    </View>

                    <Text style={[{ color: props.colorHigh }, { fontWeight: props.bold }]}>{props.chatTime}</Text>
                </View>
            </TouchableOpacity>
        </Swipeable>
    )
}

export default ChatPreview

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.2,
    },
    avatarAndName: {
        flexDirection: 'row',
    },
    chatAvatarFrame: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContain: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    chatUsername: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17,
    },
    chatRecently: {
        //color: 'gray',
        width: 220,
    },
    tinyAvatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    deleteBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: '100%',
        backgroundColor: color.errorColor
    }
})