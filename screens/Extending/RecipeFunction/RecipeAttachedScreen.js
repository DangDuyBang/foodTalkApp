import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import color from '../../../contains/color'
import { Ionicons } from '@expo/vector-icons'
import InputSearch from '../../../components/InputSearch'
import RecipePreview from '../../../components/RecipePreview'
import RecipePreviewPlus from '../../../components/RecipePreviewPlus'
import RecipeChosen from '../../../components/RecipeChosen'
import useRecipeActions from './hooks/useRecipeActions'
import { useSelector } from 'react-redux'


const RecipeAttachedScreen = ({ navigation, route }) => {

    const { loading, handleSearchChange } = useRecipeActions()

    const foodsSearch = useSelector(state => state.food.foods)

    navigation.setOptions({
        title: 'Choose Attached Recipes',
        headerRight: () => (
            <TouchableOpacity onPress={handleConfirm} style={{ marginRight: 16 }}>
                <Ionicons name='checkmark-sharp' size={35} color={color.primary}></Ionicons>
            </TouchableOpacity>
        )
    })

    const { onConfirm, foods } = route.params

    const [foodList, setFoodList] = useState(foods)

    const handleConfirm = () => {
        onConfirm(foodList)
        navigation.goBack()
    }

    const handlePlusAttachedRecipe = (food) => {
        setFoodList([...foodList, food])
    }

    const handleMinusAttachedRecipe = (obj) => {
        // let foodListTemp = [...foodList]
        const data = foodList.filter(value => value != obj)
        setFoodList(data)
    }

    const eventNewRecipe = () => {
        navigation.navigate('NewRecipe')
    }

    const handleDetailRecipe = () => {
        navigation.navigate('DetailRecipe')
    }

    return (
        <View style={styles.container}>
            <InputSearch inputIcon='search' inputName='Search Recipe' widthSearch={380} style={{ paddingHorizontal: 8 }} setNameText={handleSearchChange} />
            <ScrollView>
                <View style={styles.bodyView}>
                    {foodsSearch.length !== 0 && foodsSearch.map(recipe => (
                        <RecipePreviewPlus
                            key={recipe._id} data={recipe}
                            foodList={foodList}
                            onAddAttachedRecipe={handlePlusAttachedRecipe}
                            onMinusAttachedRecipe={handleMinusAttachedRecipe}
                            onDetailRecipe={handleDetailRecipe}
                        />
                    ))}
                </View>
            </ScrollView>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                paddingRight: 10,
                bottom: '4%',
                right: '1%'
            }}>
                <TouchableOpacity onPress={eventNewRecipe}>
                    <View style={{
                        width: 55,
                        height: 55,
                        borderRadius: 55,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: color.primary,
                    }}>
                        <Text style={{
                            fontSize: 25,
                            color: color.background,
                        }}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {
                foodList.length === 0 ?
                    <View style={{
                        width: '100%',
                        paddingRight: 10,
                        alignItems: 'flex-end',
                        display: 'none'
                    }}>
                    </View>
                    :
                    <View style={{
                        width: '100%',
                        paddingRight: 10,
                        alignItems: 'flex-end',
                    }}>
                    </View>
            }



            <View style={styles.botView}>

                <ScrollView horizontal={true}>
                    <View style={styles.recipeChosenView}>
                        {
                            foodList.map((item, index) => {
                                return <RecipeChosen key={index} foodName={item} onDeleteAttachedRecipe={handleMinusAttachedRecipe} />
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default RecipeAttachedScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        paddingBottom: 10,
        paddingTop: 16,
    },
    bodyView: {
        marginTop: 16,
    },
    botView: {
        flexDirection: 'row',
        borderTopWidth: 2,
        borderTopColor: color.inputColor,
        //paddingVertical: 10
    },
    recipeChosenView: {
        flexDirection: 'row',
        paddingLeft: 20,
        //paddingVertical: 15
    },
})