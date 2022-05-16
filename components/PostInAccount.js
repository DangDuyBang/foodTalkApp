import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import color from '../contains/color'
const WIDTH = Dimensions.get('window').width

const PostInAccount = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image
          style={styles.imagePostInAccount}
          source={{
            uri: props.imagePostInAccount,
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