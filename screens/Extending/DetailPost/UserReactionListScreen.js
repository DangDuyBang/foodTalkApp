import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import color from '../../../contains/color'
import UserReaction from '../../../components/UserReaction'

const UserReactionListScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <UserReaction />
                <UserReaction />
                <UserReaction />
                <UserReaction />
                <UserReaction />
                <UserReaction />
            </ScrollView>
        </View>
    )
}

export default UserReactionListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
    }
})