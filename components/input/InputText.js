import { StyleSheet, View, TextInput, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import color from '../../contains/color'

const InputText = (props) => {

    return (
        <View style={styles.containerBig}>
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
                    style={styles.inputStyle}
                    placeholder={props.inputName}
                    onChangeText={props.setNameText}
                />
            </KeyboardAvoidingView>


            {/* <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorEmail}>Email was wrong !</Text>
            </Animatable.View> */}

        </View>

    )
}

export default InputText

const styles = StyleSheet.create({
    containerBig: {
        marginHorizontal: 30,
        marginBottom: 15,
    },
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: color.inputColor,
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 25,
        alignItems: 'center',
        marginBottom: 5,
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