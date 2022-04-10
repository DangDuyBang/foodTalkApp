import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../contains/color'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

const InputComment = (props) => {
    return (
        <View style={styles.container}>
            <View style={[
                styles.nameReplyView,
                { display: props.displayReply }
                //isReplying ? { display: 'flex' } : { display: 'none' }
            ]}>
                <Text style={{
                    color: color.textGray,
                    fontSize: 14,
                    fontWeight: 'bold'
                }}>
                    Replying {props.nameUserReply}
                </Text>
                <TouchableOpacity onPress={props.onCloseReply}>
                    <Ionicons style={styles.sendIcon} name='close-circle' size={24} color={color.textIconSmall}></Ionicons>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <TextInput
                    style={{
                        backgroundColor: color.inputColor,
                        marginBottom: 20,
                        paddingVertical: 10,
                        paddingHorizontal: 15,
                        borderRadius: 20,
                        width: '90%',
                        fontFamily: 'Roboto',
                        fontSize: 14
                    }}
                    placeholder="Write comment ..."
                />
                <TouchableOpacity>
                    <FontAwesome style={styles.sendIcon} name='send-o' size={26} color={color.primary}></FontAwesome>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default InputComment

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    sendIcon: {
        marginTop: 12,
    },
    nameReplyView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 5,
        alignItems: 'center',
    }
})