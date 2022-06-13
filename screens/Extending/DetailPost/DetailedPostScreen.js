import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Share } from 'react-native'
import React, { useState } from 'react'
import color from '../../../contains/color'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import LottieView from 'lottie-react-native'
import AvatarUser from '../../../components/AvatarUser'
import SwipeSlide from '../../../components/SwipeSlide'
import RecipeShowed from '../../../components/RecipeShowed'
import moment from 'moment'
import PostComment from '../../../components/PostComment'

const DetailedPostScreen = ({ navigation }) => {

    navigation.setOptions({
        title: 'Username của bài Post',
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
            <ScrollView>
                <View style={styles.topPost}>
                    <View style={styles.avatarAndNameView}>
                        <AvatarUser
                            sizeImage={40}
                            profile='https://i.pinimg.com/564x/e1/12/8b/e1128b291fa9c9a540157afe8f2c90f6.jpg'
                        />
                        <View style={styles.nameAndTimeView}>
                            <Text style={styles.nameUserText}>
                                Dang Duy Bang

                                {/* {props.post.author ? props.post.author.username : ''}

                            {props.post.location.name !== '' && <Text style={[styles.nameUserText, { fontWeight: 'normal' }, { fontSize: 14 }]}> is in</Text>}
                            {props.post.location && <Text style={[styles.nameUserText, { fontSize: 14 }]}> {props.post.location.name}</Text>} */}
                            </Text>
                            <Text style={styles.timePost}>
                                a few minutes
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
                            Hello
                        </Text>
                    }

                    <View style={styles.imageFrame}>
                        <SwipeSlide />
                        {/* {props.post.photos && props.post.photos.length > 0 ? <SwipeSlide photos={props.post.photos} /> : null} */}
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
                            <RecipeShowed food='https://i.pinimg.com/564x/3d/43/b5/3d43b5816213b46616e178174f2c2dbb.jpg' />
                            {
                                /* {props.post.foods && props.post.foods.length > 0 ? (
                                    props.post.foods.map((food) => (
                                        <RecipeShowed food={food} key={food._id} />
                                    ))
                                ) : null} */
                            }
                        </ScrollView>

                    </View>
                </View>
                <View style={styles.botPost}>
                    <TouchableOpacity>
                        {/* <Text style={styles.heartNumber}>{props.post.num_heart === 0 ? 'Give your first reaction' : isLikedUser() ? `Liked by you and ${props.post.num_heart - 1} others people` : `Liked by ${props.post.num_heart} others people`}</Text> */}
                    </TouchableOpacity>

                    <TouchableOpacity>
                        {/* <Text style={styles.commentNumber}>{props.post.num_comment === 0 ? 'No comment' : `View all ${props.post.num_comment} comments`}</Text> */}
                    </TouchableOpacity>
                </View>

                <View style={styles.commentListView}>
                    {/* <PostComment /> */}
                    <Text style={{
                        marginBottom: 40
                    }}>
                        Hiển thị các comment của bài viết phía dưới này
                    </Text>
                    <Text style={{
                        marginBottom: 40
                    }}>
                        Hiển thị các comment của bài viết phía dưới này
                    </Text>
                    <Text style={{
                        marginBottom: 40
                    }}>
                        Hiển thị các comment của bài viết phía dưới này
                    </Text>
                    <Text style={{
                        marginBottom: 40
                    }}>
                        Hiển thị các comment của bài viết phía dưới này
                    </Text>
                    <Text style={{
                        marginBottom: 40
                    }}>
                        Hiển thị các comment của bài viết phía dưới này
                    </Text>
                    <Text style={{
                        marginBottom: 40
                    }}>
                        Hiển thị các comment của bài viết phía dưới này
                    </Text>
                    <Text style={{
                        marginBottom: 40
                    }}>
                        Hiển thị các comment của bài viết phía dưới này
                    </Text>
                    <Text style={{
                        marginBottom: 40
                    }}>
                        Hiển thị các comment của bài viết phía dưới này
                    </Text>
                    <Text style={{
                        marginBottom: 40
                    }}>
                        Hiển thị các comment của bài viết phía dưới này
                    </Text>
                </View>
            </ScrollView>
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
        paddingHorizontal: 20,
        paddingVertical: 10,
    }
})