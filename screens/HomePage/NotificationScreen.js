import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import color from '../../contains/color'
import { createStackNavigator } from "@react-navigation/stack";
import NotifyPreview from '../../components/NotifyPreview';
import {useSelector} from 'react-redux'

const data = [
  {
    id: 1,
    avatarActor: 'https://i.pinimg.com/564x/87/c5/a2/87c5a2e123eadd85ca428d9465e9e963.jpg',
    nameActor: 'nntan',
    notify_typeName: 'just follow you',
    create_at: 'just now'
  },
  {
    id: 2,
    avatarActor: 'https://i.pinimg.com/736x/9d/2a/ad/9d2aad5d4180cebabfccb959b48104d2.jpg',
    nameActor: 'minhdat_gg12',
    notify_typeName: 'likes your post',
    create_at: '13 hours ago'
  },
  {
    id: 3,
    avatarActor: 'https://i.pinimg.com/564x/85/66/fe/8566fe1ba90a84ec1b03c7392fd74866.jpg',
    nameActor: 'DrStrange_wed',
    notify_typeName: 'comments on your post',
    create_at: '1 week ago'
  },
  {
    id: 4,
    avatarActor: 'https://i.pinimg.com/564x/66/c2/3a/66c23ad64221db0cdd347086c8d592d8.jpg',
    nameActor: 'Marvel_ssy234',
    notify_typeName: 'has a new post',
    create_at: 'Feb 21'
  }
]

const Stack = createStackNavigator();
const NotificationScreen = ({ navigation }) => {

 const notifications = useSelector(state => state.ui.notifications)

  return (
    <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <FlatList
            data={notifications}
            renderItem={({ item, index }) => {
              return <NotifyPreview key={item._id} data={item} />
            }}
          />
        </SafeAreaView>
      </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
  chatFrame: {
    marginRight: 16,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
})