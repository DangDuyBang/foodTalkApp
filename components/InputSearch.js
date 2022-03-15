import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import color from '../contains/color'
import { FontAwesome } from '@expo/vector-icons'

const InputSearch = (props) => {
    return (
        <View style={[styles.container, {width: props.widthSearch}]}>
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
    )
}

export default InputSearch

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginRight: 10,
        marginLeft: 15,
        backgroundColor: color.inputColor,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 25,
        marginVertical: 10,
        alignItems: 'center',
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