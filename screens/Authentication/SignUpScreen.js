import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('SignIn')}>SignUpScreen</Text>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})