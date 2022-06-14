import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Share } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from '../../../contains/color'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import LottieView from 'lottie-react-native'
import AvatarUser from '../../../components/AvatarUser'
import SwipeSlide from '../../../components/SwipeSlide'
import RecipeShowed from '../../../components/RecipeShowed'
import moment from 'moment'
import PostComment from '../../../components/PostComment'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCurrentPost, likePost, unLikePost } from '../../../redux/postReducer'
import { likeDislikePost } from '../../../services/PostServices'
import useUserAction from '../../HomePage/hooks/useUserAction'
import useFetchPost from '../../HomePage/hooks/useFetchPost'
import InputComment from '../../../components/InputComment'
import InfinityScrollView from '../../../components/InfinityScrollView'
import { createComment } from '../../../services/PostServices'

const DetailedPostScreen = ({ navigation }) => {
    const currentUser = useSelector(state => state.user.currentUser.data)
    const dispatch = useDispatch()
    const currentPost = useSelector(state => state.post.currentPost)
    const { useFollow } = useUserAction()
    const { useFetchComment, useFetchReaction } = useFetchPost()
    const [payload, setPayload] = useState({
        post: currentPost.data._id,
        content: '',
    })

    const [loading, setLoading] = useState(false)

    const [isReplyPress, setIsReplyPress] = useState(false)

    const handleReplyPress = (nameUserComment, comment_id) => {
        if (isReplyPress == false) {
            setIsReplyPress(true)
            setNameUser(nameUserComment)
            setPayload({
                ...payload,
                parent: comment_id
            })
        }
    }

    const handleCloseReplying = () => {
        if (isReplyPress == true) {
            const data = { ...payload }
            delete data['parent']
            setPayload({
                ...data
            })
            setIsReplyPress(false)
        }
    }

    const handleAddComment = async () => {
        setLoading(true)
        await createComment(payload).then(response => {
            setPayload({
                post: currentPost.data._id,
                content: '',
            })
            setLoading(false)
        }).catch(err => {
            setLoading(false)
            if (err.response) {
                console.log(err.response.data.error)
                // setError(...err, err.response.data.error)
            }
        })

    }

    const handleAddReplyComment = async () => {
        if (isReplyPress) {
            setLoading(true)
            await createComment(payload).then(response => {
                setPayload({
                    post: currentPost.data._id,
                    content: '',
                })
                setIsReplyPress(false)
                setLoading(false)

            }).catch(err => {
                setLoading(false)

                if (err.response) {
                    console.log(err.response.data.error)
                    // setError(...err, err.response.data.error)
                }
            })
        }
    }

    const onChangeContent = (text) => {
        setPayload({
            ...payload,
            content: text
        })
    }

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => null,
            headerRight: () => (
                <TouchableOpacity style={{ marginRight: 12 }} onPress={() => navigation.navigate("Search")}>
                    <FontAwesome
                        name='search'
                        size={22}
                        style={{
                            color: color.textIconSmall,
                            marginRight: 10,
                        }}
                    ></FontAwesome>
                </TouchableOpacity>
            )
        })

        useFetchComment(currentPost.data._id)
        useFetchReaction(currentPost.data._id)

        return () => {
            dispatch(deleteCurrentPost())
        }
    }, [])



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

    const isFollowed = () => {
        if (currentUser._id === currentPost.data.author._id) return true
        const index = currentUser.following.findIndex(f => false._id === currentPost.data.author._id)
        if (index > -1) return true
        return false
    }

    const isLikedUser = () => {
        return currentPost.data.reactions.includes(currentUser._id)
    }


    const animation = React.useRef(null);
    const isFirstRun = React.useRef(true);

    React.useEffect(() => {
        if (isLikedUser()) {
            animation.current.play(19, 50);
        } else {
            animation.current.play(0, 19);
        }
    }, [currentPost.data.reactions])

    const heartEvent = async () => {
        if (isLikedUser()) {
            dispatch(unLikePost({ post: currentPost.data, user: currentUser }))

        } else {
            dispatch(likePost({ post: currentPost.data, user: currentUser }))
        }

        await likeDislikePost(currentPost.data._id).then(res => {
            console.log(res.data.message)
        }).catch(err => {
            if (err.response) {
                console.log(err.response.data.error)
                // setError(...err, err.response.data.error)
            }
        })
    }

    const followEvent = () => {
        useFollow(currentPost.data.author._id)
    }


    return (
        <View style={styles.container}>
            <InfinityScrollView useLoads={useFetchComment}>
                <View style={styles.topPost}>
                    <View style={styles.avatarAndNameView}>
                        <AvatarUser
                            sizeImage={40}
                            profile={currentPost.data.author}
                        />
                        <View style={styles.nameAndTimeView}>
                            <Text style={styles.nameUserText}>
                                {currentPost.data.author.username}

                                {currentPost.data.location.name !== '' && <Text style={[styles.nameUserText, { fontWeight: 'normal' }, { fontSize: 14 }]}> is in</Text>}
                                {currentPost.data.location && <Text style={[styles.nameUserText, { fontSize: 14 }]}> {currentPost.data.location.name}</Text>}
                            </Text>
                            <Text style={styles.timePost}>
                                {moment(currentPost.data.created_at).fromNow()}
                                {/* {moment(props.post.created_at).fromNow()} */}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Entypo
                            name='dots-three-vertical'
                            size={22}
                            style={{
                                color: color.textIconSmall,
                                marginTop: 10
                            }}
                        ></Entypo>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentPost}>
                    {
                        // props.post.content ?
                        //     <Text style={{
                        //         marginLeft: 25,
                        //         marginBottom: 10
                        //     }}>
                        //         {props.post.content}
                        //     </Text> :
                        //     null
                        <Text style={{
                            marginLeft: 25,
                            marginBottom: 10
                        }}>
                            {currentPost.data.content}
                        </Text>
                    }

                    <View style={styles.imageFrame}>

                        {currentPost.data.photos && currentPost.data.photos.length > 0 ? <SwipeSlide photos={currentPost.data.photos} /> : null}
                    </View>
                </View>
                <View style={styles.midPost}>
                    <View style={styles.heartCommentShareAndBookView}>
                        <View style={styles.heartCommentShareView}>
                            <TouchableOpacity onPress={heartEvent}>
                                <LottieView
                                    ref={animation}
                                    style={styles.heartIconLottie}
                                    source={require("../../../assets/lottie/44921-like-animation.json")}
                                    autoPlay={false}
                                    loop={false}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <FontAwesome style={styles.commentIcon} name='comments-o' size={26} color={color.textIconSmall}></FontAwesome>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={onShare}>
                                <FontAwesome style={styles.shareIcon} name='share' size={22} color={color.textIconSmall}></FontAwesome>
                            </TouchableOpacity>
                        </View>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{
                                paddingRight: 20,
                                borderColor: color.textIconSmall,
                                marginLeft: 10,
                            }}
                        >
                            {/* <RecipeShowed food='https://i.pinimg.com/564x/3d/43/b5/3d43b5816213b46616e178174f2c2dbb.jpg' /> */}

                            {currentPost.data.foods && currentPost.data.foods.length > 0 ? (
                                currentPost.data.foods.map((food) => (
                                    <RecipeShowed food={food} key={food._id} />
                                ))
                            ) : null}

                        </ScrollView>

                    </View>
                </View>
                <View style={styles.botPost}>
                    <TouchableOpacity>
                        <Text style={styles.heartNumber}>{currentPost.data.num_heart === 0 ? 'Give your first reaction' : isLikedUser() ? `Liked by you and ${currentPost.data.num_heart - 1} others people` : `Liked by ${currentPost.data.num_heart} others people`}</Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity>
                        <Text style={styles.commentNumber}>{currentPost.data.num_comment === 0 ? 'No comment' : `View all ${currentPost.data.num_comment} comments`}</Text>
                    </TouchableOpacity> */}
                </View>


                <View style={styles.commentListView}>
                    {currentPost.comments && currentPost.comments.map(comment => {
                        return <>
                            <PostComment onReplyPress={handleReplyPress} comment={comment} key={comment._id} />

                            {
                                comment.children && comment.children.map((i, index) => {
                                    return <PostComment
                                        key={i._id}
                                        comment={i}
                                        leftMargin={60}
                                    />
                                })
                            }
                        </>

                    })

                    }
                    {/* <PostComment /> */}
                </View>
            </InfinityScrollView>


            <View style={styles.commentTypeView}>
                {
                    isReplyPress ?
                        <InputComment
                            nameUserReply={nameUser}
                            onCloseReply={handleCloseReplying}
                            onAddComment={handleAddReplyComment}
                            onChangeText={onChangeContent}
                            content={payload.content}
                            loading={loading}
                            isReply={isReplyPress}
                        />
                        :
                        <InputComment
                            nameUserReply='none'
                            displayReply='none'
                            onAddComment={handleAddComment}
                            onChangeText={onChangeContent}
                            content={payload.content}
                            isReply={isReplyPress}
                            loading={loading}
                        />
                }
            </View>
        </View>
    )
}

export default DetailedPostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
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
    commentListView: {
        paddingVertical: 10,
    },
    commentTypeView: {
        paddingTop: 5,
    }
})