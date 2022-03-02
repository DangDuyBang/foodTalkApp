import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoadingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('Splash')}>LoadingScreen</Text>
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})