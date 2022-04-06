import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../contains/color'

const IngredientShow = (props) => {
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',   
                alignItems: 'center'    
            }}>
                <Text style={styles.indexNumber}>●</Text>
                <View style={styles.ingredientView}>
                    <Text style={styles.unitText}>{props.unitAn}</Text>
                    <Text style={styles.ingredientText}>{props.ingredientAn}</Text>
                </View>
            </View>
            <TouchableOpacity>
                <Text style={{
                    fontFamily: 'Roboto',
                    fontSize: 35,
                    color: color.errorColor,
                }}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default IngredientShow

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 5,
        alignItems: 'center',
        paddingRight: 15
    },
    numberView: {
        flexDirection: 'row',
    },
    indexNumber: {
        fontFamily: 'Roboto',
        fontSize: 5,
        marginRight: 5,
    },
    ingredientView: {
        flexDirection: 'row',
        width: '95%'
    },
    unitText: {
        fontFamily: 'Roboto',
        flexWrap: 'wrap',
        color: color.textBlack,
        marginRight: 5,
        fontSize: 16,
    },
    ingredientText: {
        fontFamily: 'Roboto',
        flexWrap: 'wrap',
        color: color.textBlack,
        fontSize: 16,
    }
})