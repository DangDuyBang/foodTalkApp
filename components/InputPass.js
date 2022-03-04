import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons'
import color from '../contains/color'

const InputPass = (props) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
    })

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
            check_textInputChange: false
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

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
                style={[styles.inputStyle]}
                placeholder={props.inputName}
                secureTextEntry={data.secureTextEntry ? true : false}
                onChangeText={(val) => handlePasswordChange(val)}
            />

            <TouchableOpacity
                onPress={updateSecureTextEntry}
            >
                {data.secureTextEntry ?
                <Entypo
                    name='eye-with-line'
                    size={20}
                    style={styles.iconRightStyle}
                ></Entypo>
                :
                <Entypo
                    name='eye'
                    size={20}
                    style={styles.iconRightStyle}
                ></Entypo>
                }
            </TouchableOpacity>

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
        width: '100%'
    },
})