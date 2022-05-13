import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../contains/color'

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
    width: 175,
    height: 175,
    borderRadius: 30,
    backgroundColor: color.textIconSmall,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 7,
    marginBottom: 15,
  },
  imagePostInAccount: {
    width: 175,
    height: 175,
    borderRadius: 30,
  }
})