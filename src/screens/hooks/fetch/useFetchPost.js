import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllComment, fetchAllPost, fetchAllReaction, fetchUserPost } from "../../../services/PostServices"
import { setComment, setPosts, setReactions } from '../../../redux/reducers/postReducer'
import { setSelectedUserPosts, setUserPosts } from "../../../redux/reducers/userReducer"

const useFetchPost = () => {
    const [loading, setLoading] = useState(false)
    const postPagination = useSelector(state => state.post.postPagination)
    const commentPagination = useSelector(state => state.post.currentPost.commentPagination)
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser)
    const selectedUser = useSelector(state => state.user.selectedUser)


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

    const useFetchReaction = async (post_id) => {
        setLoading(true)
        await fetchAllReaction(post_id).then(response => {
            dispatch(setReactions(response.data))
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
        await fetchUserPost(currentUser._id, currentUser.postPagination.currentPage).then(response => {
            dispatch(setUserPosts(response.data))
        }).catch(err => {
            if (err.response) {
                console.log(err.response.data.error)
                // setError(...err, err.response.data.error)
            }
        })

    }

    const fetchSelectedUserPosts = async () => {
        if (selectedUser.postPagination.currentPage > selectedUser.postPagination.totalPage) {
            return
        }
        await fetchUserPost(selectedUser.data._id, selectedUser.postPagination.currentPage).then(response => {
            dispatch(setSelectedUserPosts(response.data))
        }).catch(err => {
            if (err.response) {
                console.log(err.response.data.error)
                // setError(...err, err.response.data.error)
            }
        })

    }

    return ({ useFetchAllPost, useFetchComment, fetchUserPosts,fetchSelectedUserPosts, useFetchReaction, loading })
}


export default useFetchPost
