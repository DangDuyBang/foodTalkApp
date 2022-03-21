import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import color from '../../contains/color'
import InputText from '../../components/InputText'
import InputPass from '../../components/InputPass'
import SubmitNoLogo from '../../components/SubmitNoLogo'
import { CheckBox } from 'react-native-elements'

const SignUpScreen = ({ navigation }) => {
  const [checked, setchecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <FontAwesome
            name="arrow-left"
            size={24}
            style={styles.iconArrow}
          ></FontAwesome>
        </TouchableOpacity>
        <Text style={styles.topText}>Sign up</Text>
      </View>
      <ScrollView>
        <View style={styles.body}>
          <Text style={styles.tittle}>CREATE A NEW ACCOUNT</Text>
          <TouchableOpacity>
            <View style={styles.avatarFrame}>
              <FontAwesome
                name="camera"
                size={20}
                style={styles.iconCamera}
              ></FontAwesome>
            </View>
          </TouchableOpacity>

          <View style={styles.inputContain} >
            <InputText inputIcon='user' inputName='Username' />
            <InputText inputIcon='pencil' inputName='First Name' />
            <InputText inputIcon='pencil' inputName='Last Name' />
            <InputText inputIcon='mail' inputName='Email' />
            <InputPass inputIconLeft='lock' inputName='Password' />
            <InputPass inputIconLeft='lock' inputName='Confirm Password' />
          </View>
        </View>

        <View style={styles.bot}>
          <View style={styles.checkBox}>
            <CheckBox
              checked={checked}
              onPress={() => setchecked(!checked)}
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
          <SubmitNoLogo nameButton='SIGN UP' colorView={color.primary} colorName={color.background} />
        </View>
      </ScrollView>

    </View>
  )
}

export default SignUpScreen

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
    alignItems: 'center'
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
    borderRadius: 120,
    backgroundColor: color.inputColor,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCamera: {
    color: color.primary,
  },
  inputContain: {
    marginTop: 15,
  },
  bot: {
    justifyContent: 'center',
    alignItems: 'center',
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