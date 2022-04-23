import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import color from '../../../contains/color'
import { Ionicons } from '@expo/vector-icons'
import InputSearch from '../../../components/InputSearch'
import RecipePreview from '../../../components/RecipePreview'
import RecipePreviewPlus from '../../../components/RecipePreviewPlus'
import RecipeChosen from '../../../components/RecipeChosen'


const data = [
    {
        id: '0',
        photo: "https://i.pinimg.com/564x/54/60/a0/5460a0721c26e6d3c7a1848ac1a24abd.jpg",
        name: "Pizza",
        author: { username: "Dang Duy Bang" },
        avg_score: "4.5",
    },
    {
        id: '1',
        photo: "https://i.pinimg.com/564x/91/1b/fb/911bfbe4f493ed427c8b19d1d69f2d57.jpg",
        name: "Beef steak",
        author: { username: "Nguyen Nhut Tan" },
        avg_score: "4.5",
    }
]

const RecipeAttachedScreen = ({ navigation, route }) => {

    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity onPress={eventNewRecipe} style={{ marginRight: 16 }}>
                <Text style={{
                    fontSize: 32,
                    color: color.primary,
                    fontWeight: '500'
                }}>+</Text>
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
            <InputSearch inputIcon='search' inputName='Search Recipe' widthSearch={380} />
            <ScrollView>
                <View style={styles.bodyView}>
                    {data.map(recipe => (
                        <RecipePreviewPlus
                            key={recipe.id} data={recipe}
                            foodList={foodList}
                            onAddAttachedRecipe={handlePlusAttachedRecipe}
                            onMinusAttachedRecipe={handleMinusAttachedRecipe}
                            onDetailRecipe={handleDetailRecipe}
                        />
                    ))}
                </View>
            </ScrollView>

            {
                foodList.length === 0 ?
                    <View style={{
                        width: '100%',
                        paddingRight: 10,
                        alignItems: 'flex-end',
                        display: 'none'
                    }}>
                        <TouchableOpacity>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: color.hideColor,
                                paddingHorizontal: 10,
                                borderRadius: 10,
                                marginBottom: 3
                            }}>
                                <Ionicons name='checkmark-circle' size={28} color={color.primary}></Ionicons>
                                <Text style={{
                                    color: color.textBlue,
                                    fontWeight: 'bold',
                                    fontSize: 16
                                }}>
                                    CONFIRM
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={{
                        width: '100%',
                        paddingRight: 10,
                        alignItems: 'flex-end',
                    }}>
                        <TouchableOpacity onPress={handleConfirm}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: color.inputColor,
                                paddingHorizontal: 10,
                                borderRadius: 10,
                                marginBottom: 3
                            }}>
                                <Ionicons name='checkmark-circle' size={28} color={color.primary}></Ionicons>
                                <Text style={{
                                    color: color.textBlue,
                                    fontWeight: 'bold',
                                    fontSize: 16
                                }}>
                                    CONFIRM
                                </Text>
                            </View>
                        </TouchableOpacity>
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