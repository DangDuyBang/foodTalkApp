import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import color from '../../../contains/color'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ContentRecipeScreen from '../RecipeFunction/ContentRecipeScreen'
import EvaluateRecipeScreen from '../RecipeFunction/EvaluateRecipeScreen'

const Tab = createMaterialTopTabNavigator();

const DetailRecipeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <View style={styles.leftView}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Ionicons name='arrow-back' size={35} color={color.textGray}></Ionicons>
                    </TouchableOpacity>
                    <Text style={styles.topText}>Pizza</Text>
                </View>
                <View style={styles.rightView}>
                    <Text style={styles.markText}>4.5</Text>
                    <FontAwesome name='star' size={20} color={color.starColor}></FontAwesome>
                </View>
            </View>
            <Tab.Navigator>
                <Tab.Screen name="Recipe" component={ContentRecipeScreen} />
                <Tab.Screen name="Evaluate" component={EvaluateRecipeScreen} />
            </Tab.Navigator>
        </View>
    )
}

export default DetailRecipeScreen

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
    topText: {
        fontFamily: 'Roboto',
        fontSize: 22,
        fontWeight: 'bold',
        color: color.textGray,
        marginLeft: 15
    },
    rightView: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    markText: {
        fontFamily: 'Roboto',
        fontSize: 13,
        color: color.textIconSmall,
        marginRight: 5,
    }
})