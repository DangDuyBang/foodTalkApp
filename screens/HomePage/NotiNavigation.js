import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../../contains/color'
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator } from "@react-navigation/stack";
import NotificationScreen from './NotificationScreen';

const Stack = createStackNavigator();
const NotiNavigation = ({ navigation }) => {
    const eventChat = () => {
        navigation.navigate('ChatNavigation')
    }
    return (
        <Stack.Navigator>
            <Stack.Screen name='NotificationPage' component={NotificationScreen} options={{
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

export default NotiNavigation

const styles = StyleSheet.create({
    chatFrame: {
        marginRight: 16,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
})