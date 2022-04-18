import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../contains/color'
import { Ionicons } from '@expo/vector-icons'

const RecipeChosen = (props) => {
    return (
        <View style={styles.recipeChosenFrame}>
            <Text style={styles.nameRecipe}>{props.foodName}</Text>
            <TouchableOpacity onPress={props.onDeleteAttachedRecipe}>
                <Ionicons style={styles.sendIcon} name='close-circle' size={20} color={color.errorColor}></Ionicons>
            </TouchableOpacity>
        </View>
    )
}

export default RecipeChosen

const styles = StyleSheet.create({
    recipeChosenFrame: {
        backgroundColor: color.post,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        marginRight: 10,
        paddingVertical: 10,
        marginVertical: 20
    },
    nameRecipe: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: color.textGray,
        fontSize: 15,
        marginRight: 10
    }
})