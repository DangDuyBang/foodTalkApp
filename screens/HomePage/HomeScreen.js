import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import color from '../../contains/color'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import Post from '../../components/Post'
import NewPostScreen from '../HomePage/NewPostScreen';
import { config, closeConfig, } from '../../utils/ScreenConfig'
import { createStackNavigator, TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';
import useFetchPost from './hooks/useFetchPost'
import { PostContext } from '../../providers/PostProvider'

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {

  const eventRecentRestaurant = () => {
    alert('Chức năng hiển thị nhà hàng gần đây')
  }

  const { useFetchAllPost, loading } = useFetchPost();
  const { postState } = React.useContext(PostContext);

  React.useEffect(() => {
    async function useLoads() {
      await useFetchAllPost()
      console.log(postState.posts);
    }

    useLoads()
  }, [])


  const Home = () => {
    return (
      <View style={styles.container}>
        <ScrollView>
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
            {postState.posts && postState.posts.length > 0 && postState.posts.map((post, index) => 
              <Post post={post} key={post.id}></Post>
            )}
          </View>
        </ScrollView>
        {/* //   avatar={ImagePic.avatar_user_first}
          //   nameUser='bbang_food_talk'
          //   timePost='1 hour ago'
          //   imagePost={ImagePic.imagePost_first}
          //   caption='It`s delicous ! Invite everyone '
          //   heartCount='26'
          //   commentCount='11'
          //   avatarCommenter={ImagePic.avatar_commenter_first}
          //   nameCommenter='khoa_food_talk'
          //   timeComment='30 minutes ago'
          //   contentComment='Wow ! Congratulation. I want it'
          //   onCommentList={eventOpenCommentList}
          //   isLiked={true}
          //   isFollow={false}
          //   onPersonalPage={eventToPersonalPage}
          //   isIn="is in"
          //   addressCheckIn="460C, Nguyễn Tất Thành, Phường 7, Quận 4, TP Hồ Chí Minh"
          // />
          // <Post
          //   avatar={ImagePic.avatar_user_second}
          //   nameUser='cho_food_talk'
          //   timePost='2 hours ago'
          //   imagePost={ImagePic.imagePost_second}
          //   caption='Hi, this is a first time'
          //   heartCount='12'
          //   commentCount='0'
          //   avatarCommenter={ImagePic.avatar_commenter_second}
          //   nameCommenter='ga_food_talk'
          //   timeComment='25 minutes ago'
          //   contentComment='Hmmm! Look great !'
          //   isLiked={false}
          //   isFollow={true}
          //   firstComment='none'
          // /> */}
        {/* <Post
            avatar={ImagePic.avatar_user_third}
            nameUser='jerry_food_talk'
            timePost='3 hours ago'
            imagePost={ImagePic.imagePost_third}
            caption='mlem mlem...'
            heartCount='40'
            commentCount='10'
            avatarCommenter={ImagePic.avatar_commenter_third}
            nameCommenter='tom_food_talk'
            timeComment='1 hours ago'
            contentComment='What a great ! Can you guide me do it ?' />
          <Post
            avatar={ImagePic.avatar_user_fouth}
            nameUser='girl_food_talk'
            timePost='5 hours ago'
            imagePost={ImagePic.imagePost_fouth}
            caption='Do you have any one eat with me ?'
            heartCount='6'
            commentCount='5'
            avatarCommenter={ImagePic.avatar_commenter_fouth}
            nameCommenter='boy_food_talk'
            timeComment='1 hours ago'
            contentComment='I can hihi' />
          <Post
            avatar={ImagePic.avatar_user_fith}
            nameUser='tan_food_talk'
            timePost='1 hour ago'
            imagePost={ImagePic.imagePost_fith}
            caption='It`s delicous ! Invite everyone'
            heartCount='26'
            commentCount='11'
            avatarCommenter={ImagePic.avatar_commenter_fith}
            nameCommenter='khoa_food_talk'
            timeComment='30 minutes ago'
            contentComment='Wow ! Congratulation. I want it' />
          <Post
            avatar={ImagePic.avatar_user_sixth}
            nameUser='tan_food_talk'
            timePost='1 hour ago'
            imagePost={ImagePic.imagePost_sixth}
            caption='It`s delicous ! Invite everyone'
            heartCount='26'
            commentCount='11'
            avatarCommenter={ImagePic.avatar_commenter_sixth}
            nameCommenter='khoa_food_talk'
            timeComment='30 minutes ago'
            contentComment='Wow ! Congratulation. I want it' />
          <Post
            avatar={ImagePic.avatar_user_seventh}
            nameUser='tan_food_talk'
            timePost='1 hour ago'
            imagePost={ImagePic.imagePost_seventh}
            caption='It`s delicous ! Invite everyone'
            heartCount='26'
            commentCount='11'
            avatarCommenter={ImagePic.avatar_commenter_seventh}
            nameCommenter='khoa_food_talk'
            timeComment='30 minutes ago'
            contentComment='Wow ! Congratulation. I want it' /> */}

        {/* <View style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingRight: 10,
          bottom: '18%',
          right: '3%'
        }}>
          <TouchableOpacity onPress={eventNewPost}>
            <View style={{
              width: 55,
              height: 55,
              borderRadius: 55,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: color.primary,
            }}>
              <Text style={{
                fontSize: 25,
                color: color.background,
              }}>+</Text>
            </View>
          </TouchableOpacity>
        </View> */}
      </View>
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