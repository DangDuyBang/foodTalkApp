import React from 'react'
import FoodServices from '../../../services/FoodServices'

const useRecipeActions = () => {
    const [loading, setLoading] = React.useState(false)
    const [searchText, setSearchText] = React.useState(` `)
    const {searchFoods} = FoodServices()

    React.useEffect(() => {
        const searchFoodList = async () => {
            searchFoods(searchText, 1, 20)
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