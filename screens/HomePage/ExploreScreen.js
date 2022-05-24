import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../../contains/color'
import InputSearch from '../../components/InputSearch'
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator } from "@react-navigation/stack";
import Explore from './Explore'

const Stack = createStackNavigator();

const ExploreScreen = ({ navigation }) => {

  const eventChat = () => {
    navigation.navigate('ChatNavigation')
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name='ExplorePage' component={Explore} options={{
        headerTitle: () => (
          <InputSearch inputIcon='search' inputName='Search' autoFocus = {true}/>
        ),
        headerRight: () => (
          <View style={styles.chatFrame}>
            <TouchableOpacity onPress={eventChat}>
              <Ionicons name='chatbubble-ellipses-outline' size={28} color={color.primary}></Ionicons>
            </TouchableOpacity>
          </View>
        )
      }} />
    </Stack.Navigator>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    paddingBottom: 65
  },
  topView: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    alignItems: 'center'
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
  bodyView: {
    paddingTop: 10
  },
})