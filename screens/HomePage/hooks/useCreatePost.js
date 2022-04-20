import React, { useState } from 'react'

export const useCreatePost = (props) => {

    const { navigation } = props

    const [isPublic, setIsPublic] = useState(true)
    const [body, setBody] = useState({})

    const eventChangeMode = () => {
        setIsPublic(!isPublic)
    }

    const onRecipeConfirm = (foods) => {
        const foods_id = foods.map(food => food.id)
        setBody({
            ...body,
            foods: foods_id,
        })
        console.log(body);
    }

    const eventRecipeAttached = () => {
        navigation.navigate('RecipeAttached', {onConfirm: onRecipeConfirm})
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
        { isPublic, eventChangeMode, eventRecipeAttached, onPressCheckIn, handleContentChange }
    )
}
