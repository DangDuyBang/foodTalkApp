import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import color from '../../../contains/color'
import { Ionicons } from '@expo/vector-icons'
import InputSearch from '../../../components/InputSearch'
import RecipePreview from '../../../components/RecipePreview'

const RecipeAttachedScreen = ({ navigation }) => {

    const eventNewRecipe = () => {
        navigation.navigate('NewRecipe')
      }

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <View style={styles.leftView}>
                    <TouchableOpacity onPress={() => { navigation.navigate('NewPost') }}>
                        <Ionicons name='arrow-back' size={35} color={color.textGray}></Ionicons>
                    </TouchableOpacity>
                    <Text style={styles.topText}>Recipe Attached</Text>
                </View>
                <View style={styles.rightView}>
                    <TouchableOpacity onPress={eventNewRecipe}>
                        <Text style={{
                            fontSize: 32,
                            color: color.primary,
                            fontWeight: '500'
                        }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <InputSearch inputIcon='search' inputName='Search Recipe' widthSearch={380} />
            <ScrollView>
                <View style={styles.body}>
                    <RecipePreview/>
                </View>
            </ScrollView>
        </View>
    )
}

export default RecipeAttachedScreen

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
        justifyContent: 'space-between',
        paddingBottom: 7,
        paddingHorizontal: 15
    },
    leftView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    rightView: {
        backgroundColor: color.post,
        width: 50,
        height: 50,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topText: {
        fontFamily: 'Roboto',
        fontSize: 22,
        fontWeight: 'bold',
        color: color.textGray,
        marginLeft: 15
    },
})