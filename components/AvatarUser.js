import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import color from '../contains/color'

const AvatarUser = (props) => {

    return (
        <View style={[
            styles.avatarFrame,
            { height: props.sizeFrame },
            { width: props.sizeFrame },
            { position: props.position },
            { marginTop: props.marginTop }
        ]}>
            <Image
                style={[styles.avatarImage, { height: props.sizeImage }, { width: props.sizeImage }]}
                resizeMode='cover'
                source={{
                    // uri: currentUser.avatar_url,
                    uri: props.avatar_url,
                }}
            />
        </View>
    )
}

export default AvatarUser

const styles = StyleSheet.create({
    avatarFrame: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.post,
        borderRadius: 120,
    },
    avatarImage: {
        borderRadius: 150,
    },
})