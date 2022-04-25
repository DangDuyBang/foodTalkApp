import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import PostComment from '../../../components/PostComment'
import color from '../../../contains/color'
import InputComment from '../../../components/InputComment'

const CommentListScreen = () => {

    const [commentList, setCommentList] = useState([])
    const [replyCommentList, setReplyCommentList] = useState([])

    const [isReplyPress, setIsReplyPress] = useState(false)
    const [nameUser, setNameUser] = useState('')

    const handleReplyPress = (nameUserComment) => {
        if (isReplyPress == false) {
            setIsReplyPress(true)
            setNameUser(nameUserComment)
        }
    }

    const handleCloseReplying = () => {
        if (isReplyPress == true) {
            setIsReplyPress(false)
        }
    }

    const handleAddComment = (comment) => {
        //add comment
        setCommentList([...commentList, comment])

    }

    const handleAddReplyComment = (comment) => {
        //add comment
        setReplyCommentList([...replyCommentList, comment])
        setIsReplyPress(false)
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.commentListView}>
                    <PostComment
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
                    />
                    {
                        commentList.map((item, index) => {
                            return <PostComment
                                key={index}
                                contentComment={item}
                                avatar='https://i.pinimg.com/564x/eb/ef/d5/ebefd5173889e9a8502cf04e7b016847.jpg'
                                nameCommenter='nntan_food_talk'
                                timeComment='Just now'
                                onReplyPress={() => handleReplyPress('nntan_food_talk')}
                            />
                        })
                    }
                    {
                        replyCommentList.map((item, index) => {
                            return <PostComment
                                key={index}
                                contentComment={item}
                                avatar='https://i.pinimg.com/564x/eb/ef/d5/ebefd5173889e9a8502cf04e7b016847.jpg'
                                nameCommenter='nntan_food_talk'
                                timeComment='Just now'
                                onReplyPress={() => handleReplyPress('nntan_food_talk')}
                                leftMargin={80}
                            />
                        })
                    }
                </View>
            </ScrollView>
            <View style={styles.commentTypeView}>
                {
                    isReplyPress ?
                        <InputComment
                            nameUserReply={nameUser}
                            onCloseReply={handleCloseReplying}
                            onAddComment={handleAddReplyComment}
                        />
                        :
                        <InputComment
                            nameUserReply='none'
                            displayReply='none'
                            onAddComment={handleAddComment}
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
    commentListView: {

    },
    commentTypeView: {
        paddingTop: 20,
    }
})