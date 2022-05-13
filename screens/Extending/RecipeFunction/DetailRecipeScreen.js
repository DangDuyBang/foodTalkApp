import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ContentRecipeScreen from '../RecipeFunction/ContentRecipeScreen'
import EvaluateRecipeScreen from '../RecipeFunction/EvaluateRecipeScreen'
import React from 'react'
const Tab = createMaterialTopTabNavigator();

const DetailRecipeScreen = ({ navigation }) => {
    return (
            <Tab.Navigator>
                <Tab.Screen name="Recipe" component={ContentRecipeScreen} />
                <Tab.Screen name="Evaluate" component={EvaluateRecipeScreen} />
            </Tab.Navigator>
    )
}

export default DetailRecipeScreen

