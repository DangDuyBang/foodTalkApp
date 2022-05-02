import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import color from '../../contains/color'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import Post from '../../components/Post'
import NewPostScreen from '../HomePage/NewPostScreen';
import { config, closeConfig, } from '../../utils/ScreenConfig'
import { createStackNavigator, TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';
import useFetchPost from './hooks/useFetchPost'
import { PostContext } from '../../providers/PostProvider'
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux'
import { ScrollView } from '@stream-io/flat-list-mvcp';
import {SafeAreaView} from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {

  const eventRecentRestaurant = () => {
    alert('Chức năng hiển thị nhà hàng gần đây')
  }

  const { useFetchAllPost, loading } = useFetchPost();
  const posts = useSelector(state => state.post.posts)

  React.useEffect(() => {
    async function useLoads() {
      await useFetchAllPost()
    }

    useLoads()
  }, [])


  const Home = () => {
    return (

      <SafeAreaView style={styles.container}>
        <ScrollView
           maintainVisibleContentPosition={{
            autoscrollToTopThreshold: 20,
            minIndexForVisible: 0,
          }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 8,
            paddingVertical: 8,
            paddingHorizontal: 20,
            backgroundColor: color.background,
            marginBottom: 3,

          }}>
            {/* <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '90%'
            }}> */}
            <TouchableOpacity onPress={() => navigation.navigate('Account')}>
              <Image
                style={styles.avatarImage}
                resizeMode='cover'
                source={{
                  uri: 'https://i.pinimg.com/564x/eb/ef/d5/ebefd5173889e9a8502cf04e7b016847.jpg',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={eventNewPost}>
              <View style={{
                backgroundColor: color.inputColor,
                paddingVertical: 12,
                paddingRight: 16,
                paddingLeft: 8,
                borderRadius: 100,
                justifyContent: 'center',
              }}>
                <Text style={{
                  fontFamily: 'Roboto',
                  fontSize: 15,
                  marginLeft: 7,
                  color: color.textGray,
                }}> Share your story with everyone.</Text>
              </View>
            </TouchableOpacity>
            {/* </View> */}

            <TouchableOpacity onPress={eventRecentRestaurant}>
              <MaterialIcons name='place' size={28} color={color.errorColor}></MaterialIcons>
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            {/* {postState.posts && postState.posts.length > 0 &&
              <FlatList
                keyExtractor={item => item._id}
                extraData = {postState.posts}
                data = {postState.posts}
                renderItem={({ item }) => {
                  return (
                    <Post post={item}></Post>
                  )
                }}>

              </FlatList>} */}
            {posts && posts.length > 0 && posts.map((post, index) =>
              <Post post={post} key={post._id}></Post>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    )

  }

  const eventNewPost = () => {
    navigation.navigate('NewPost')
  }

  const eventChat = () => {
    navigation.navigate('ChatNavigation')
  }

  const eventOpenCommentList = () => {
    navigation.navigate('CommentList')
  }

  const eventToPersonalPage = () => {
    navigation.navigate('PersonalPage')
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name='HomePage' component={Home} options={{
        title: 'Food Talk',
        headerRight: () =>
          <View style={styles.iconRightTop}>
            <View style={styles.searchUserFrame}>
              <TouchableOpacity>
                <Ionicons name='search-outline' size={28} color={color.primary}></Ionicons>
              </TouchableOpacity></View>
            <View style={styles.chatFrame}>
              <TouchableOpacity onPress={eventChat}>
                <Ionicons name='chatbubble-ellipses-outline' size={28} color={color.primary}></Ionicons>
              </TouchableOpacity></View>
          </View>
      }} />
    </Stack.Navigator>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.post,
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 100
  },
  top: {
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    paddingTop: 30,
    paddingVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: color.background
  },
  iconRightTop: {
    flexDirection: 'row',
    marginRight: 16,
  },
  searchUserFrame: {
    // backgroundColor: color.post,
    // width: 50,
    // height: 50,
    // borderRadius: 50,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  chatFrame: {
    // backgroundColor: color.post,
    // width: 50,
    // height: 50,
    // borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    paddingBottom: 80,
  }
})