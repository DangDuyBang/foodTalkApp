import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../contains/color'

const HeartedPostScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HeartedPostScreen</Text>
    </View>
  )
}

export default HeartedPostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.background,
    }
})