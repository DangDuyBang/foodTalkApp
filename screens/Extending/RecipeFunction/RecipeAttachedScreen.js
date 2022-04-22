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
        author: { username: "Dang Duy Bang"},
        avg_score: "4.5",
    },
    {
        id: '1',
        photo: "https://i.pinimg.com/564x/91/1b/fb/911bfbe4f493ed427c8b19d1d69f2d57.jpg",
        name: "Beef steak",
        author: {username: "Nguyen Nhut Tan"},
        avg_score: "4.5",
    }
]

const RecipeAttachedScreen = ({ navigation, route }) => {

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
            <View style={styles.topView}>
                <View style={styles.leftView}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
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
    bodyView: {

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