import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../contains/color'
import moment from 'moment'
import { useSelector } from 'react-redux'

const PostComment = (props) => {
    const currentUser = useSelector(state => state.user.currentUser)
    return (
        <View style={[styles.container, { marginLeft: props.leftMargin }]}>
            <View style={styles.frameColor}>
                <View style={styles.avatarAndNameViewCommenter}>
                    <View style={styles.avatarFrameCommenter}>
                        <Image
                            style={styles.avatarCommenter}
                            source={{
                                uri: props.comment.author.avatar_url,
                            }}
                        />
                    </View>
                    <View style={styles.nameAndTimeViewCommenter}>
                        <Text style={styles.nameUserCommenter}>{props.comment.author.username}</Text>
                        <Text style={styles.timeComment}>{moment(props.comment.created_at).fromNow()}</Text>
                    </View>
                </View>
                <Text style={styles.firstCommentText}>{props.comment.content}</Text>
            </View>
            <TouchableOpacity onPress={() => props.onReplyPress(currentUser._id, props.comment._id)}>
                <Text style={styles.replyButton}>Reply</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PostComment

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        marginHorizontal: 8,
        backgroundColor: color.background,
        marginBottom: 5,
    },
    frameColor: {
        backgroundColor: color.post,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 25
    },
    avatarAndNameViewCommenter: {
        flexDirection: 'row'
    },
    avatarFrameCommenter: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: color.textGray,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarCommenter: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    nameUserCommenter: {
        fontFamily: 'Roboto',
        color: color.textGray,
        fontWeight: 'bold',
        fontSize: 16
    },
    timeComment: {
        fontFamily: 'Roboto',
        color: color.textIconSmall,
        fontSize: 12,
    },
    firstCommentText: {
        marginHorizontal: 50
    },
    replyButton: {
        fontFamily: 'Roboto',
        color: color.textIconSmall,
        marginLeft: 60
    }
})