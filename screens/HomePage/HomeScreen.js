import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import color from '../../contains/color'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import Post from '../../components/Post'
import NewPostScreen from '../HomePage/NewPostScreen';
import { config, closeConfig, } from '../../utils/ScreenConfig'
import { createStackNavigator, TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';

const ImagePic = {
  avatar_user_first: 'https://i.pinimg.com/564x/35/e9/f7/35e9f7e7b6ce436d9360d3d7e7b50c92.jpg',
  avatar_commenter_first: 'https://i.pinimg.com/564x/56/b3/50/56b35038355d30144518be9992ab2667.jpg',
  imagePost_first: 'https://i.pinimg.com/564x/b6/f1/87/b6f1875af462a35d69ea478ebf259f90.jpg',

  avatar_user_second: 'https://i.pinimg.com/564x/a9/d7/63/a9d763b5ad5a8bb3ecd3992ac4347419.jpg',
  avatar_commenter_second: 'https://i.pinimg.com/564x/73/97/5b/73975b971197423b757b457d5866653a.jpg',
  imagePost_second: 'https://i.pinimg.com/564x/78/2c/fa/782cfa2f03d9e93371deedcd7e9d33a6.jpg',

  avatar_user_third: 'https://i.pinimg.com/564x/8b/1b/be/8b1bbe1a21d0b228e8e92c350be40201.jpg',
  avatar_commenter_third: 'https://i.pinimg.com/564x/01/69/79/01697950bfa6134063e42bfc9cfba720.jpg',
  imagePost_third: 'https://i.pinimg.com/564x/42/94/72/42947210c7ddcbc1b77c591ec3ebcbfa.jpg',

  avatar_user_fouth: 'https://i.pinimg.com/564x/a4/3a/a8/a43aa8c890c52498da1772b4ebc3b347.jpg',
  avatar_commenter_fouth: 'https://i.pinimg.com/736x/b5/de/a6/b5dea6801e5dbf5a3eb71321a4214925.jpg',
  imagePost_fouth: 'https://i.pinimg.com/564x/3f/32/94/3f32941eb6f31b5b7b972da29aefa329.jpg',

  avatar_user_fith: 'https://i.pinimg.com/736x/00/5d/6a/005d6a1a3f1570f69d05890fdc108b22.jpg',
  avatar_commenter_fith: 'https://i.pinimg.com/564x/ac/6f/7f/ac6f7fda3d18c5ced8f660291a3f0921.jpg',
  imagePost_fith: 'https://i.pinimg.com/564x/fd/c9/c4/fdc9c4dc5ac319f37d2072054acec0b2.jpg',

  avatar_user_sixth: 'https://i.pinimg.com/736x/5a/27/28/5a272830589d98e6df4afdbbcec6123c.jpg',
  avatar_commenter_sixth: 'https://i.pinimg.com/564x/09/a9/2c/09a92c1cbe440f31d1818e4fe0bcf23a.jpg',
  imagePost_sixth: 'https://i.pinimg.com/564x/3b/38/bc/3b38bc462ced2aab576dc3965515fda7.jpg',

  avatar_user_seventh: 'https://i.pinimg.com/564x/32/a5/d1/32a5d1422e2ad0282ebdc358bf6e76ab.jpg',
  avatar_commenter_seventh: 'https://i.pinimg.com/564x/49/26/98/492698ca2e998f57baf340ba99cafb54.jpg',
  imagePost_seventh: 'https://i.pinimg.com/736x/99/4e/de/994ede70d8621abfd4d7ec7e4d12dced.jpg',
}
const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {

  const eventRecentRestaurant = () => {
    alert('Chức năng hiển thị nhà hàng gần đây')
  }

  const Home = () => {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 12,
            paddingHorizontal: 20,
            backgroundColor: color.background,
            marginBottom: 3,
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '90%'
            }}>
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
                  marginLeft: 10,
                  paddingVertical: 11,
                  paddingLeft: 7,
                  borderRadius: 100,
                  justifyContent: 'center',
                  width: 285
                }}>
                  <Text style={{
                    fontFamily: 'Roboto',
                    fontSize: 15,
                    marginLeft: 7,
                    color: color.textGray,
                  }}> Share your story with everyone.</Text>
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={eventRecentRestaurant}>
              <MaterialIcons name='place' size={28} color={color.errorColor}></MaterialIcons>
            </TouchableOpacity>
          </View>

          <View style={styles.body}>
            <Post
              avatar={ImagePic.avatar_user_first}
              nameUser='bbang_food_talk'
              timePost='1 hour ago'
              imagePost={ImagePic.imagePost_first}
              caption='It`s delicous ! Invite everyone '
              heartCount='26'
              commentCount='11'
              avatarCommenter={ImagePic.avatar_commenter_first}
              nameCommenter='khoa_food_talk'
              timeComment='30 minutes ago'
              contentComment='Wow ! Congratulation. I want it'
              onCommentList={eventOpenCommentList}
              isLiked={true}
              isFollow={false}
              onPersonalPage={eventToPersonalPage}
              isIn="is in"
              addressCheckIn="460C, Nguyễn Tất Thành, Phường 7, Quận 4, TP Hồ Chí Minh"
            />
            <Post
              avatar={ImagePic.avatar_user_second}
              nameUser='cho_food_talk'
              timePost='2 hours ago'
              imagePost={ImagePic.imagePost_second}
              caption='Hi, this is a first time'
              heartCount='12'
              commentCount='0'
              avatarCommenter={ImagePic.avatar_commenter_second}
              nameCommenter='ga_food_talk'
              timeComment='25 minutes ago'
              contentComment='Hmmm! Look great !'
              isLiked={false}
              isFollow={true}
              firstComment='none'
            />
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
          </View>
        </ScrollView>
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