import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import color from '../contains/color'
import { FontAwesome } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import SwipeSlide from './SwipeSlide'
import LottieView from 'lottie-react-native'
import RecipeShowed from './RecipeShowed'
import moment from 'moment'

const Post = (props) => {

    const [isFollow, setIsFollow] = useState(false)

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
                                    uri: props.post.author ? props.post.author.avatar_url : '',
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.nameAndTimeView}>
                        <Text style={styles.nameUserText}>

                            {props.post.author ? props.post.author.username : ''}

                            <Text style={[styles.nameUserText, { fontWeight: 'normal' }, { fontSize: 14 }]}> is in </Text>
                            <Text style={[styles.nameUserText, { fontSize: 14 }]}> {props.post.location.name}</Text>
                        </Text>
                        <Text style={styles.timePost}>{moment(props.post.created_at).fromNow()}</Text>
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
                {props.post.content ? <Text style={{
                    marginLeft: 25,
                    marginBottom: 10
                }}>
                {props.post.content}
                </Text>: null}

                <View style={styles.imageFrame}>
                    {props.post.photos && props.post.photos.length > 0 ? <SwipeSlide photos={props.post.photos} /> : null}
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
                        {props.post.foods && props.post.foods.length > 0 ? (
                            props.post.foods.map((food) => (
                                <RecipeShowed food={food} />
                            ))
                        ) : null}
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
                        <Text style={styles.heartNumber}>{props.post.num_heart}</Text>

                        <TouchableOpacity onPress={props.onCommentList}>
                            <FontAwesome style={styles.commentIcon} name='comments-o' size={26} color={color.textIconSmall}></FontAwesome>
                        </TouchableOpacity>
                        <Text style={styles.commentNumber}>0</Text>

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
                                uri: '',
                            }}
                        />
                    </View>
                    <View style={styles.nameAndTimeViewCommenter}>
                        <Text style={styles.nameUserCommenter}>NGuyễn Nhựt Tân</Text>
                        <Text style={styles.timeComment}>10h ago</Text>
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