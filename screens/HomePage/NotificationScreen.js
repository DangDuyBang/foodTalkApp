import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../../contains/color'
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const NotificationScreen = ({ navigation }) => {

  const Notification = () => {
    return (
      <View style={styles.container}>
        

      </View>
    )
  }

  const eventChat = () => {
    navigation.navigate('ChatNavigation')
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name='NotificationPage' component={Notification} options={{
        title: 'Notifications',
        headerRight: () => (
        <View style={styles.chatFrame}>
          <TouchableOpacity onPress={eventChat}>
            <Ionicons name='chatbubble-ellipses-outline' size={28} color={color.primary}></Ionicons>
          </TouchableOpacity>
        </View>)
      }} />
    </Stack.Navigator>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    paddingTop: 35,
    paddingBottom: 65
  },
  topView: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 7,
    paddingHorizontal: 15
  },
  topText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 70,
    color: color.textGray,
  },
  chatFrame: {
    // backgroundColor: color.post,
    // width: 50,
    // height: 50,
    marginRight: 16,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
})