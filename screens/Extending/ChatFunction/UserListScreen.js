import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>UserListScreen</Text>
    </View>
  )
}

export default UserListScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})