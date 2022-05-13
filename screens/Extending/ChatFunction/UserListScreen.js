import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import InputSearch from '../../../components/InputSearch'
import color from '../../../contains/color'
import { Ionicons } from '@expo/vector-icons'
import User from '../../../components/User'
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const data = [
  {
    id: '1',
    chatAvatar: 'https://i.pinimg.com/564x/35/e9/f7/35e9f7e7b6ce436d9360d3d7e7b50c92.jpg',
    Fullname: 'Dang Duy Bang',
    Username: 'bbang_food_talk',
    Online: true
  },
  {
    id: '2',
    chatAvatar: 'https://i.pinimg.com/564x/49/b6/79/49b6799e28e25824a8936b818d442481.jpg',
    Fullname: "Dinh Minh Thuy",
    Username: 'thuy_dinh_29',
    Online: false
  },
  {
    id: '3',
    chatAvatar: 'https://i.pinimg.com/564x/c4/83/37/c4833719551572707eb614d06f6082e9.jpg',
    Fullname: "Dinh Thi Bao Chau",
    Username: 'bao_chau',
    Online: false
  },
  {
    id: '4',
    chatAvatar: 'https://growdiaries.com/static/users/photo/43497/6df5165b9e43c97d7aa77abfe5fa56d1_450.jpg',
    Fullname: "Doraemon",
    Username: 'mon_anime',
    Online: true
  },
  {
    id: '5',
    chatAvatar: 'https://i.pinimg.com/564x/7f/fe/43/7ffe43bdb745f58931f01284710d1cc9.jpg',
    Fullname: "Dang Tram Anh",
    Username: 'manh_2603',
    Online: false
  },
  {
    id: '6',
    chatAvatar: 'https://gamek.mediacdn.vn/133514250583805952/2020/5/15/photo-1-15895160830411798901207.jpg',
    Fullname: "Nobi Nobita",
    Username: 'nobita_hsg',
    Online: true
  }, // Dot
]

const UserListScreen = ({ navigation }) => {

  const [lists, setLists] = useState(data)

  const UserList = () => {
    return (
      <View style={styles.container}>
        <View style={{
          marginHorizontal: 15
        }}>
          <InputSearch inputIcon='search' inputName='Search' widthSearch={'100%'} />
        </View>

        <SafeAreaView style={{ flex: 1 }}>
          <FlatList
            data={lists}
            renderItem={({ item, index }) => {
              return <User data={item} />
            }}
          />
        </SafeAreaView>
      </View>
    )
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name='UserListPage' component={UserList} options={{
        title: 'Users List',
      }} />
    </Stack.Navigator>
  )
}

export default UserListScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    paddingBottom: 75,
  },
  topView: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 7,
    paddingHorizontal: 15,
  },
  topText: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: 'bold',
    color: color.textGray,
    marginLeft: 15
  },
})