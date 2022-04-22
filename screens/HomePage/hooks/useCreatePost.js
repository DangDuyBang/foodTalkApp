import React, { useState } from 'react'

export const useCreatePost = (props) => {

    const { navigation } = props

    const [isPublic, setIsPublic] = useState(true)
    const [foods, setFoods] = useState([])
    const [body, setBody] = useState({ is_public: true })

    const eventChangeMode = () => {
        setIsPublic(!isPublic)
        setBody({
            ...body,
            is_public: isPublic,
        })
    }

    const onRecipeConfirm = (foods) => {
        setFoods(foods)
        setBody({
            ...body,
            foods: foods.map(food => food.id),
        })
        console.log(body);
    }

    const eventRecipeAttached = () => {
        navigation.navigate('RecipeAttached', { onConfirm: onRecipeConfirm, foods: foods })
    }

    const onCancel = () => {
        navigation.goBack()
    }

    const handleContentChange = (text) => {
        setBody({
            ...body,
            content: text,
        })
    }

    const onDone = (address, region) => {
        setBody({
            ...body,
            location: {
                name: address,
                lat: region.latitude,
                lng: region.longitude,
            }
        })
        navigation.goBack()
    }

    const onPressCheckIn = () => {
        navigation.navigate('Map', { onCancel: onCancel, onDone: onDone })
    }

    return (
        { isPublic, foods, body, eventChangeMode, eventRecipeAttached, onPressCheckIn, handleContentChange }
    )
}
