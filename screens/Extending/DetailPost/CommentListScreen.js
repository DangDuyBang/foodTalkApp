import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import PostComment from '../../../components/PostComment'
import color from '../../../contains/color'
import InputComment from '../../../components/InputComment'

const CommentListScreen = () => {

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
        else if (isReplyPress == false) {
            setIsReplyPress(true)
        }
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
                    />
                    <PostComment
                        avatar='https://i.pinimg.com/736x/5a/27/28/5a272830589d98e6df4afdbbcec6123c.jpg'
                        nameCommenter='khoa_food_talk'
                        timeComment='30 minutes ago'
                        contentComment='Wow ! Congratulation. I want it'
                    />
                    <PostComment
                        avatar='https://i.pinimg.com/736x/00/5d/6a/005d6a1a3f1570f69d05890fdc108b22.jpg'
                        nameCommenter='ga_food_talk'
                        timeComment='25 minutes ago'
                        contentComment='Hmmm! Look great !'
                        leftMargin={80}
                    />
                    <PostComment
                        avatar='https://i.pinimg.com/736x/00/5d/6a/005d6a1a3f1570f69d05890fdc108b22.jpg'
                        nameCommenter='ga_food_talk'
                        timeComment='25 minutes ago'
                        contentComment='Hmmm! Look great !'
                        leftMargin={80}
                    />
                    <PostComment
                        avatar='https://i.pinimg.com/736x/5a/27/28/5a272830589d98e6df4afdbbcec6123c.jpg'
                        nameCommenter='khoa_food_talk'
                        timeComment='30 minutes ago'
                        contentComment='Wow ! Congratulation. I want it'
                    />
                    <PostComment
                        avatar='https://i.pinimg.com/736x/00/5d/6a/005d6a1a3f1570f69d05890fdc108b22.jpg'
                        nameCommenter='ga_food_talk'
                        timeComment='25 minutes ago'
                        contentComment='Hmmm! Look great !'
                        leftMargin={80}
                    />
                </View>
            </ScrollView>
            <View style={styles.commentTypeView}>
                {
                    isReplyPress ?
                        <InputComment
                            nameUserReply={nameUser}
                            onCloseReply={handleCloseReplying}
                        />
                        :
                        <InputComment
                            nameUserReply='none'
                            displayReply='none'
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
        paddingTop: 20,
        backgroundColor: color.background,
        justifyContent: 'space-between'
    },
    commentListView: {

    },
    commentTypeView: {
        paddingTop: 20,
    }
})