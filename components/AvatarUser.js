import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import color from '../contains/color'

const AvatarUser = (props) => {
    return (
        <View style={styles.avatarFrame}>
            <Image
                style={styles.avatarImage}
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
        width: 110,
        height: 110,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.background,
        borderRadius: 120,
        position: 'absolute',
        marginTop: 200
    },
    avatarImage: {
        width: 90,
        height: 90,
        borderRadius: 150,
    },
})