import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import color from '../../contains/color'
import RecipePreview from '../../components/RecipePreview'

const RecipePublicScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Sử dụng Component RecipePreview để hiển thị ở trang này */}
                {/* <RecipePreview /> */}
            </ScrollView>
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