import React from 'react'
import { useDispatch } from 'react-redux'
import { searchFood } from '../../../../services/FoodServices'
import { setFoods } from '../../../../redux/foodReducer'

const useRecipeActions = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false)
    const [searchText, setSearchText] = React.useState(` `)

    React.useEffect(() => {
        const searchFoodList = async () => {
            setLoading(true)
            await searchFood(searchText).then((response) => {
                console.log(response.data.foods);
                dispatch(setFoods(response.data.foods))
                setLoading(false)
            }).catch((err) => {
                setLoading(false)
                if (err.response) {
                    console.log(err.response.data.error)
                    // setError(...err, err.response.data.error)
                }
            })
        }

        searchFoodList()
    }, [searchText])

    const handleSearchChange = (text) => {
        setSearchText(text)
    }

    return(
        {loading, handleSearchChange}
    )
}

export default useRecipeActions