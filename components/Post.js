import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import color from '../contains/color'
import { FontAwesome } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import SwipeSlide from './SwipeSlide'
import LottieView from 'lottie-react-native'

const Post = (props) => {

    const [isLiked, setIsLiked] = useState(false)

    const animation = React.useRef(null);
    const isFirstRun = React.useRef(true);

    React.useEffect(() => {
        if (isFirstRun.current) {
            if (isLiked) {
                animation.current.play(66, 66);
            } else {
                animation.current.play(19, 19);
            }
            isFirstRun.current = false;
        } else if (isLiked) {
            animation.current.play(19, 50);
        } else {
            animation.current.play(0, 19);
        }
    }, [isLiked]);

    const heartEvent = () => {
        if (isLiked == false) {
            setIsLiked(true)
        } else if (isLiked == true) {
            setIsLiked(false)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.topPost}>
                <View style={styles.avatarAndNameView}>
                    <View style={styles.avatarFrame}>
                        <Image
                            style={styles.avatar}
                            source={{
                                uri: props.avatar,
                            }}
                        />
                    </View>
                    <View style={styles.nameAndTimeView}>
                        <Text style={styles.nameUserText}>{props.nameUser}</Text>
                        <Text style={styles.timePost}>{props.timePost}</Text>
                    </View>
                </View>
                <Text style={styles.followText}>Follow</Text>
            </View>
            <View style={styles.contentPost}>
                <View style={styles.imageFrame}>
                    <SwipeSlide />
                    {/* <Image
                        style={styles.imagePost}
                        source={{
                            uri: props.imagePost,
                        }}
                    /> */}
                </View>
            </View>
            <View style={styles.midPost}>
                <Text>{props.caption}</Text>
                <View style={styles.heartCommentShareAndBookView}>
                    <View style={styles.heartCommentShareView}>
                        {/* <FontAwesome style={styles.heartIcon} name='heart-o' size={23} color={color.textIconSmall}></FontAwesome> */}
                        <TouchableOpacity onPress={heartEvent}>
                            <LottieView
                                ref={animation}
                                style={styles.heartIconLottie}
                                source={require("../assets/lottie/44921-like-animation.json")}
                                autoPlay={false}
                                loop={false}
                            />
                        </TouchableOpacity>
                        <Text style={styles.heartNumber}>{props.heartCount}</Text>
                        <FontAwesome style={styles.commentIcon} name='comments-o' size={26} color={color.textIconSmall}></FontAwesome>
                        <Text style={styles.commentNumber}>{props.commentCount}</Text>
                        <FontAwesome style={styles.shareIcon} name='share' size={22} color={color.textIconSmall}></FontAwesome>
                    </View>
                    <AntDesign name='book' size={22} color={color.primary}></AntDesign>
                </View>
            </View>
            <View style={styles.botPost}>
                <View style={styles.avatarAndNameViewCommenter}>
                    <View style={styles.avatarFrameCommenter}>
                        <Image
                            style={styles.avatarCommenter}
                            source={{
                                uri: props.avatarCommenter,
                            }}
                        />
                    </View>
                    <View style={styles.nameAndTimeViewCommenter}>
                        <Text style={styles.nameUserCommenter}>{props.nameCommenter}</Text>
                        <Text style={styles.timeComment}>{props.timeComment}</Text>
                    </View>
                </View>
                <Text style={styles.firstCommentText}>{props.contentComment}</Text>
            </View>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.post,
        marginVertical: 5,
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
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    nameUserText: {
        fontFamily: 'Roboto',
        color: color.textGray,
        fontWeight: 'bold',
        fontSize: 16,
    },
    timePost: {
        fontFamily: 'Roboto',
        color: color.textIconSmall,
        fontSize: 12
    },
    followText: {
        fontFamily: 'Roboto',
        color: color.textBlue,
        fontWeight: 'bold',
        fontSize: 16
    },
    contentPost: {
        marginVertical: 10
    },
    imageFrame: {
        width: '100%',
        height: 250,
        backgroundColor: color.textIconSmall,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagePost: {
        width: '100%',
        height: 250,
    },
    midPost: {
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
    heartIconLottie: {
        width: 50,
        height: 50,
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
    },
    botPost: {
        justifyContent: 'space-between',
        marginHorizontal: 20
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
    }
})