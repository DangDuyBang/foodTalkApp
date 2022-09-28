import { followUser, unfollowUser } from '../../../services/UserServices'
import { useDispatch } from 'react-redux'
import { follow, unfollow } from '../../../redux/reducers/userReducer'
import { useState } from 'react'

const useUserAction = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const useFollow = async (user_id) => {
        await followUser(user_id).then(response => {
            dispatch(follow(response.data.data))
        }).catch(err => {
            if (err.response) {
                console.log(err.response.data.error)
                // setError(...err, err.response.data.error)
            }
        })
    }

    const useUnfollow = async (user_id) => {
        dispatch(unfollow(user_id))
        await unfollowUser(user_id).then(response => {
            console.log(response.data.message);
        }).catch(err => {
            if (err.response) {
                console.log(err.response.data.error)
                // setError(...err, err.response.data.error)
            }
        })
    }

    return (
        { useFollow, useUnfollow }
    )
}

export default useUserAction