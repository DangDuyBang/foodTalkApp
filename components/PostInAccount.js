import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import color from '../contains/color'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setCurrentPost } from '../redux/postReducer'
const WIDTH = Dimensions.get('window').width

const PostInAccount = (props) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const handlePress = () => {
    dispatch(setCurrentPost(props.post))
    navigation.navigate('DetailedPost')
  }
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Image
          style={styles.imagePostInAccount}
          source={{
            uri: props.post.photos[0],
          }}
        />
      </View>
    </TouchableOpacity>
  )
}

export default PostInAccount

const styles = StyleSheet.create({
  container: {
    width: WIDTH / 3,
    height: WIDTH / 3,
    backgroundColor: color.textIconSmall,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePostInAccount: {
    width: '100%',
    height: '100%',
  }
})