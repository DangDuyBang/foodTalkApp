import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../../contains/color'
import PostInAccount from '../../../components/PostInAccount'
import InfinityScrollView from '../../../components/InfinityScrollView'
import { useSelector } from 'react-redux'
import useFetchPost from '../../HomePage/hooks/useFetchPost'

const ImagePic = {
    imagePost_first: 'https://i.pinimg.com/564x/3f/32/94/3f32941eb6f31b5b7b972da29aefa329.jpg',

    imagePost_fith: 'https://i.pinimg.com/564x/fd/c9/c4/fdc9c4dc5ac319f37d2072054acec0b2.jpg',

    imagePost_sixth: 'https://i.pinimg.com/564x/3b/38/bc/3b38bc462ced2aab576dc3965515fda7.jpg',

    imagePost_seventh: 'https://i.pinimg.com/736x/99/4e/de/994ede70d8621abfd4d7ec7e4d12dced.jpg',
}

const PublicPostScreen = () => {
    const posts = useSelector(state => state.user.selectedUserProfile.posts)
    const { fetchSelectedUserPosts } = useFetchPost()

    return (
        <InfinityScrollView onLoads={fetchSelectedUserPosts}>
            <View style={styles.container}>
                {posts && posts.map(post => <PostInAccount imagePostInAccount={post.photos[0]} />)}
            </View>
        </InfinityScrollView>
    )
}

export default PublicPostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
        //paddingHorizontal: 10,
        //paddingVertical: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})