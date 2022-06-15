import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import PostComment from '../../../components/PostComment'
import color from '../../../contains/color'
import InputComment from '../../../components/InputComment'
import InfinityScrollView from '../../../components/InfinityScrollView'
import useFetchPost from '../../HomePage/hooks/useFetchPost'
import { useSelector, useDispatch } from 'react-redux'
import { addComment, deleteCurrentPost } from '../../../redux/postReducer'
import { createComment } from '../../../services/PostServices'

const CommentListScreen = ({ navigation, route }) => {

    const { post_id } = route.params
    const dispatch = useDispatch()
    const comments = useSelector(state => state.post.currentPost.comments)

    const { useFetchComment } = useFetchPost()

    const fetchComment = () => {
        useFetchComment(post_id)
    }

    useEffect(() => {
        //fetchComment()

        return () => {
            dispatch(deleteCurrentPost())
        }
    }, [])

    const [isReplyPress, setIsReplyPress] = useState(false)
    const [nameUser, setNameUser] = useState('')
    const [payload, setPayload] = useState({
        post: post_id,
        content: '',
    })

    const [loading, setLoading] = useState(false)

    const handleReplyPress = (nameUserComment, comment_id) => {
        if (isReplyPress === false) {
            setIsReplyPress(true)
            setNameUser(nameUserComment)
            setPayload({
                ...payload,
                parent: comment_id
            })
        }
    }

    const handleCloseReplying = () => {
        if (isReplyPress == true) {
            const data = { ...payload }
            delete data['parent']
            setPayload({
                ...data
            })
            setIsReplyPress(false)
        }
    }

    const handleAddComment = async () => {
        setLoading(true)
        await createComment(payload).then(response => {
            setPayload({
                post: post_id,
                content: '',
            })
            setLoading(false)
        }).catch(err => {
            setLoading(false)
            if (err.response) {
                console.log(err.response.data.error)
                // setError(...err, err.response.data.error)
            }
        })

    }

    const handleAddReplyComment = async () => {
        if (isReplyPress) {
            setLoading(true)
            await createComment(payload).then(response => {
                setPayload({
                    post: post_id,
                    content: '',
                })
                setIsReplyPress(false)
                setLoading(false)

            }).catch(err => {
                setLoading(false)

                if (err.response) {
                    console.log(err.response.data.error)
                    // setError(...err, err.response.data.error)
                }
            })
        }
    }

    const onChangeContent = (text) => {
        setPayload({
            ...payload,
            content: text
        })
    }

    return (
        <View style={styles.container}>
            <InfinityScrollView useLoads={fetchComment}>
                {/* <PostComment
                        avatar='https://i.pinimg.com/736x/5a/27/28/5a272830589d98e6df4afdbbcec6123c.jpg'
                        nameCommenter='khoa_food_talk'
                        timeComment='30 minutes ago'
                        contentComment='Wow ! Congratulation. I want it'
                        onReplyPress={() => handleReplyPress('khoa_food_talk')}
                    />
                    <PostComment
                        avatar='https://i.pinimg.com/736x/00/5d/6a/005d6a1a3f1570f69d05890fdc108b22.jpg'
                        nameCommenter='ga_food_talk'
                        timeComment='25 minutes ago'
                        contentComment='Hmmm! Look great !'
                        leftMargin={80}
                        onReplyPress={() => handleReplyPress('ga_food_talk')}
                    /> */}
                {
                    comments && comments.map((item, index) => {
                        return <>
                            <PostComment
                                key={item._id}
                                comment={item}
                                onReplyPress={handleReplyPress}
                                reply
                            />

                            {item.children && item.children.map((i, index) => {
                                return <PostComment
                                    key={i._id}
                                    comment={i}
                                    onReplyPress={handleReplyPress}
                                    leftMargin={60}
                                    display='none'
                                />
                            })}
                        </>

                    })
                }
            </InfinityScrollView>
            <View style={styles.commentTypeView}>
                {
                    isReplyPress ?
                        <InputComment
                            nameUserReply={nameUser}
                            onCloseReply={handleCloseReplying}
                            onAddComment={handleAddReplyComment}
                            onChangeText={onChangeContent}
                            content={payload.content}
                            loading={loading}
                            isReply={isReplyPress}
                            autoFocus={true}
                        />
                        :
                        <InputComment
                            nameUserReply='none'
                            displayReply='none'
                            onAddComment={handleAddComment}
                            onChangeText={onChangeContent}
                            content={payload.content}
                            isReply={isReplyPress}
                            loading={loading}
                            autoFocus={true}
                        />
                }
            </View>
        </View>
    )
}

export default CommentListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        justifyContent: 'space-between'
    },
    commentTypeView: {
        paddingTop: 5,
    }
})