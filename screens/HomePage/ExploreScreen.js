import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import color from '../../contains/color'
import InputSearch from '../../components/InputSearch'
import { Ionicons } from '@expo/vector-icons'
import SwipeSlide from '../../components/SwipeSlide'
import ExploreItem from '../../components/ExploreItem'
import { createStackNavigator } from "@react-navigation/stack";

const ImagePic = {
  imageTrending_first: 'https://i.pinimg.com/564x/b6/f1/87/b6f1875af462a35d69ea478ebf259f90.jpg',
  imageTrending_second: 'https://i.pinimg.com/736x/99/4e/de/994ede70d8621abfd4d7ec7e4d12dced.jpg',
  imageTrending_third: 'https://i.pinimg.com/564x/42/94/72/42947210c7ddcbc1b77c591ec3ebcbfa.jpg',
  imageTrending_fouth: 'https://i.pinimg.com/564x/3f/32/94/3f32941eb6f31b5b7b972da29aefa329.jpg',
  imageTrending_fith: 'https://i.pinimg.com/564x/fd/c9/c4/fdc9c4dc5ac319f37d2072054acec0b2.jpg',
  imageTrending_sixth: 'https://i.pinimg.com/564x/3b/38/bc/3b38bc462ced2aab576dc3965515fda7.jpg',
  imageTrending_seventh: 'https://i.pinimg.com/564x/78/2c/fa/782cfa2f03d9e93371deedcd7e9d33a6.jpg',

  imageRestaurant_first: 'http://moitruongdongnambo.com/uploads/noidung/images/am-thuc-316-tan-phu-dia-chi-quan-ngon-quan-tan-phu-9.JPG',
  imageRestaurant_second: 'https://amthucmaison.com/wp-content/uploads/2019/04/khong-gian-san-vuon-tai-nha-hang-vuon-bia.jpg',
  imageRestaurant_third: 'https://amthucmaison.com/wp-content/uploads/2019/04/khong-gian-tang-1-maison-2.jpg',
  imageRestaurant_fouth: 'https://amthucmaison.com/wp-content/uploads/2019/04/khong-gian-trong-nha-nha-hang-san-ho-do-1.jpg',
  imageRestaurant_fith: 'https://amthucmaison.com/wp-content/uploads/2019/04/dat-tiec-cong-vao-nha-hang-vuon-bia-ha-noi-3.jpg',
  imageRestaurant_sixth: 'https://amthucmaison.com/wp-content/uploads/2019/04/khong-gian-san-vuon-san-ho-do.jpg',
  imageRestaurant_seventh: 'https://amthucmaison.com/wp-content/uploads/2019/04/khong-gian-ngoai-troi-maison-steak-2.jpg',

  imageRecipe_first: 'https://i.pinimg.com/564x/c3/4e/ac/c34eaced8ab78ae705067290afd8d85b.jpg',
  imageRecipe_second: 'https://i.pinimg.com/564x/2d/89/d3/2d89d3036e64796d0cf3f72ea146f4bf.jpg',
  imageRecipe_third: 'https://i.pinimg.com/564x/be/5d/eb/be5deb90bd136270a11c82aa2c563076.jpg',
  imageRecipe_fouth: 'https://i.pinimg.com/736x/a7/f4/d2/a7f4d29eea2cd54b2edfe941f4a65795.jpg',
  imageRecipe_fith: 'https://i.pinimg.com/564x/d8/f6/72/d8f67269ab117e1770b0af2c9c43b8bb.jpg',
  imageRecipe_sixth: 'https://i.pinimg.com/564x/11/8a/9a/118a9af10158ca9950415e15df678785.jpg',
  imageRecipe_seventh: 'https://i.pinimg.com/564x/d8/26/da/d826da1074a62f23e3b0e1e86b0593d5.jpg',
}

const Stack = createStackNavigator();

const ExploreScreen = ({ navigation }) => {

  const Explore = () => {
    return (

      <View style={styles.container}>
        <ScrollView>
          <View style={styles.bodyView}>
            <SwipeSlide />
            <ExploreItem
              iconLeft='trending-up'
              tittleLeft='Trending'
              imagesPic1={ImagePic.imageTrending_first}
              imagesPic2={ImagePic.imageTrending_second}
              imagesPic3={ImagePic.imageTrending_third}
              imagesPic4={ImagePic.imageTrending_fouth}
              imagesPic5={ImagePic.imageTrending_fith}
              imagesPic6={ImagePic.imageTrending_sixth}
              imagesPic7={ImagePic.imageTrending_seventh}
            />
            <ExploreItem
              iconLeft='restaurant-outline'
              tittleLeft='Recent Restaurant'
              imagesPic1={ImagePic.imageRestaurant_first}
              imagesPic2={ImagePic.imageRestaurant_second}
              imagesPic3={ImagePic.imageRestaurant_third}
              imagesPic4={ImagePic.imageRestaurant_fouth}
              imagesPic5={ImagePic.imageRestaurant_fith}
              imagesPic6={ImagePic.imageRestaurant_sixth}
              imagesPic7={ImagePic.imageRestaurant_seventh}
            />
            <ExploreItem
              iconLeft='book-outline'
              tittleLeft='Recipe'
              imagesPic1={ImagePic.imageRecipe_first}
              imagesPic2={ImagePic.imageRecipe_second}
              imagesPic3={ImagePic.imageRecipe_third}
              imagesPic4={ImagePic.imageRecipe_fouth}
              imagesPic5={ImagePic.imageRecipe_fith}
              imagesPic6={ImagePic.imageRecipe_sixth}
              imagesPic7={ImagePic.imageRecipe_seventh}
            />
            <ExploreItem iconLeft='fast-food-outline' tittleLeft='Food Review' />
          </View>
        </ScrollView>
      </View>
    )
  }

  const eventChat = () => {
    navigation.navigate('ChatNavigation')
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name='ExplorePage' component={Explore} options={{
        title: null,
        headerLeft: () => (
          <InputSearch inputIcon='search' inputName='Search'/>
        ),
        headerLeftContainerStyle: {
          width: '85%',
        },
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