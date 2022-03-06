import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../contains/color'

const ComunityPostScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imagePost}>
                <Text>ComunityPostScreen</Text>
            </View>
        </View>
    )
}

export default ComunityPostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: color.background,
        paddingTop: 20
    },
    imagePost: {
        width: 150,
        height: 390,
        backgroundColor: color.primary
    }
})