import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PostComment from '../../../components/PostComment'
import color from '../../../contains/color'
import InputComment from '../../../components/InputComment'

const CommentListScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.commentListView}>
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
                />
            </View>
            <View style={styles.commentTypeView}>
                <InputComment />
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

    }
})