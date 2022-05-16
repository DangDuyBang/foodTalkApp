import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import color from '../../contains/color'
import { createStackNavigator } from "@react-navigation/stack";
import NotifyPreview from '../../components/NotifyPreview';
import {useSelector} from 'react-redux'

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