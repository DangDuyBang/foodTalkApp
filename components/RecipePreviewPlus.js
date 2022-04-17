import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import color from '../contains/color'
import { FontAwesome, AntDesign } from '@expo/vector-icons'

const RecipePreviewPlus = (props) => {

    const [food, setFood] = useState(props.nameRecipe)

    const [isAttached, setIsAttached] = useState(false)

    const eventAttachedRecipe = () => {
        if (isAttached == true) {
            setIsAttached(false)
        } else if (isAttached == false) {
            setIsAttached(true)
            props.onAddAttachedRecipe(food)

        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.eventDetailRecipe}>
                <View style={styles.recipeView}>
                    <View style={styles.infoPostUser}>
                        <View style={styles.avatarFrame}>
                            <Image
                                style={styles.avatarImage}
                                resizeMode='stretch'
                                source={{
                                    uri: props.imageRecipe,
                                }}
                            />
                        </View>
                        <View style={styles.nameUserView}>
                            <Text style={styles.nameUserText}>{props.nameRecipe}</Text>
                            <Text style={styles.textModePost}>Made by {props.authorRecipe}</Text>
                        </View>
                    </View>
                    <View style={styles.rateStarView}>
                        <Text style={styles.markText}>{props.markRecipe}</Text>
                        <FontAwesome name='star' size={20} color={color.starColor}></FontAwesome>
                    </View>
                </View>
            </TouchableOpacity>

            {
                isAttached ?
                    <TouchableOpacity onPress={eventAttachedRecipe}>
                        <AntDesign name='minuscircleo' size={24} color={color.errorColor}></AntDesign>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={eventAttachedRecipe}>
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