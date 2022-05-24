import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../contains/color'
import AvatarUser from './AvatarUser'
import { FontAwesome } from '@expo/vector-icons'
import moment from 'moment'

const UserReaction = (props) => {
    return (
        <TouchableOpacity>
            <View style={styles.container} >
                <View style={styles.avatarAndName}>
                    <AvatarUser
                        sizeImage={50}
                        profile={props.reaction}
                    />

                    {/* <Text style={{ color: color.errorColor, fontSize: 12, position: 'absolute', left: 35, top: 30 }}>❤</Text> */}

                    <View style={styles.textContain}>
                        <Text style={styles.chatFullname}>{props.reaction.username}</Text>
                        <Text style={styles.chatUsername}>{props.reaction.first_name} {props.reaction.last_name}</Text>
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