import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../contains/color'

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AccountScreen</Text>
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.background,
    }
})