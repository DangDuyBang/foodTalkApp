import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../contains/color'
import * as Animatable from 'react-native-animatable';

const LoadingScreen = ({ navigation }) => {
  return (
    <Animatable.View animation="fadeInUp" duration={1000}>
      <View style={styles.container}>
        <Text onPress={() => navigation.navigate('Splash')}>LoadingScreen</Text>
      </View>
    </Animatable.View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.primary,
  }
})