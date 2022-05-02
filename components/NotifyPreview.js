import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import color from '../contains/color'

const NotifyPreview = (props) => {
    return (
        <TouchableOpacity>
            <View style={styles.container} >
                <View style={styles.avatarAndName}>
                    <View style={styles.AvatarFrame}>
                        <Image
                            style={styles.tinyAvatar}
                            source={{
                                uri: props.data.avatarActor,
                            }}
                        />
                    </View>
                    <View style={styles.textContain}>
                        <Text style={styles.Username}>{props.data.nameActor}</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                width: '81%'
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                    <Text style={[
                                        styles.notificationType,
                                    ]}
                                        numberOfLines={1}
                                    >
                                        {props.data.notify_typeName}.
                                    </Text>

                                    <Text style={[
                                        styles.timeNotify,
                                    ]}>
                                        {props.data.create_at}
                                    </Text>
                                </View>
                            </View>
                        </View>
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
        fontSize: 14,
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
        marginLeft: 10,
    },
})