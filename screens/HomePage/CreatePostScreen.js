import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../contains/color'
import * as Animatable from 'react-native-animatable';

const CreatePostScreen = () => {
    return (
        <View style={styles.container}>
            <Text>CreatePost</Text>
        </View>
    )
}

export default CreatePostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        justifyContent: 'center',
        alignItems: 'center'
    },
})