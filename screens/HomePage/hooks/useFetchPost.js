import { useState, useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { PostContext } from '../../../providers/PostProvider'
import { fetchAllPost } from "../../../services/PostServices"
import { setPosts } from '../../../redux/postReducer'
const useFetchPost = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()



    const useFetchAllPost = async () => {

        setLoading(true)
        try {
            const { data } = await fetchAllPost()
            if (data) {
                dispatch(setPosts(data.posts))
            }
            setLoading(false)
        }
        catch (err) {
            setLoading(false)
            if (err.response) {
                console.log(err.response.data.error)
                // setError(...err, err.response.data.error)
            }
        }
    }

    return ({ useFetchAllPost, loading })
}


export default useFetchPost
