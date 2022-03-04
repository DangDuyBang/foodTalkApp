import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../contains/color'

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>NotificationScreen</Text>
    </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.background,
    }
})