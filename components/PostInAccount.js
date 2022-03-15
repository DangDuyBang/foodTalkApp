import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import color from '../contains/color'

const PostInAccount = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagePostInAccount}
        source={{
          uri: props.imagePostInAccount,
        }}
      />
    </View>
  )
}

export default PostInAccount

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 180,
    borderRadius: 30,
    backgroundColor: color.textIconSmall,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 7,
    marginBottom: 15,
  },
  imagePostInAccount: {
    width: 180,
    height: 180,
    borderRadius: 30,
  }
})