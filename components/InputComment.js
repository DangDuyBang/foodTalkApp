import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../contains/color'
import { FontAwesome } from '@expo/vector-icons'

const InputComment = () => {
    return (
        <View style={styles.container}>
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
    )
}

export default InputComment

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    sendIcon: {
        marginTop: 12,
    }
})