import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import color from '../contains/color'
import { FontAwesome, AntDesign } from '@expo/vector-icons'

const RecipePreviewPlus = (props) => { 

    const isOnFoodList = (foodList) => {
        const index = foodList.findIndex(food => food.id === props.data.id)
        if (index !== -1) {
            return true
        }
        return false
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress = {props.onDetailRecipe}>
                <View style={styles.recipeView}>
                    <View style={styles.infoPostUser}>
                        <View style={styles.avatarFrame}>
                            <Image
                                style={styles.avatarImage}
                                resizeMode='cover'
                                source={{
                                    uri: props.data.photo,
                                }}
                            />
                        </View>
                        <View style={styles.nameUserView}>
                            <Text style={styles.nameUserText}>{props.data.name}</Text>
                            <Text style={styles.textModePost}>Made by {props.data.author.username}</Text>
                        </View>
                    </View>
                    <View style={styles.rateStarView}>
                        <Text style={styles.markText}>{props.data.avg_score}</Text>
                        <FontAwesome name='star' size={20} color={color.starColor}></FontAwesome>
                    </View>
                </View>
            </TouchableOpacity>

            {
                isOnFoodList(props.foodList) ?
                    <TouchableOpacity onPress = {() => props.onMinusAttachedRecipe(props.data)}>
                        <AntDesign name='minuscircleo' size={24} color={color.errorColor}></AntDesign>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => props.onAddAttachedRecipe(props.data)}>
                        <AntDesign name='pluscircleo' size={24} color={color.textIconSmall}></AntDesign>
                    </TouchableOpacity>
            }

        </View>
    )
}

export default RecipePreviewPlus

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        paddingRight: 25,
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    recipeView: {
        flexDirection: 'row',
        width: 360,
        justifyContent: 'space-between',
    },
    infoPostUser: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    avatarFrame: {
        width: 57,
        height: 57,
        borderRadius: 100,
        backgroundColor: color.primary,
        marginRight: 15,
    },
    avatarImage: {
        width: 57,
        height: 57,
        borderRadius: 150,
    },
    nameUserView: {

    },
    nameUserText: {
        fontFamily: 'Roboto',
        fontSize: 17,
        color: color.textGray,
        fontWeight: 'bold',
        marginBottom: 3
    },
    textModePost: {
        fontFamily: 'Roboto',
        color: color.textIconSmall,
        fontSize: 11
    },
    rateStarView: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 10,
        flexDirection: 'row',
    },
    markText: {
        fontFamily: 'Roboto',
        fontSize: 13,
        color: color.textIconSmall,
        marginRight: 5
    }
})