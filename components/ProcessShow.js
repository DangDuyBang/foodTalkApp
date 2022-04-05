import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../contains/color'

const ProcessShow = (props) => {
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
            }}>
                <View style={styles.numberView}>
                    <Text style={styles.indexNumber}>{props.indexNumber}</Text>
                    <Text>. </Text>
                </View>
                <Text style={styles.stepProcess}>{props.step}</Text>
            </View>
            <TouchableOpacity>
                <Text style={{
                    fontFamily: 'Roboto',
                    fontSize: 35,
                    color: color.errorColor,
                }}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProcessShow

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 5,
        alignItems: 'center',
        paddingRight: 15
    },
    numberView: {
        flexDirection: 'row',
    },
    indexNumber: {
        fontFamily: 'Roboto',
        fontSize: 16
    },
    stepProcess: {
        fontFamily: 'Roboto',
        flexWrap: 'wrap',
        color: color.textBlack,
        marginRight: 10,
        fontSize: 16,
        width: '90%'
    }
})