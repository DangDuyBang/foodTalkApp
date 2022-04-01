import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import color from '../contains/color'
import { FontAwesome } from '@expo/vector-icons'

const RecipePreview = (props) => {
    return (
        <TouchableOpacity onPress={props.eventDetailRecipe}>
            <View style={styles.container}>
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
    )
}

export default RecipePreview

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    infoPostUser: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    avatarFrame: {
        width: 57,
        height: 57,
        borderRadius: 100,
        backgroundColor: color.primary,
        marginRight: 15
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
        paddingRight: 30,
        flexDirection: 'row',
    },
    markText: {
        fontFamily: 'Roboto',
        fontSize: 13,
        color: color.textIconSmall,
        marginRight: 5,
    }
})