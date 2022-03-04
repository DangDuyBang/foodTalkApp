import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import color from '../../contains/color'
import InputText from '../../components/InputText'
import InputPass from '../../components/InputPass'
import SubmitNoLogo from '../../components/SubmitNoLogo'
import SubmitLogo from '../../components/SubmitLogo'

const SignInScreen = ({ navigation }) => {

  const eventSignIn = () => {
    navigation.navigate('HomePage')
  }
  const eventSignUp = () => {
    navigation.navigate('SignUp')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          //source={require('../../contains//assetImages//background_signIn.jpg')}
          style={styles.logo}
          resizeMode='contain'
          source={{
            uri: 'https://i.pinimg.com/564x/84/23/1b/84231b3f5ae082664d9161aec06bfc1b.jpg',
          }}
        />
      </View>
      <ScrollView>
        <View style={styles.footer}>
          <Image
            source={require('../../contains//assetImages//logoIcon_foodtalk.png')}
            style={styles.logoIcon}
            resizeMode='stretch'
          />

          <Text style={styles.tittle}>TALK - SHARE FOOD WITH</Text>
          <Text style={[styles.tittle, { marginBottom: 15 }]}>WITH EVERYONE</Text>

          <Text style={styles.intro}>When you want to eat, go to the kitchen with “FOOD TALK” to enjoy the food by yourself and share it with everyone.</Text>

          <InputText inputIcon='mail' inputName='Email' />
          <InputPass inputIconLeft='lock' inputName='Password'/>
          <SubmitNoLogo eventButton={eventSignIn} nameButton='SIGN IN' colorView={color.background} colorName={color.textGray} widthBorder={2} colorBorder={color.textIconSmall} />

          <View style={styles.lineView}>
            <View style={styles.lineFirst}></View>
            <Text style={styles.lineText}> or </Text>
            <View style={styles.lineSecond}></View>
          </View>

          <SubmitLogo eventButton={eventSignIn} nameButton='SIGN IN WITH GOOGLE' colorView={color.primary} colorName={color.background} />

          <TouchableOpacity onPress={eventSignUp}>
            <Text style={{ marginTop: 10, fontFamily: 'Roboto', color: color.textIconSmall, fontWeight: 'bold'}}>New Account ?</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>

    </View>
  )
}

export default SignInScreen

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: color.background,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: height - 200,
    width: height * 1.28,
  },
  logoIcon: {
    height: 71 * 1.2,
    width: 98 * 1.2,
    marginTop: 25 ,
  },
  footer: {
    flex: 5,
    backgroundColor: color.background,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
    width: '100%',
  },
  tittle: {
    color: color.textGray,
    fontSize: 23,
    fontFamily: 'Roboto'
  },
  intro: {
    marginHorizontal: 15,
    color: color.textIconSmall,
    fontFamily: 'Roboto',
    marginBottom: 15,
    textAlign: 'center'
  },
  lineView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  lineFirst: {
    width: '38%',
    height: 1,
    backgroundColor: color.textIconSmall
  },
  lineText: {
    fontSize: 15,
    color: color.textIconSmall,
  },
  lineSecond: {
    width: '38%',
    height: 1,
    backgroundColor: color.textIconSmall,
  }
})