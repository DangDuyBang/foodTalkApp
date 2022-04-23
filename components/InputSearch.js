import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import color from '../contains/color'
import { FontAwesome } from '@expo/vector-icons'

const InputSearch = (props) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <FontAwesome
                    name={props.inputIcon}
                    size={20}
                    style={styles.iconStyle}
                ></FontAwesome>
                <TextInput
                    style={styles.inputStyle}
                    placeholder={props.inputName}
                    onChangeText={props.setNameText}
                />
            </View>
        </View>
    )
}

export default InputSearch

const styles = StyleSheet.create({
    wrapper:{
        width: '100%',
        paddingHorizontal: 10,
    },
    container: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: color.inputColor,
        paddingHorizontal: 15,
        // paddingVertical: 10,
        borderRadius: 25,
        // marginVertical: 10,
        alignItems: 'center',
        height: 40,
    },
    iconStyle: {
        color: color.textIconSmall,
        marginRight: 10,
    },
    inputStyle: {
        width: '90%',
        fontSize: 16,
    }
})