import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../../assets/color/color'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { lightTheme, darkTheme } from "../../assets/color/Theme"

const PostComment = (props) => {
    const theme = useSelector((state) => state.theme.theme);

    let styles;
    {
        theme.mode === "light" ?
            styles = styles_light
            : styles = styles_dark;
    }

    const handleReply = () => {
        if (props.onReplyPress)
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
            <View style={styles.botAction}>
                <Text style={styles.timeComment}>{moment(props.comment.created_at).fromNow()}</Text>
                {props.reply && <TouchableOpacity onPress={handleReply} style={{ display: props.display }}>
                    <Text style={styles.replyButton}>Reply</Text>
                </TouchableOpacity>}
            </View>
        </View>
    )
}

export default PostComment

const styles_light = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        marginHorizontal: 8,
        backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
        marginBottom: 5,
    },
    frameColor: {
        backgroundColor: lightTheme.SECOND_BACKGROUND_COLOR,
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
        backgroundColor: lightTheme.SECOND_TEXT_COLOR,
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
        color: lightTheme.SECOND_TEXT_COLOR,
        fontWeight: 'bold',
        fontSize: 16
    },
    timeComment: {
        fontFamily: 'Roboto',
        color: lightTheme.THIRD_TEXT_COLOR,
        fontSize: 12,
    },
    firstCommentText: {
        maxWidth: 310,
        color: lightTheme.SECOND_TEXT_COLOR
    },
    replyButton: {
        fontFamily: 'Roboto',
        color: lightTheme.THIRD_TEXT_COLOR,
        marginLeft: 12,
        fontWeight: 'bold',
    },

    botAction: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 16,
    }
});

const styles_dark = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        marginHorizontal: 8,
        backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
        marginBottom: 5,
    },
    frameColor: {
        backgroundColor: darkTheme.SECOND_BACKGROUND_COLOR,
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
        backgroundColor: darkTheme.SECOND_TEXT_COLOR,
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
        color: darkTheme.SECOND_TEXT_COLOR,
        fontWeight: 'bold',
        fontSize: 16
    },
    timeComment: {
        fontFamily: 'Roboto',
        color: darkTheme.THIRD_TEXT_COLOR,
        fontSize: 12,
    },
    firstCommentText: {
        maxWidth: 310,
        color: darkTheme.SECOND_TEXT_COLOR
    },
    replyButton: {
        fontFamily: 'Roboto',
        color: darkTheme.THIRD_TEXT_COLOR,
        marginLeft: 12,
        fontWeight: 'bold',
    },

    botAction: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 16,
    }
})