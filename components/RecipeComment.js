import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import color from '../contains/color'
import { FontAwesome } from '@expo/vector-icons'

const RecipeComment = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.avatarAndNameViewCommenter}>
                <View style={styles.avatarFrameCommenter}>
                    <Image
                        style={styles.avatarCommenter}
                        source={{
                            uri: 'https://i.pinimg.com/564x/7f/fe/43/7ffe43bdb745f58931f01284710d1cc9.jpg',
                        }}
                    />
                </View>
                <View style={styles.nameAndTimeViewCommenter}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.nameUserCommenter}>bang_food_talk</Text>
                        <Text style={styles.markStarComment}>{props.starMark}</Text>
                        <FontAwesome name='star' size={15} color={color.starColor}></FontAwesome>
                    </View>
                    <Text style={styles.timeComment}>{props.dateComment}</Text>
                </View>
            </View>
            <Text style={styles.firstCommentText}>{props.commentText}</Text>
        </View>
    )
}

export default RecipeComment

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        paddingHorizontal: 20,
        backgroundColor: color.post,
        marginBottom: 5,
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
        marginLeft: 50,
        marginRight: 10,
    },
    nameAndTimeViewCommenter: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
        justifyContent: 'space-between'
    }
})