import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../contains/color'

const PrivatePostScreen = () => {
    return (
        <View style={styles.container}>
            <Text>PrivatePostScreen</Text>
        </View>
    )
}

export default PrivatePostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.background,
    }
})