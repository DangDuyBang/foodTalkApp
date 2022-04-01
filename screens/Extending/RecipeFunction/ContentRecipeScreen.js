import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../../contains/color'

const ContentRecipeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>ContentRecipeScreen</Text>
        </View>
    )
}

export default ContentRecipeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.background,
    }
})