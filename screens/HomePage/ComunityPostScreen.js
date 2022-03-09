import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../contains/color'
import PostInAccount from '../../components/PostInAccount'

const ComunityPostScreen = () => {
    return (
        <View style={styles.container}>
            <PostInAccount text="one"/>
            <PostInAccount text="two"/>
            <PostInAccount text="three"/>
        </View>
    )
}

export default ComunityPostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row-reverse',
        flexWrap: 'wrap-reverse',
    },
})