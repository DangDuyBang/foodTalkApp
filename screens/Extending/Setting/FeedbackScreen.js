import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../../../contains/color'
import { Ionicons } from '@expo/vector-icons'

const FeedbackScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Ionicons name='arrow-back' size={35} color={color.textGray}></Ionicons>
                </TouchableOpacity>
                <Text style={styles.topText}>Feedback</Text>
            </View>
        </View>
    )
}

export default FeedbackScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        paddingTop: 35,
        paddingBottom: 10,
    },
    topView: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 7,
        paddingHorizontal: 15
    },
    topText: {
        fontFamily: 'Roboto',
        fontSize: 22,
        fontWeight: 'bold',
        color: color.textGray,
        marginLeft: 15
    },
})