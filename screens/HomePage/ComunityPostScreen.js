import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../contains/color'
import PostInAccount from '../../components/PostInAccount'
import { useSelector } from 'react-redux'
import InfinityScrollView from '../../components/InfinityScrollView'
import useFetchPost from './hooks/useFetchPost'

const ComunityPostScreen = () => {
    const currentUser = useSelector(state => state.user.currentUser)
    const { fetchUserPosts } = useFetchPost()

    return (
        <InfinityScrollView useLoads={fetchUserPosts}>
            <View style={styles.container}>
                {currentUser.posts && currentUser.posts.map(post => <PostInAccount key={post._id} imagePostInAccount={post.photos[0]} />)}
            </View>
        </InfinityScrollView>
    )
}

export default ComunityPostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        // paddingHorizontal: 10,
        // paddingVertical: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        //paddingTop: 110,
        marginBottom: 10,
    },
})