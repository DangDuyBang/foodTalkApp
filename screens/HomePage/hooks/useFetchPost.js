import { useState, useContext } from "react"
import { PostContext } from '../../../providers/PostProvider'
import { fetchAllPost } from "../../../services/PostServices"
const useFetchPost = () => {
    const [loading, setLoading] = useState(false)
    const { postState, postDispatch } = useContext(PostContext)


    const useFetchAllPost = async () => {
        if (
            postState.postPagination.currentPage > postState.postPagination.totalPage) {
            return
        } else {
            setLoading(true)
            try {
                const { data } = await fetchAllPost()
                if (data) {
                    console.log(data.posts.map(post => post.id));
                    postDispatch({
                        type: 'POST_PAGINATION',
                        payload: {
                            currentPage: data.pagination.currentPage + 1,
                            totalPage: data.pagination.totalPage,
                            posts: data.posts,
                        },
                    })
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
    }

    return ({ useFetchAllPost, loading })
}


export default useFetchPost
