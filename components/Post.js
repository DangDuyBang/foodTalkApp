import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../contains/color'
import { FontAwesome } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

const Post = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topPost}>
                <View style={styles.avatarAndNameView}>
                    <View style={styles.avatarFrame}></View>
                    <View style={styles.nameAndTimeView}>
                        <Text>tan_food_talk</Text>
                        <Text>2 hours ago</Text>
                    </View>
                </View>
                <Text>Follow</Text>
            </View>
            <View style={styles.contentPost}>
                <View style={styles.imageFrame}>

                </View>
            </View>
            <View style={styles.botPost}>
                <Text>It's delicous</Text>
                <View style={styles.heartCommentShareAndBookView}>
                    <View style={styles.heartCommentShareView}>
                        <FontAwesome style={styles.heartIcon} name='heart-o' size={23} color={color.textIconSmall}></FontAwesome>
                        <Text style={styles.heartNumber}>26</Text>
                        <FontAwesome style={styles.commentIcon} name='comments-o' size={26} color={color.textIconSmall}></FontAwesome>
                        <Text style={styles.commentNumber}>11</Text>
                        <FontAwesome style={styles.shareIcon} name='share' size={22} color={color.textIconSmall}></FontAwesome>
                    </View>
                    <AntDesign name='book' size={22} color={color.textIconSmall}></AntDesign>
                </View>
            </View>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.post,
        marginVertical: 10,
        paddingVertical: 5
    },
    topPost: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    avatarAndNameView: {
        flexDirection: 'row'
    },
    avatarFrame: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: color.textGray,
        marginRight: 10
    },
    contentPost: {
        marginVertical: 10
    },
    imageFrame: {
        width: '100%',
        height: 250,
        backgroundColor: color.textIconSmall
    },
    botPost: {
        marginHorizontal: 20
    },
    heartCommentShareAndBookView: {
        flexDirection: 'row',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        paddingVertical: 5,
        alignItems: 'center',
        marginVertical: 5,
        justifyContent: 'space-between',
    },
    heartIcon: {
        marginRight: 5,
    },
    heartNumber: {
        marginRight: 20,
    },
    commentIcon: {
        marginRight: 5,
    },
    commentNumber: {
        marginRight: 20,
    },
    shareIcon: {
        marginRight: 5,
    },
    heartCommentShareView: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})