import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../contains/color'
import AvatarUser from './AvatarUser'
import { FontAwesome } from '@expo/vector-icons'

const UserReaction = () => {
    return (
        <TouchableOpacity>
            <View style={styles.container} >
                <View style={styles.avatarAndName}>
                    <AvatarUser
                        sizeImage={50}
                        profile={'https://i.pinimg.com/564x/20/ea/60/20ea60a9af3b1a7a4b754fd61688aba5.jpg'}
                    />

                    <Text style={{ color: color.errorColor, fontSize: 12, position: 'absolute', left: 35, top: 30 }}>❤</Text>

                    <View style={styles.textContain}>
                        <Text style={styles.chatFullname}>Nguyen Nhut Tan</Text>
                        <Text style={styles.chatUsername}>nntan_food</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default UserReaction

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        width: '80  %',
        borderBottomWidth: 0.2,
    },
    chatFullname: {
        fontFamily: 'Roboto',
        color: color.textBlack,
        fontWeight: 'bold',
        fontSize: 17,
    },
    chatUsername: {
        fontFamily: 'Roboto',
        color: color.textIconSmall,
        fontSize: 12,
    },
    tinyAvatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
})