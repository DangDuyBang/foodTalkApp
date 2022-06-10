import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../contains/color'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUserProfile } from '../redux/userReducer'

const AvatarUser = (props) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const currentUser = useSelector(state => state.user.currentUser.data)

    const handlePress = () => {
        if (props.profile._id === currentUser._id) {
            navigation.navigate('Account')
        } else {
            navigation.navigate('PersonalPage')
            dispatch(setSelectedUserProfile(props.profile))
        }
        //dispatch(setSelectedUserProfile(props.user))
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={[
                styles.avatarFrame,
                { height: props.sizeFrame },
                { width: props.sizeFrame },
                { position: props.position },
                { marginTop: props.marginTop }, { marginLeft: props.marginLeft }
            ]}>
                <Image
                    style={[styles.avatarImage, { height: props.sizeImage }, { width: props.sizeImage }]}
                    resizeMode='cover'
                    source={{
                        // uri: currentUser.avatar_url,
                        uri: props.profile.avatar_url,
                    }}
                />
            </View>
        </TouchableOpacity>
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