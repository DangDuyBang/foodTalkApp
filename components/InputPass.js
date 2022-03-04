import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import color from '../contains/color'

const InputPass = (props) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={20} 
            style={styles.container}
        >
            <Entypo
                name={props.inputIconLeft}
                size={20}
                style={styles.iconLeftStyle}
            ></Entypo>
            <TextInput
                style={styles.inputStyle}
                placeholder={props.inputName}
                secureTextEntry={true}
            />
            <Entypo
                name={props.inputIconRight}
                size={20}
                style={styles.iconRightStyle}
            ></Entypo>
        </KeyboardAvoidingView>
    )
}

export default InputPass

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginHorizontal: 30,
        backgroundColor: color.inputColor,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 25,
        marginBottom: 15,
        alignItems: 'center',
    },
    iconLeftStyle: {
        color: color.textIconSmall,
        marginRight: 10,
    },
    inputStyle: {
        width: '80%',
        fontSize: 16,
    },
    iconRightStyle: {
        color: color.textGray,
        width: '10%'
    },
})