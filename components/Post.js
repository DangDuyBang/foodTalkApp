import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import color from '../contains/color'
import { FontAwesome } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import SwipeSlide from './SwipeSlide'
import LottieView from 'lottie-react-native'
import RecipeShowed from './RecipeShowed'

const Post = (props) => {

    const [isFollow, setIsFollow] = useState(props.isFollow)

    const [isLiked, setIsLiked] = useState(props.isLiked)

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

    const followEvent = () => {
        if (isFollow == false) {
            setIsFollow(true)
        } else if (isFollow == true) {
            setIsFollow(false)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.topPost}>
                <View style={styles.avatarAndNameView}>
                    <TouchableOpacity onPress={props.onPersonalPage}>
                        <View style={styles.avatarFrame}>
                            <Image
                                style={styles.avatar}
                                source={{
                                    uri: props.avatar,
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.nameAndTimeView}>
                        <Text style={styles.nameUserText}>
                            {props.nameUser}

                            <Text style={[styles.nameUserText, { fontWeight: 'normal' }, { fontSize: 14 }]}> {props.isIn}</Text>
                            <Text style={[styles.nameUserText, { fontSize: 14 }]}> {props.addressCheckIn}</Text>
                        </Text>
                        <Text style={styles.timePost}>{props.timePost}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={followEvent}>
                    {
                        isFollow ?
                            <Text style={styles.followText}>Follow</Text>
                            : <Text style={[styles.followText, { color: color.textIconSmall }]}>Following</Text>
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.contentPost}>
                <Text style={{
                    marginLeft: 25,
                    marginBottom: 10
                }}>
                    {props.caption}
                </Text>

                <View style={styles.imageFrame}>
                    <SwipeSlide />
                    {/* <Image
                        style={styles.imagePost}
                        source={{
                            uri: props.imagePost,
                        }}
                    /> */}
                </View>

                <ScrollView
                    horizontal={true}
                >
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        paddingVertical: 10,
                        paddingRight: 20,
                        borderColor: color.textIconSmall,
                        marginTop: 5
                    }}>
                        <RecipeShowed
                            imageRecipe="https://i.pinimg.com/564x/5c/7a/bf/5c7abf4bf3ac7440af505641a682d7cc.jpg"
                            nameRecipe="Chicken Plus"
                        />
                        <RecipeShowed
                            imageRecipe="https://i.pinimg.com/736x/0b/bc/7f/0bbc7f8893b630538bc4de00879f1cae.jpg"
                            nameRecipe="Pizza"
                        />
                        <RecipeShowed
                            imageRecipe="https://i.pinimg.com/736x/5c/87/04/5c87042d17742653409f4d82e138794c.jpg"
                            nameRecipe="Bread Grill"
                        />
                        <RecipeShowed
                            imageRecipe="https://i.pinimg.com/564x/78/bd/70/78bd70813157306b8e7c422bd96fdd09.jpg"
                            nameRecipe="Udon Noodle"
                        />
                    </View>
                </ScrollView>
            </View>
            <View style={styles.midPost}>
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

                        <TouchableOpacity onPress={props.onCommentList}>
                            <FontAwesome style={styles.commentIcon} name='comments-o' size={26} color={color.textIconSmall}></FontAwesome>
                        </TouchableOpacity>
                        <Text style={styles.commentNumber}>{props.commentCount}</Text>

                        <FontAwesome style={styles.shareIcon} name='share' size={22} color={color.textIconSmall}></FontAwesome>
                    </View>
                </View>
            </View>
            <View style={[styles.botPost, { display: props.firstComment }]}>
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
        backgroundColor: color.background,
        marginVertical: 5,
        paddingVertical: 5,
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
    nameAndTimeView: {
        width: 220
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
        color: color.primary,
        fontWeight: 'bold',
        fontSize: 16,
    },
    contentPost: {
        marginTop: 10
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
        borderColor: color.textIconSmall,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5
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