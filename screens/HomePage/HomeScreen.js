import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import color from '../../contains/color'
import { MaterialIcons } from '@expo/vector-icons'
import Post from '../../components/Post'
import useFetchPost from './hooks/useFetchPost'
import { useSelector } from 'react-redux'
import { ScrollView } from '@stream-io/flat-list-mvcp';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native'
import Shortcut from '../../components/Shortcut'

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
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator = {false}>
        <View style={{
          backgroundColor: color.background,
          marginBottom: 3,
          marginTop: 5,
          paddingTop: 10,
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,

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

            <TouchableOpacity onPress={eventRecentRestaurant}>
              <MaterialIcons name='photo-library' size={28} color={color.iconGreen}></MaterialIcons>
            </TouchableOpacity>
          </View>

          <View style={styles.shortcutView}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator = {false}>
              <Shortcut
                nameShortcut="Add Recipe"
                iconShortcut="silverware-clean"
                iconColor={color.primary}
                onFunction={() => { navigation.navigate("NewRecipe") }}
              />
              <Shortcut
                nameShortcut="Recent Restaurant"
                iconShortcut="map-marker-radius"
                iconColor={color.errorColor}
              />
              <Shortcut
                nameShortcut="Review Video"
                iconShortcut="video-check"
                iconColor={color.textBlue}
              />
              <Shortcut
                nameShortcut="Live Stream"
                iconShortcut="video-wireless"
                iconColor={color.errorColor}
              />
            </ScrollView>
          </View>
        </View>


        <View style={styles.body}>
          {
            posts && posts.length > 0 ?
              posts.map((post, index) =>
                <Post post={post} key={post._id}></Post>
              )
              :
              <View style={{
                alignItems: 'center'
              }}>
                <LottieView
                  source={require('../../assets/lottie/spoon-loading-utensils.json')}
                  autoPlay loop
                  style={{
                    width: 230,
                    height: 230,
                  }}
                />
              </View>

          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.post,
    // paddingBottom: 80,
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
    backgroundColor: color.post,
    paddingBottom: 80,
  },
  shortcutView: {
    borderColor: color.textIconSmall,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 10,
    marginTop: 10,
    backgroundColor: '#F6F2F2'
  }
})