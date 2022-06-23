import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import color from '../../contains/color'
import { Ionicons } from '@expo/vector-icons'

const RecipeChosen = (props) => {
    return (
        <View style={styles.recipeChosenFrame}>
            <Image
                style={styles.avatarImage}
                resizeMode='cover'
                source={{
                    uri: props.foodName.photo,
                }}
            />
            <Text style={styles.nameRecipe}>{props.foodName.name}</Text>
            <TouchableOpacity onPress={() => props.onDeleteAttachedRecipe(props.foodName)}>
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
        borderRadius: 30,
        flexDirection: 'row',
        marginRight: 10,
        paddingVertical: 7,
        marginVertical: 20
    },
    avatarImage: {
        width: 32,
        height: 32,
        borderRadius: 100,
    },
    nameRecipe: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: color.textGray,
        fontSize: 14,
        marginHorizontal: 10
    }
})