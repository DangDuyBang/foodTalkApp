import React from 'react'

const usePostAction = () => {
    const [loading, setLoading] = React.useState(false)

    const likeDislikePostAction = async (post_id, setIsLiked) => {
        setIsLiked()
        
    }


    return (
        { loading, likeDislikePostAction }
    )
}

export default usePostAction