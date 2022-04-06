import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import color from '../../../contains/color'
import { Ionicons } from '@expo/vector-icons'
import IngredientAdd from '../../../components/IngredientAdd'
import ProcessAdd from '../../../components/ProcessAdd'
import ProcessShow from '../../../components/ProcessShow'
import IngredientShow from '../../../components/IngredientShow'

const NewRecipeScreen = ({ navigation }) => {

    const [processList, setProcessList] = useState([])
    const handleAddProcess = (process) => {
        //add process
        setProcessList([...processList, process])
    }

    const [ingredientList, setIngredientList] = useState([])

    const handleAddIngrdient = (nameIngredient, unitIngredient) => {
        //add ingredient
        setIngredientList([...ingredientList, unitIngredient + " " + nameIngredient])
    }

    const handleDeleteProcess = (index) => {
        let processListTemp = [...processList]
        processListTemp.splice(index, 1)
        setProcessList(processListTemp)
    }

    const handleDeleteIngredient = (index) => {
        let ingredientListTemp = [...ingredientList]
        ingredientListTemp.splice(index, 1)
        setIngredientList(ingredientListTemp)
    }

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <View style={styles.topLeftView}>
                    <TouchableOpacity onPress={() => { navigation.navigate('RecipeAttached') }}>
                        <Ionicons name='arrow-back' size={35} color={color.textGray}></Ionicons>
                    </TouchableOpacity>
                    <Text style={styles.topText}>Create A New Recipe</Text>
                </View>
                <TouchableOpacity>
                    <Ionicons name='checkmark-sharp' size={35} color={color.primary}></Ionicons>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.imageFoodFrame}>
                        <TouchableOpacity>
                            <Ionicons name='camera-outline' size={35} color={color.primary}></Ionicons>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.ingredientTittle}>Food Name</Text>
                    <TextInput
                        placeholder='Type name of food'
                        maxLength={20}
                        style={{
                            fontFamily: 'Roboto',
                            borderBottomWidth: 0.5,
                            paddingVertical: 10,
                            fontSize: 16,
                            paddingHorizontal: 5
                        }}
                    />
                    <Text style={styles.ingredientTittle}>Ingredients</Text>
                    <View>
                        {
                            ingredientList.map((item, index) => {
                                return <IngredientShow key={index} ingredientAn={item} onDeleteIngredient={() => handleDeleteIngredient(index)} />
                            })
                        }
                    </View>
                    <IngredientAdd onAddIngredient={handleAddIngrdient} />
                    <Text style={styles.ingredientTittle}>Process</Text>
                    <View>
                        {
                            processList.map((item, index) => {
                                return <ProcessShow key={index} step={item} indexNumber={index + 1} onDeleteProcess={() => handleDeleteProcess(index)} />
                            })
                        }
                    </View>
                    <ProcessAdd onAddProcess={handleAddProcess} />
                </View>
            </ScrollView>
        </View>
    )
}

export default NewRecipeScreen

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
    topLeftView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    topText: {
        fontFamily: 'Roboto',
        fontSize: 22,
        fontWeight: 'bold',
        color: color.textGray,
        marginLeft: 15
    },
    body: {
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    imageFoodFrame: {
        width: '100%',
        height: 250,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.inputColor
    },
    ingredientTittle: {
        marginTop: 10,
        fontFamily: 'Roboto',
        fontSize: 18,
        color: color.textGray,
        fontWeight: 'bold'
    },
})