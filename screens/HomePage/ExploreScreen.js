import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../../contains/color'
import InputSearch from '../../components/InputSearch'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { createStackNavigator } from "@react-navigation/stack";
import Explore from './Explore'

const Stack = createStackNavigator();

const ExploreScreen = ({ navigation }) => {

  const eventChat = () => {
    navigation.navigate('ChatNavigation')
  }

  const eventToSearch = () => {
    navigation.navigate('Search')
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name='ExplorePage' component={Explore} options={{
        headerTitle: () => (
          // <InputSearch inputIcon='search' inputName='Search' autoFocus = {true}/>
          <TouchableOpacity onPress={eventToSearch}>
            <View style={{
              width: '100%',
              flexDirection: 'row',
              backgroundColor: color.inputColor,
              paddingHorizontal: 15,
              borderRadius: 25,
              alignItems: 'center',
              height: 40,
            }}>
              <FontAwesome
                name='search'
                size={20}
                style={{
                  color: color.textIconSmall,
                  marginRight: 10,
                }}
              ></FontAwesome>
              <Text style={{
                color: color.hideColor
              }}>
                Search
              </Text>
            </View>
          </TouchableOpacity>
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