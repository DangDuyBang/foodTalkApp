import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllComment, fetchAllPost, fetchUserPost } from "../../../services/PostServices"
import { setComment, setPosts } from '../../../redux/postReducer'
import { setSelectedUserPosts, setUserPosts } from "../../../redux/userReducer"

const useFetchPost = () => {
    const [loading, setLoading] = useState(false)
    const postPagination = useSelector(state => state.post.postPagination)
    const commentPagination = useSelector(state => state.post.currentPost.commentPagination)
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser)
    const selectedUserProfile = useSelector(state => state.user.selectedUserProfile)


    const useFetchComment = async (post_id) => {
        if (commentPagination.currentPage > commentPagination.totalPage) {
            return
        }
        setLoading(true)
        console.log(post_id)
        await fetchAllComment(post_id, commentPagination.currentPage).then(response => {
            dispatch(setComment(response.data))
            setLoading(false)
        }).catch(err => {
            setLoading(false)
            if (err.response) {
                console.log(err.response.data.error)
                // setError(...err, err.response.data.error)
            }
        })
    }

    const useFetchAllPost = async () => {
        if (postPagination.currentPage > postPagination.totalPage) {
            return
        }
        setLoading(true)
        await fetchAllPost(postPagination.currentPage).then(response => {
            dispatch(setPosts(response.data))
            setLoading(false)
        }).catch(err => {
            setLoading(false)
            if (err.response) {
                console.log(err.response.data.error)
                // setError(...err, err.response.data.error)
            }
        })
    }

    const fetchUserPosts = async () => {
        if (currentUser.postPagination.currentPage > currentUser.postPagination.totalPage) {
            return
        }
        await fetchUserPost(currentUser.data._id, currentUser.postPagination.currentPage).then(response => {
            dispatch(setUserPosts(response.data))
        }).catch(err => {
            if (err.response) {
                console.log(err.response.data.error)
                // setError(...err, err.response.data.error)
            }
        })

    }

    const fetchSelectedUserPosts = async () => {
        if (selectedUserProfile.postPagination.currentPage > selectedUserProfile.postPagination.totalPage) {
            return
        }
        await fetchUserPost(selectedUserProfile.data._id, selectedUserProfile.postPagination.currentPage).then(response => {
            dispatch(setSelectedUserPosts(response.data))
        }).catch(err => {
            if (err.response) {
                console.log(err.response.data.error)
                // setError(...err, err.response.data.error)
            }
        })

    }

    return ({ useFetchAllPost, useFetchComment, fetchUserPosts,fetchSelectedUserPosts, loading })
}


export default useFetchPost
