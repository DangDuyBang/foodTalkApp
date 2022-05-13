import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../../contains/color'

const RecipePostScreen = () => {
    return (
        <View style={styles.container}>
            <Text>RecipePostScreen</Text>
        </View>
    )
}

export default RecipePostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
    }
})