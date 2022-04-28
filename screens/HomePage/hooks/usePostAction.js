import React from 'react'
import { PostContext } from '../../../providers/PostProvider'
import {likeDislikePost} from '../../../services/PostServices'

const usePostAction = () => {
    const [loading, setLoading] = React.useState(false)
    const { postDispatch } = React.useContext(PostContext)

    const likeDislikePostAction = async (post_id, setIsLiked) => {
        setIsLiked()
        
    }


    return (
        { loading, likeDislikePostAction }
    )
}

export default usePostAction