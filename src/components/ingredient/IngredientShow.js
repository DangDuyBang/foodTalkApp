import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../../assets/color/color'
import { lightTheme, darkTheme } from "../../assets/color/Theme"
import { useSelector } from "react-redux";

const IngredientShow = (props) => {
    const theme = useSelector((state) => state.theme.theme);

    let styles;
    {
        theme.mode === "light" ?
            styles = styles_light
            : styles = styles_dark;
    }

    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Text style={styles.indexNumber}>●</Text>
                <View style={styles.ingredientView}>
                    <Text style={styles.ingredientText}>{props.ingredientAn}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={props.onDeleteIngredient}>
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

const styles_light = StyleSheet.create({
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
        color: lightTheme.SECOND_TEXT_COLOR
    },
    ingredientView: {
        flexDirection: 'row',
        width: '95%'
    },
    ingredientText: {
        fontFamily: 'Roboto',
        flexWrap: 'wrap',
        color: lightTheme.SECOND_TEXT_COLOR,
        fontSize: 16,
    }
});

const styles_dark = StyleSheet.create({
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
        color: darkTheme.SECOND_TEXT_COLOR
    },
    ingredientView: {
        flexDirection: 'row',
        width: '95%'
    },
    ingredientText: {
        fontFamily: 'Roboto',
        flexWrap: 'wrap',
        color: darkTheme.SECOND_TEXT_COLOR,
        fontSize: 16,
    }
})