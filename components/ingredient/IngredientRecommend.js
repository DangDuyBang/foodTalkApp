import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../../contains/color'

const IngredientRecommend = (props) => {

    const eventTypeRecommend = (ingredientText) => {
        props.onTypeRecommend(ingredientText)
    }

    return (
        <TouchableOpacity onPress={() => eventTypeRecommend(props.ingredientText)}>
            <View style={styles.frameText}>
                <Text style={styles.ingredientText}>{props.ingredientText}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default IngredientRecommend

const styles = StyleSheet.create({
    frameText: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: color.post,
        borderRadius: 20,
        marginTop: 5,
        marginRight: 10,
    },
    ingredientText: {
        fontSize: 15,
        color: color.textIconSmall,
    }
})