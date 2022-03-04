import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../contains/color'

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ExploreScreen</Text>
    </View>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.background,
    }
})