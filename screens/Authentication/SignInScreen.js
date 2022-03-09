import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import color from '../../contains/color'
import InputText from '../../components/InputText'
import InputPass from '../../components/InputPass'
import SubmitNoLogo from '../../components/SubmitNoLogo'
import SubmitLogo from '../../components/SubmitLogo'
import * as Animatable from 'react-native-animatable';

const SignInScreen = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const eventSignIn = async () => {
    if (email.length === 0 || password.length === 0) {
      alert("Email or Password should be not empty !")
      return false;
    } else if (password.trim().length < 8) {
      alert('Password must be 8 characters long !')
    } else {
      await fetch('https://dcb-backend-deploy.herokuapp.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          'email': email,
          'password': password
        })
      }).then(res => res.json())
        .then(resData => {
          alert(resData.message);
          if (resData.message != 'Login successfully') {
            alert('Email or Password is wrong');
            return false;
          } else {
            navigation.navigate('HomePage');
          }
        })
    }
  }

  const eventSignInWithGoogle = () => {
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
            uri: 'https://i.pinimg.com/564x/57/da/ba/57daba61aad2b83b6f8ccbfb6168a0f6.jpg',
          }}
        />
      </View>

      <ScrollView>
        <Animatable.View animation="fadeInUp" duration={1000}>
          <View style={styles.footer}>
            <Image
              source={require('../../contains//assetImages//logoIcon_foodtalk.png')}
              style={styles.logoIcon}
              resizeMode='stretch'
            />

            <Text style={styles.tittle}>TALK - SHARE FOOD </Text>
            <Text style={[styles.tittle, { marginBottom: 15 }]}>WITH EVERYONE</Text>

            <Text style={styles.intro}>When you want to eat, go to the kitchen with “FOOD TALK” to enjoy the food by yourself and share it with everyone.</Text>

            <InputText inputIcon='mail' inputName='Email' setNameText={(text) => setEmail(text)} />
            <InputPass inputIconLeft='lock' inputName='Password' setPassText={(text) => setPassword(text)} />
            {password.length >= 1 && password.length <= 8 ? 
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorPassword}>Password must be 8 characters long !</Text>
              </Animatable.View>
              : null
            }
            <SubmitNoLogo eventButton={eventSignIn} nameButton='SIGN IN' colorView={color.background} colorName={color.textGray} widthBorder={2} colorBorder={color.textIconSmall} />

            <View style={styles.lineView}>
              <View style={styles.lineFirst}></View>
              <Text style={styles.lineText}> or </Text>
              <View style={styles.lineSecond}></View>
            </View>

            <SubmitLogo eventButton={eventSignInWithGoogle} nameButton='SIGN IN WITH GOOGLE' colorView={color.primary} colorName={color.background} />

            <TouchableOpacity onPress={eventSignUp}>
              <Text style={{ marginTop: 10, fontFamily: 'Roboto', color: color.textIconSmall, fontWeight: 'bold' }}>New Account ?</Text>
            </TouchableOpacity>

          </View>
        </Animatable.View >
      </ScrollView >
    </View >
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
    marginTop: 25,
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
    fontSize: 26,
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
  },
  errorPassword: {
    color: color.errorColor,
    marginLeft: -30,
    marginTop: -10,
    marginBottom: 10
  }
})