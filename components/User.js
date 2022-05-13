import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import color from '../contains/color'
import AvatarUser from '../components/AvatarUser'

const User = (props) => {

    const [isOnline, setIsOnline] = useState(props.data.Online)

    return (
        <TouchableOpacity>
            <View style={styles.container} >
                <View style={styles.avatarAndName}>
                    <AvatarUser
                        sizeImage={50}
                        avatar_url={props.data.chatAvatar}
                    />

                    {/* <View style={styles.chatAvatarFrame}>
                        <Image
                            style={styles.tinyAvatar}
                            source={{
                                uri: props.data.chatAvatar,
                            }}
                        />
                    </View> */}
                    {
                        isOnline ?
                            <Text style={{ color: color.iconGreen, position: 'absolute', left: 35, top: 30 }}>●</Text>
                            :
                            null
                    }
                    <View style={styles.textContain}>
                        <Text style={styles.chatFullname}>{props.data.Fullname}</Text>
                        <Text style={styles.chatUsername}>{props.data.Username}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default User

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