import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../contains/color'
import moment from 'moment'
import { useSelector } from 'react-redux'

const PostComment = (props) => {
    const currentUser = useSelector(state => state.user.currentUser.data)
    const handleReply = () => {
        if(props.onReplyPress)
        props.onReplyPress(props.comment.author.username, props.comment._id)
    }
    return (
        <View style={[styles.container, { marginLeft: props.leftMargin }]}>
            <View style={styles.frameColor}>
                <View style={styles.avatarFrameCommenter}>
                    <Image
                        style={styles.avatarCommenter}
                        source={{
                            uri: props.comment.author.avatar_url,
                        }}
                    />
                </View>
                <View>
                    <Text style={styles.nameUserCommenter}>{props.comment.author.username}</Text>
                    <Text style={styles.firstCommentText}>{props.comment.content}</Text>
                </View>
            </View>
            <View style = {styles.botAction}>
                <Text style={styles.timeComment}>{moment(props.comment.created_at).fromNow()}</Text>
                <TouchableOpacity onPress={handleReply}>
                    <Text style={styles.replyButton}>Reply</Text>
                </TouchableOpacity>
            </View>
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
        borderRadius: 25,
        flexDirection: 'row',
    },

    nameAndTimeViewCommenter: {
        flexDirection: 'row',
        alignItems: 'center'
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
        maxWidth: 310
    },
    replyButton: {
        fontFamily: 'Roboto',
        color: color.textIconSmall,
        marginLeft: 12,
        fontWeight: 'bold',
    },

    botAction: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 16,
    }
})