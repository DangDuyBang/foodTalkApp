import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import color from '../contains/color'
import moment from 'moment'
import AvatarUser from '../components/AvatarUser'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setCurrentPost } from '../redux/postReducer'
import { seenNotification } from '../redux/uiReducer'
import { seenNoti } from '../services/UserServices'

const NotifyPreview = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const handlePress = async () => {
        if (props.data.notify_type === 'POST') {
            dispatch(setCurrentPost(props.data.post_data))
            navigation.navigate('DetailedPost')
        }
        if (!props.data.is_seen) {
            dispatch(seenNotification(props.data._id))
            await seenNoti(props.data._id).then(res => console.log(res.data.message)).catch(err => {
                if (err.response) {
                    console.log(err.response.data.error);
                }
            })
        }
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={props.data.is_seen ? styles.container : [styles.container, { backgroundColor: color.post }]} >
                <View style={styles.avatarAndName}>
                    <AvatarUser
                        sizeImage={50}
                        profile={props.data.author}
                    />

                    {/* <View style={styles.AvatarFrame}>
                        <Image
                            style={styles.tinyAvatar}
                            source={{
                                uri: props.data.author.avatar_url ? props.data.author.avatar_url : "",
                            }}
                        />
                    </View> */}
                    <View style={styles.textContain}>
                        <View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Text style={styles.Username}>{props.data.author.username}</Text>
                                <Text style={[
                                    styles.timeNotify,
                                ]}>
                                    {moment(props.data.created_at).fromNow()}
                                </Text>
                            </View>
                        </View>
                        <Text style={[
                            styles.notificationType,
                        ]}
                            numberOfLines={1}
                        >
                            {props.data.content}.
                        </Text>

                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default NotifyPreview

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
    AvatarFrame: {
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
    Username: {
        color: color.textBlack,
        fontWeight: 'bold',
        fontSize: 17,
    },
    notificationType: {
        color: color.textIconSmall,
        fontFamily: 'Roboto',
        fontSize: 16,
    },
    tinyAvatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    timeNotify: {
        fontFamily: 'Roboto',
        fontSize: 14,
        color: color.textIconSmall,
        marginLeft: 16,
    },
})