import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import color from '../../assets/color/color'
import IngredientRecommend from './IngredientRecommend'
import { pairingIngr, recommendationIngr } from '../../services/FoodServices'
import uuid from 'react-native-uuid';

const IngredientAdd = (props) => {

    const inputRef = useRef()
    const [recommendIngredient, setRecommendedIngredient] = useState([])
    const [ingredient, setIngredient] = useState({
        nameIngredient: '',
        unitIngredient: '',
    })
    const [ingrList, setIngrList] = useState([])
    const [recommendI, setRecommendedI] = useState([])
    const [isRecommend, setIsRecommned] = useState(false)

    useEffect(async () => {
        await recommendationIngr(ingredient.nameIngredient.toLowerCase().replace(/\s/g, '_')).then(response => {
            setRecommendedIngredient(response.data.ingredients.reverse())
        }).catch(err => {
            if (err.response) {
                console.log(err.response.data.error)
                // setError(...err, err.response.data.error)
            }
        })

    }, [ingredient.nameIngredient])

    useEffect(async () => {
        await pairingIngr(ingrList[ingrList.length - 1]).then(response => {
            setRecommendedI([...recommendI, ...response.data.filter(e => {
                return !recommendI.find(i => i.ingredient_name === e.ingredient_name)
            })
            ].sort((a, b) => {
                if (a.prediction > b.prediction) return -1
                if (a.prediction < b.prediction) return 1
                return 0
            }))

            const dataList = recommendI.map(ingr => ingr.ingredient_name).filter(function (e) {
                return !ingrList.includes(e)
            })

            setRecommendedIngredient(dataList.map(ingr => ({
                _id: ingr
            })))

        }).catch(err => {
            if (err.response) {
                console.log(err.response.data.error)
                // setError(...err, err.response.data.error)
            }
        })
    }, [ingrList])


    const eventAddIngredient = () => {
        if (ingredient.nameIngredient.length === 0 || ingredient.unitIngredient.length === 0) {
            alert('You need fill before adding !');
            return false;
        }
        props.onAddIngredient(ingredient.nameIngredient, ingredient.unitIngredient);
        setIngrList([...ingrList, ingredient.nameIngredient.toLowerCase().replace(/\s/g, '_')])

        setIngredient({
            ...ingredient,
            nameIngredient: '',
            unitIngredient: '',
        })

        setRecommendedIngredient([])
        inputRef.current.focus()
    }

    const handleTypeRecommend = (recommendIngredien) => {
        setIngredient({
            ...ingredient,
            nameIngredient: recommendIngredien,
        })

    }

    const formatString = (string) => {
        string = string.replace(/_/g, ' ')
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <View>
            {/* {
                ingredient.nameIngredient.length > 0 && ingredient.nameIngredient.length < 5 ? */}
            <ScrollView
                horizontal={true}
                paddingBottom={6}
            >
                {recommendIngredient && recommendIngredient.length !== 0 && recommendIngredient.map(ingr => <IngredientRecommend key={uuid.v4()} ingredientText={formatString(ingr._id)} onTypeRecommend={handleTypeRecommend} />)}
                {/* <IngredientRecommend ingredientText='egg' />
                        <IngredientRecommend
                            onTypeRecommend={handleTypeRecommend}
                            ingredientText='egg chicken'
                        />
                        <IngredientRecommend ingredientText='egg duck' />
                        <IngredientRecommend ingredientText='cow egg' />
                        <IngredientRecommend ingredientText='egg vegetables' />
                        <IngredientRecommend ingredientText='egg turtle' />
                        <IngredientRecommend ingredientText='egg boil' /> */}
            </ScrollView>
            {/* :
                    ingredient.nameIngredient.length > 4 && ingredient.nameIngredient.length < 6 ?
                        <ScrollView
                            horizontal={true}
                            paddingBottom={6}
                        >
                            <IngredientRecommend
                                onTypeRecommend={handleTypeRecommend}
                                ingredientText='egg chicken' />
                            <IngredientRecommend ingredientText='egg cat'
                            />
                        </ScrollView>
                        :
                        ingredient.nameIngredient.length > 5 && ingredient.nameIngredient.length < 11 ?
                            <ScrollView
                                horizontal={true}
                                paddingBottom={6}
                            >
                                <IngredientRecommend
                                    onTypeRecommend={handleTypeRecommend}
                                    ingredientText='egg chicken'
                                />
                            </ScrollView>
                            :
                            null
            } */}

            <View style={styles.container}>
                <TextInput
                    value={ingredient.unitIngredient}
                    placeholder='Type unit'
                    maxLength={10}
                    style={{
                        width: '27%',
                        paddingVertical: 10,
                        backgroundColor: color.inputColor,
                        paddingHorizontal: 10,
                        fontSize: 16,
                        borderRadius: 8
                    }}
                    onChangeText={(text) => setIngredient({ ...ingredient, unitIngredient: text })}
                    ref={inputRef}
                />
                <TextInput
                    value={ingredient.nameIngredient}
                    placeholder='Type an ingredient'
                    maxLength={20}
                    style={{
                        width: '63%',
                        paddingVertical: 10,
                        backgroundColor: color.inputColor,
                        paddingHorizontal: 10,
                        fontSize: 16,
                        borderRadius: 8
                    }}
                    onChangeText={(text) =>
                        setIngredient({ ...ingredient, nameIngredient: text })
                    }
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
        </View>

    )
}

export default IngredientAdd

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        alignItems: 'center'
    }
})