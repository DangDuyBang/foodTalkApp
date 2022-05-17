import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Share } from 'react-native'
import React from 'react'
import color from '../contains/color'
import { FontAwesome } from '@expo/vector-icons'
import SwipeSlide from './SwipeSlide'
import LottieView from 'lottie-react-native'
import RecipeShowed from './RecipeShowed'
import moment from 'moment'
import { likeDislikePost } from '../services/PostServices'
import { useSelector, useDispatch } from 'react-redux'
import { likePost, unLikePost } from '../redux/postReducer'
import useUserAction from '../screens/HomePage/hooks/useUserAction'
import AvatarUser from './AvatarUser'

const Post = (props) => {

    const { useFollow } = useUserAction()

    const onShare = async () => {
        try {
            const result = await Share.share({
                message: 'React Native | A framework for building native apps using React',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    const currentUser = useSelector(state => state.user.currentUser.data)
    const dispatch = useDispatch()

    const isFollowed = () => {
        if (currentUser._id === props.post.author._id) return true
        const index = currentUser.following.findIndex(f => f._id === props.post.author._id)
        if (index === -1) return false
        return true
    }

    let isLikedUser = () => {
        return props.post.reactions.includes(currentUser._id)
    }

    const animation = React.useRef(null);

    React.useEffect(() => {
        if (isLikedUser()) {
            animation.current.play(19, 50);
        } else {
            animation.current.play(0, 19);
        }
    }, [props.post.reactions])

    const heartEvent = async () => {
        if (isLikedUser()) {
            dispatch(unLikePost({ post: props.post, user: currentUser }))
        } else {
            dispatch(likePost({ post: props.post, user: currentUser }))
        }

        await likeDislikePost(props.post._id).then(res => {
            console.log(res.data.message);
        }).catch(err => {
            if (err.response) {
                console.log(err.response.data.error)
                // setError(...err, err.response.data.error)
            }
        })
    }

    const followEvent = () => {
        useFollow(props.post.author._id)
    }

    return (
        <View style={styles.container}>
            <View style={styles.topPost}>
                <View style={styles.avatarAndNameView}>
                    <AvatarUser
                        sizeImage={40}
                        profile={props.post.author}
                    />
                    {/* <View style={styles.avatarFrame}>
                            <Image
                                style={styles.avatar}
                                source={{
                                    uri: props.post.author ? props.post.author.avatar_url : '',
                                }}
                            />
                        </View> */}
                    <View style={styles.nameAndTimeView}>
                        <Text style={styles.nameUserText}>

                            {props.post.author ? props.post.author.username : ''}

                            {props.post.location.name !== '' && <Text style={[styles.nameUserText, { fontWeight: 'normal' }, { fontSize: 14 }]}> is in</Text>}
                            {props.post.location && <Text style={[styles.nameUserText, { fontSize: 14 }]}> {props.post.location.name}</Text>}
                        </Text>
                        <Text style={styles.timePost}>{moment(props.post.created_at).fromNow()}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={followEvent}>
                    {
                        !isFollowed() &&
                        <Text style={styles.followText}>Follow</Text>

                    }
                </TouchableOpacity>
            </View>
            <View style={styles.contentPost}>
                {props.post.content ? <Text style={{
                    marginLeft: 25,
                    marginBottom: 10
                }}>
                    {props.post.content}
                </Text> : null}

                <View style={styles.imageFrame}>
                    {props.post.photos && props.post.photos.length > 0 ? <SwipeSlide photos={props.post.photos} /> : null}
                </View>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{
                        paddingRight: 20,
                        borderColor: color.textIconSmall,
                        marginLeft: 10,
                        marginTop: 5,
                        marginBottom: -10
                    }}
                >
                    {props.post.foods && props.post.foods.length > 0 ? (
                        props.post.foods.map((food) => (
                            <RecipeShowed food={food} key={food._id} />
                        ))
                    ) : null}
                </ScrollView>
            </View>
            <View style={styles.midPost}>
                <View style={styles.heartCommentShareAndBookView}>
                    <View style={styles.heartCommentShareView}>
                        <TouchableOpacity onPress={heartEvent}>
                            <LottieView
                                ref={animation}
                                style={styles.heartIconLottie}
                                source={require("../assets/lottie/44921-like-animation.json")}
                                autoPlay={false}
                                loop={false}
                                speed={1}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => props.onCommentList(props.post._id)}>
                            <FontAwesome style={styles.commentIcon} name='comments-o' size={26} color={color.textIconSmall}></FontAwesome>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onShare}>
                            <FontAwesome style={styles.shareIcon} name='share' size={22} color={color.textIconSmall}></FontAwesome>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
            <View style={styles.botPost}>
                <TouchableOpacity onPress={props.onUserReactionList}>
                    <Text style={styles.heartNumber}>{props.post.num_heart === 0 ? 'Give your first reaction' : isLikedUser() ? `Liked by you and ${props.post.num_heart - 1} others people` : `Liked by ${props.post.num_heart} others people`}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.onCommentList(props.post._id)}>
                    <Text style={styles.commentNumber}>{props.post.num_comment === 0 ? 'No comment' : `View all ${props.post.num_comment} comments`}</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.background,
        marginVertical: 5,
        paddingVertical: 12,
    },
    topPost: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    avatarAndNameView: {
        flexDirection: 'row'
    },
    nameAndTimeView: {
        width: 220,
        marginLeft: 10
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
        //height: 250,
        backgroundColor: color.textIconSmall,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagePost: {
        width: '100%',
        //height: 250,
    },
    heartCommentShareAndBookView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    heartIcon: {
        marginRight: 5,
    },
    heartIconLottie: {
        width: 60,
        height: 60,
    },
    heartNumber: {
        color: color.primary,
        fontWeight: 'bold',
    },
    commentIcon: {
        marginRight: 20,
    },
    commentNumber: {

    },
    shareIcon: {
        marginRight: 5,
    },
    heartCommentShareView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    midPost: {
        marginVertical: 0,
    },
    botPost: {
        justifyContent: 'space-between',
        marginHorizontal: 16,
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