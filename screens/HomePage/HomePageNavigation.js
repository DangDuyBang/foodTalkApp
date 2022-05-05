import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import color from '../../contains/color'
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'

const Stack = createStackNavigator();

const HomePageNavigation = ({ navigation }) => {
    const eventChat = () => {
        navigation.navigate('ChatNavigation')
      }
    
    return (
        <Stack.Navigator>
            <Stack.Screen name='HomePage' component={HomeScreen} options={{
                title: 'Food Talk',
                headerRight: () =>
                    <View style={styles.iconRightTop}>
                        <View style={styles.searchUserFrame}>
                            <TouchableOpacity>
                                <Ionicons name='search-outline' size={28} color={color.primary}></Ionicons>
                            </TouchableOpacity></View>
                        <View style={styles.chatFrame}>
                            <TouchableOpacity onPress={eventChat}>
                                <Ionicons name='chatbubble-ellipses-outline' size={28} color={color.primary}></Ionicons>
                            </TouchableOpacity></View>
                    </View>
            }} />
        </Stack.Navigator>
    )
}

export default HomePageNavigation

const styles = StyleSheet.create({
    iconRightTop: {
      flexDirection: 'row',
      marginRight: 16,
    },
    searchUserFrame: {
      // backgroundColor: color.post,
      // width: 50,
      // height: 50,
      // borderRadius: 50,
      marginRight: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    chatFrame: {
      // backgroundColor: color.post,
      // width: 50,
      // height: 50,
      // borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })