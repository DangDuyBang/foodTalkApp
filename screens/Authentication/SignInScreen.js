import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}></View>
      <Text onPress={() => navigation.navigate('SignUp')}>SignInScreen</Text>
      <Text onPress={() => navigation.navigate('HomePage')} style={{marginTop: 50}}>SignInScreen come to HomePage</Text>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})