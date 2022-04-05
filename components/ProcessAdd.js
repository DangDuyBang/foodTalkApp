import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import color from '../contains/color'

const ProcessAdd = (props) => {

    const [process, setProcess] = useState('')

    const eventAddProcess = () => {
        if (process.length === 0) {
            alert('You need fill before adding !');
            return false;
        }
        props.onAddProcess(process);
        setProcess('')
    }

    return (
        <View style={styles.container}>
            <TextInput
                value={process}
                placeholder='Type step by step'
                multiline={true}
                style={{
                    width: '90%',
                    paddingVertical: 10,
                    backgroundColor: color.inputColor,
                    paddingHorizontal: 5,
                    fontSize: 16,
                    borderRadius: 8
                }}
                onChangeText={(text) => setProcess(text)}
            />
            <TouchableOpacity onPress={eventAddProcess}>
                <Text style={{
                    fontFamily: 'Roboto',
                    fontSize: 35,
                    color: color.iconGreen,
                }}>
                    +
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProcessAdd

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        alignItems: 'center'
    },
})