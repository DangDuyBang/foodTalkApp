import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import SubmitNoLogo from '../../components/SubmitNoLogo'
import color from '../../contains/color';

const StartScreen = ({ navigation }) => {

    const eventSignIn = () => {
        navigation.navigate('SignIn')
    }

    return (
        <View style={styles.container}>
            <Image
                //source={require('../../contains//assetImages//background_signIn.jpg')}
                style={styles.startBackground}
                resizeMode='contain'
                source={{
                    uri: 'https://i.pinimg.com/564x/5c/4d/d4/5c4dd42c81f93566d840f7e43dbbc2fd.jpg',
                }}
            />
            <Text style={styles.tittle}>Let's          Cooking</Text>
            <SubmitNoLogo eventButton={eventSignIn} nameButton='START' colorView={color.primary} colorName={color.background} />
        </View>
    )
}

export default StartScreen

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 30
    },
    tittle: {
        color: color.background,
        fontSize: 60,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        marginBottom: 50,
        textAlign: 'center'
    },
    startBackground: {
        width: 750,
        height: 850,
        position: 'absolute',
    },
})