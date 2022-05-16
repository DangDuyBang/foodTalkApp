import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUserFoods, setUserFoods } from '../../../redux/userReducer'
import { fetchUserFoods } from '../../../services/FoodServices'

const useFetchFood = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user.currentUser)
    const selectedUserProfile = useSelector(state => state.user.selectedUserProfile)

    const fetchUserFoodsList = async () => {
        if (currentUser.foodPagination.currentPage > currentUser.foodPagination.totalPage) {
            return
        }
        await fetchUserFoods(currentUser.data._id, currentUser.foodPagination.currentPage).then(response => {
            dispatch(setUserFoods(response.data))
        }).catch(err => {
            if (err.response) {
                console.log(err.response.data.error)
                // setError(...err, err.response.data.error)
            }
        })

    }

    const fetchSelectedUserFoodsList = async () => {
        if (selectedUserProfile.foodPagination.currentPage > selectedUserProfile.foodPagination.totalPage) {
            return
        }
        await fetchUserFoods(selectedUserProfile.data._id, selectedUserProfile.foodPagination.currentPage).then(response => {
            dispatch(setSelectedUserFoods(response.data))
        }).catch(err => {
            if (err.response) {
                console.log(err.response.data.error)
                // setError(...err, err.response.data.error)
            }
        })

    }

    return (
        { fetchUserFoodsList, fetchSelectedUserFoodsList }
    )
}

export default useFetchFood