import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import color from '../../../contains/color'
import { FontAwesome } from '@expo/vector-icons'

const MoreSettingScreen = ({ navigation }) => {

    navigation.setOptions({
        title: 'More Settings',
    })

    const eventDisableAccount = () => {
        Alert.alert("Disable Account !", "Are you sure you want to lock your account !?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            {
                text: "YES",
                onPress: () => null,
            }
        ]);
        return true;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Account</Text>
            <Text style={styles.descriptionText}>
                This means that your account has been locked.
                After you do it, you will not be able to log in to your account until the admin unlocks you.
            </Text>
            <TouchableOpacity onPress={eventDisableAccount}>
                <View style={styles.optionMore}>
                    <FontAwesome name='ban' size={23} color={color.errorColor}></FontAwesome>
                    <Text style={styles.optionText}>Disable Account</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default MoreSettingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
    },
    optionMore: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        width: '100%'
    },
    titleText: {
        fontFamily: 'Roboto',
        color: color.textBlack,
        fontSize: 19,
        fontWeight: 'bold',
        marginLeft: 20
    },
    descriptionText: {
        marginHorizontal: 20,
        fontFamily: 'Roboto',
        color: color.textIconSmall,
        marginVertical: 5
    },
    optionText: {
        color: color.errorColor,
        marginLeft: 30,
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'bold'
    }
})