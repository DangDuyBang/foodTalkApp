import UserList from "./UserList";
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const UserListScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='UserListPage' component={UserList} options={{
        title: 'Users List',
      }} />
    </Stack.Navigator>
  )
}



export default UserListScreen
