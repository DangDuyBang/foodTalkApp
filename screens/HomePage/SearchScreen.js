import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../../contains/color'
import InputSearch from '../../components/InputSearch'
import { AntDesign } from '@expo/vector-icons'

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

})