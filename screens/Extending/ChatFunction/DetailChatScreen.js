import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import color from '../../../contains/color'
import { FontAwesome } from '@expo/vector-icons'
import InputChat from '../../../components/InputChat'

const DetailChatScreen = ({ navigation }) => {
    navigation.setOptions({
        headerTitle: () => (
            <View style={styles.userChatView}>
                <View style={styles.avatarFrame}>
                    <Image
                        style={styles.avatarUserChat}
                        source={{
                            uri: 'https://i.pinimg.com/564x/35/e9/f7/35e9f7e7b6ce436d9360d3d7e7b50c92.jpg',
                        }}
                    />
                </View>
                <View style={styles.nameAndTimeViewUserChat}>
                    <Text style={styles.nameUserChat}>Dang Duy Bang</Text>
                    <Text style={styles.timeOnline}>Online</Text>
                </View>
            </View>
        ),
    })
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.bodyView}>

                </View>
            </ScrollView>

            <View style={styles.sendMessageView}>
                <InputChat />
            </View>
        </View>
    )
}

export default DetailChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
    },
    topView: {
        flexDirection: 'row',
        marginTop: 30,
        borderBottomWidth: 2,
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center',
        borderBottomColor: color.inputColor,
    },
    iconArrow: {
        marginRight: 15,
        color: color.textGray,
    },
    topText: {
        fontSize: 20,
        fontFamily: 'Roboto',
        color: color.textGray
    },
    userChatView: {
        flexDirection: 'row'
    },
    avatarFrame: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: color.textGray,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarUserChat: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    nameAndTimeViewUserChat: {

    },
    nameUserChat: {
        fontFamily: 'Roboto',
        color: color.textGray,
        fontWeight: 'bold',
        fontSize: 16
    },
    timeOnline: {
        fontFamily: 'Roboto',
        color: color.textIconSmall,
        fontSize: 12,
    },
    bodyView: {
        paddingHorizontal: 20
    },
    sendMessageView: {

    }
})