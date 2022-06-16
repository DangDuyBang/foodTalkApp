import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../../contains/color'

const RecipePostScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{
                alignItems: 'center',
                width: '100%',
                backgroundColor: color.background
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginTop: 50,
                    textAlign: 'center'
                }}>
                    There's no thing at all {'\n'}
                    User's recipes will be display at here.
                </Text>
            </View>
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