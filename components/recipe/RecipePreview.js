import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import color from '../../contains/color'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrenFood } from '../../redux/foodReducer'

const RecipePreview = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const ratePagination = useSelector(state => state.food.currentFood.ratePagination)

    const handleDetailRecipe =  async (food) => {
        dispatch(setCurrenFood(food))
        navigation.navigate('DetailRecipe')
    }

    return (
        <TouchableOpacity onPress={() => handleDetailRecipe(props.data)}>
            <View style={styles.container}>
                <View style={styles.infoPostUser}>
                    <View style={styles.avatarFrame}>
                        <Image
                            style={styles.avatarImage}
                            resizeMode='cover'
                            source={{
                                uri: props.data.photo,
                            }}
                        />
                    </View>
                    <View style={styles.nameUserView}>
                        {props.data.name.length > 20 ? <Text style={styles.nameUserText}>{props.data.name.slice(0, 18)} ...</Text> : <Text style={styles.nameUserText}>{props.data.name}</Text>}
                        {props.data.author && <Text style={styles.textModePost}>Made by {props.data.author.username}</Text>}
                    </View>
                </View>
                <View style={styles.rateStarView}>
                    <Text style={styles.markText}>{props.data.avg_score.toFixed(1)}</Text>
                    <FontAwesome name='star' size={20} color={color.starColor}></FontAwesome>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RecipePreview

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    infoPostUser: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    avatarFrame: {
        width: 57,
        height: 57,
        borderRadius: 100,
        backgroundColor: color.primary,
        marginRight: 15
    },
    avatarImage: {
        width: 57,
        height: 57,
        borderRadius: 150,
    },
    nameUserView: {

    },
    nameUserText: {
        fontFamily: 'Roboto',
        fontSize: 17,
        color: color.textGray,
        fontWeight: 'bold',
        marginBottom: 3
    },
    textModePost: {
        fontFamily: 'Roboto',
        color: color.textIconSmall,
        fontSize: 11
    },
    rateStarView: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 30,
        flexDirection: 'row',
    },
    markText: {
        fontFamily: 'Roboto',
        fontSize: 13,
        color: color.textIconSmall,
        marginRight: 5,
    }
})