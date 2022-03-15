import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import color from '../../contains/color'
import InputSearch from '../../components/InputSearch'
import { Ionicons } from '@expo/vector-icons'
import SwipeSlide from '../../components/SwipeSlide'
import ExploreItem from '../../components/ExploreItem'

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <InputSearch inputIcon='search' inputName='Search' widthSearch={320} />
        <View style={styles.chatFrame}>
          <TouchableOpacity>
            <Ionicons name='chatbubble-ellipses-outline' size={28} color={color.primary}></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.bodyView}>
          <SwipeSlide />
          <ExploreItem iconLeft='trending-up' tittleLeft='Trending'/>
          <ExploreItem iconLeft='restaurant-outline' tittleLeft='Recent Restaurant'/>
          <ExploreItem iconLeft='book-outline' tittleLeft='Recipe'/>
          <ExploreItem iconLeft='fast-food-outline' tittleLeft='Food Review'/>
        </View>
      </ScrollView>
    </View>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    paddingTop: 30,
    paddingBottom: 65
  },
  topView: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    alignItems: 'center'
  },
  chatFrame: {
    backgroundColor: color.post,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bodyView: {
    paddingTop: 10
  },
})