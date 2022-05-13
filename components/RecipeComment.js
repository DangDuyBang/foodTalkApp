import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import color from '../contains/color'
import { FontAwesome } from '@expo/vector-icons'
import moment from 'moment'

const RecipeComment = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.avatarAndNameViewCommenter}>
                <View style={styles.avatarFrameCommenter}>
                    <Image
                        style={styles.avatarCommenter}
                        source={{
                            uri: props.rate.author.avatar_url,
                        }}
                    />
                </View>
                <View style={styles.nameAndTimeViewCommenter}>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.nameUserCommenter}>{props.rate.author.username}</Text>
                            <Text style={styles.markStarComment}>{props.rate.score}</Text>
                            <FontAwesome name='star' size={15} color={color.starColor}></FontAwesome>
                        </View>
                        <Text style={styles.firstCommentText}>{props.rate.content}</Text>
                    </View>
                    <Text style={styles.timeComment}>{moment(props.rate.created_at).fromNow()}</Text>
                </View>
            </View>
        </View>
    )
}

export default RecipeComment

const styles = StyleSheet.create({
    container: {
        //justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 5,
    },
    avatarAndNameViewCommenter: {
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
        fontSize: 16,
        marginRight: 10
    },
    timeComment: {
        fontFamily: 'Roboto',
        color: color.textIconSmall,
        fontSize: 12,
    },
    markStarComment: {
        fontFamily: 'Roboto',
        color: color.textIconSmall,
        fontSize: 12,
        marginRight: 3,
    },
    firstCommentText: {

    },
    nameAndTimeViewCommenter: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
        justifyContent: 'space-between'
    }
})