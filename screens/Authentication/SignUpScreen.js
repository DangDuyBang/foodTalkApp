import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import color from '../../contains/color'
import InputText from '../../components/InputText'
import InputPass from '../../components/InputPass'
import SubmitNoLogo from '../../components/SubmitNoLogo'
import { CheckBox } from 'react-native-elements'
import useSignup from './hooks/useSignup'
import LottieView from 'lottie-react-native'

const HEIGHT = Dimensions.get('window').height;
const SignUpScreen = ({ navigation }) => {
  const { loading, error, uri, checked, handleCheckedChange, handleUsernameChange, handleFirstNameChange, handleLastNameChange, handleEmailChange, handlePasswordChange, handleConfirmPasswordChange, handleConfirm, openImagePickerAsync } = useSignup({ navigation })

  console.log(error);

  return (
    <View style={styles.container}>
      <ScrollView>

        <View style={{
          alignItems: 'center',
          marginBottom: 15
        }}>
          <LottieView
            source={require('../../assets/lottie/cooking_signup.json')}
            autoPlay loop
            style={{
              width: 210,
              height: 210,
            }}
          />
        </View>

        <View style={styles.body}>
          {/* <TouchableOpacity onPress={() => openImagePickerAsync(false)}>
            <View style={styles.avatarFrame}>
              {uri ? <Image style={styles.avatar} source={uri} /> :
                <FontAwesome
                  name="camera"
                  size={20}
                  style={styles.iconCamera}
                ></FontAwesome>}
            </View>
          </TouchableOpacity> */}

          <InputText inputIcon='user' inputName='Username' setNameText={handleUsernameChange} />
          <InputText inputIcon='pencil' inputName='First Name' setNameText={handleFirstNameChange} />
          <InputText inputIcon='pencil' inputName='Last Name' setNameText={handleLastNameChange} />
          <InputText inputIcon='mail' inputName='Email' setNameText={handleEmailChange} />
          <InputPass inputIconLeft='lock' inputName='Password' setPassText={handlePasswordChange} />
          <InputPass inputIconLeft='lock' inputName='Confirm Password' setPassText={handleConfirmPasswordChange} />

        </View>

        <View style={styles.bot}>
          <View style={styles.checkBox}>
            <CheckBox
              checked={checked}
              onPress={handleCheckedChange}
              style={styles.checkBoxView}
            />
            <Text style={{ color: color.textGray }}>I agree to App's </Text>
            <TouchableOpacity>
              <Text style={{ color: color.textBlue, fontWeight: 'bold' }}>Privacy Policy </Text>
            </TouchableOpacity>
            <Text style={{ color: color.textGray }}>and </Text>
          </View>
          <TouchableOpacity>
            <Text style={{ color: color.textBlue, fontWeight: 'bold', marginBottom: 10 }}>Terms of service </Text>
          </TouchableOpacity>
          <SubmitNoLogo nameButton='SIGN UP' colorView={color.primary} colorName={color.background} eventButton={handleConfirm} loading={loading} />
        </View>
      </ScrollView>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: HEIGHT,
    backgroundColor: color.background,
    alignItems: 'center',
    justifyContent: 'center',
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
    alignItems: 'center',
  },
  tittle: {
    marginTop: 10,
    fontFamily: 'Roboto',
    fontSize: 24,
    color: color.textGray,
  },
  avatarFrame: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: color.inputColor,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: color.primary,
    borderWidth: 1,
  },
  avatar: {
    height: '100%',
    width: '100%',
    borderRadius: 60
  },
  iconCamera: {
    color: color.primary,
  },
  bot: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  },
  checkBoxView: {
    backgroundColor: color.background,
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -15,
    marginTop: -15,
  }
})