import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../../contains/color'
import InputSearch from '../../components/InputSearch'
import { AntDesign } from '@expo/vector-icons'

const SearchScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.searchView}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign style={styles.iconLeft} name='arrowleft' size={26} color={color.textGray}></AntDesign>
                </TouchableOpacity>

                <InputSearch inputIcon='search' inputName='Search' />
            </View>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
    },
    iconLeft: {
        marginHorizontal: 15
    },
    searchView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 15,
        width: 330
    },
})