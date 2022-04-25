import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import InputText from '../../components/InputText'
import useSignIn from './hooks/useSignIn'
import color from '../../contains/color'
import { FontAwesome } from '@expo/vector-icons'
import SubmitNoLogo from '../../components/SubmitNoLogo'

const ForgotPasswordScreen = ({ navigation }) => {

    const {
        loading,
        error,
        handleLoginUser,
        handlePasswordChange,
        handleEmailChange,
    } = useSignIn()

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <InputText inputIcon='mail' inputName='Type Email to Reset' setNameText={handleEmailChange} />
                <SubmitNoLogo nameButton='RESET PASSWORD' colorView={color.primary} colorName={color.background} />
            </View>
        </View>
    )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
    },
    top: {
        flexDirection: 'row',
        marginTop: 30,
        borderBottomWidth: 2,
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center',
        borderBottomColor: color.inputColor,

    },
    iconArrow: {
        marginRight: 15,
        color: color.textGray,
    },
    topText: {
        fontSize: 20,
        fontFamily: 'Roboto',
        color: color.textGray
    },
    body: {
        marginTop: 10,
        alignItems: 'center'
    }
})