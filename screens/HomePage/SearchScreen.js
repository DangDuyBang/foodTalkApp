import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../../contains/color'
import InputSearch from '../../components/InputSearch'
import { AntDesign } from '@expo/vector-icons'
import MessageText from '../../components/MessageText'

const SearchScreen = ({ navigation }) => {

    navigation.setOptions({
        title: '',
        header: () => (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: color.background,
                paddingTop: 10,
                paddingRight: 80
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign style={styles.iconLeft} name='arrowleft' size={26} color={color.textGray}></AntDesign>
                </TouchableOpacity>

                <View>
                    <InputSearch
                        autoFocus={true}
                        inputIcon='search'
                        inputName='Search'
                    />
                </View>

            </View>
        )
    })

    return (
        <View style={styles.container}>
            <MessageText
                flexDirection='row'
                messageSend='Hello, Can I help you?'
                timeSend='8:26 AM' />
            <MessageText
                flexDirection='row-reverse'
                display='none'
                messageSend='My pleasure! I can do any thing for you? Let me know the things what I can do.'
                timeSend='20:30 PM' />
            <MessageText
                flexDirection='row'
                messageSend='Thanks very much. But I have just done.'
                timeSend='20:32 PM' />
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        paddingTop: 15
    },
    iconLeft: {
        marginHorizontal: 15
    },
})