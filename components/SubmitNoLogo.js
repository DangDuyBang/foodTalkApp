import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../contains/color'

const SubmitNoLogo = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.containerButton}>
        <Text style={styles.nameStyle}>{props.nameButton}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default SubmitNoLogo

const styles = StyleSheet.create({
  containerButton: {
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 340,
    height: 50,
    borderRadius: 50,
    backgroundColor: color.primary,
  },
  nameStyle: {
    color: color.background,
    fontWeight: 'bold',
    fontSize: 16,
  }
})  