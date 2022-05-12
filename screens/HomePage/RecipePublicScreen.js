import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../contains/color'

const RecipePublicScreen = () => {
    return (
        <View style={styles.container}>
            <Text>RecipePublicScreen</Text>
        </View>
    )
}

export default RecipePublicScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
    }
})