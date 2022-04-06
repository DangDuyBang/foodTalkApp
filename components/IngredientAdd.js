import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import color from '../contains/color'

const IngredientAdd = (props) => {

    const [ingredient, setIngredient] = useState({
        nameIngredient: '',
        unitIngredient: '',
    })

    const eventAddIngredient = () => {
        if (ingredient.nameIngredient.length === 0 || ingredient.unitIngredient.length === 0) {
            alert('You need fill before adding !');
            return false;
        }
        props.onAddIngredient(ingredient.nameIngredient, ingredient.unitIngredient);

        setIngredient({
            ...ingredient,
            nameIngredient: '',
            unitIngredient: '',
        })
        //alert(ingredient.nameIngredient + ingredient.unitIngredient)
    }

    return (
        <View style={styles.container}>
            <TextInput
                value={ingredient.nameIngredient}
                placeholder='Type an ingredient'
                maxLength={20}
                style={{
                    width: '63%',
                    paddingVertical: 10,
                    backgroundColor: color.inputColor,
                    paddingHorizontal: 5,
                    fontSize: 16,
                    borderRadius: 8
                }}
                onChangeText={(text) => setIngredient({ ...ingredient, nameIngredient: text })}
            />
            <TextInput
                value={ingredient.unitIngredient}
                placeholder='Type unit'
                maxLength={10}
                style={{
                    width: '27%',
                    paddingVertical: 10,
                    backgroundColor: color.inputColor,
                    paddingHorizontal: 5,
                    fontSize: 16,
                    borderRadius: 8
                }}
                onChangeText={(text) => setIngredient({ ...ingredient, unitIngredient: text })}
            />
            <TouchableOpacity onPress={eventAddIngredient}>
                <Text style={{
                    fontFamily: 'Roboto',
                    fontSize: 35,
                    color: color.iconGreen,
                }}>
                    +
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default IngredientAdd

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        alignItems: 'center'
    }
})