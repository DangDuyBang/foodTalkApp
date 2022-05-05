import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import color from '../contains/color'

const Shortcut = (props) => {
    return (
        <TouchableOpacity onPress={props.onFunction}>
            <View style={styles.container}>
                <MaterialCommunityIcons name={props.iconShortcut} size={20} color={props.iconColor}></MaterialCommunityIcons>
                <Text style={styles.nameShortcut}>{props.nameShortcut}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Shortcut

const styles = StyleSheet.create({
    container: {
        marginRight: 7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderWidth: 0.2,
        marginBottom: 10,
        marginLeft: 2
    },
    nameShortcut: {
        fontFamily: 'Roboto',
        fontSize: 14,
        marginLeft: 5,
        fontWeight: 'bold',
        color: color.textGray
    }
})