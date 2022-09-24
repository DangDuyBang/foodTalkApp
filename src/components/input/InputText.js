import { StyleSheet, View, TextInput, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import color from '../../assets/color/color'

const InputText = (props) => {

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={20}
            style={styles.container}
        >
            <Entypo
                name={props.inputIcon}
                size={20}
                style={styles.iconStyle}
            ></Entypo>
            <TextInput
                keyboardType='email-address'
                style={styles.inputStyle}
                placeholderTextColor={color.textIconSmall}
                placeholder={props.inputName}
                onChangeText={props.setNameText}
            />
        </KeyboardAvoidingView>
    )
}

export default InputText

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: color.inputColor,
        paddingHorizontal: 25,
        marginHorizontal: 30,
        //paddingVertical: 10,
        borderRadius: 25,
        marginBottom: 10,
        height: 45
    },
    iconStyle: {
        color: color.textIconSmall,
        marginRight: 10,
    },
    inputStyle: {
        width: '90%',
        fontSize: 16,
    },
    errorEmail: {
        color: color.errorColor,
        marginLeft: 27,
    }
})