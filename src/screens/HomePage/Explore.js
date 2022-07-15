import { StyleSheet, View, ScrollView, FlatList, TouchableOpacity, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import color from "../../assets/color/color";
import VideoItem from "../../components/video/videoItem";
import { data, windowHeight, windowWidth } from '../../constants/Constants'
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Navigators from "../../navigators/navigators/Navigators";

const Explore = ({ navigation }) => {

  const { navigateToSearch } = Navigators();

  const [activeVideoIndex, setActiveVideoIndex] = useState(0)

  const bottomTabHeight = useBottomTabBarHeight();

  //Focus Event: to be fired when the HomeScreen is focused.
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // console.log('Focus');
      // //Every time the screen is focused the Video starts playing
      // if (video) {
      //   video.playAsync();
      // }
    });

    return unsubscribe;
  }, [navigation]);

  //Blur Event: to be fired when the HomeScreen loses focus.
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      // console.log('Blur');
      // //Every time the screen loses focus the Video is paused
      // if (video) {
      //   video.pauseAsync();
      // }
      setActiveVideoIndex(false);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>

      <FlatList
        data={data}
        pagingEnabled
        renderItem={({ item, index }) => (
          <VideoItem
            key={index}
            data={item}
            isActive={activeVideoIndex === index}
          />
        )}

        onScroll={e => {
          const index = Math.round(
            e.nativeEvent.contentOffset.y / (windowHeight - bottomTabHeight)
          );
          setActiveVideoIndex(index);
        }}
      />

      <View style={styles.topView}>
        <TouchableOpacity onPress={navigateToSearch} >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              backgroundColor: "transparent",
              paddingHorizontal: 15,
              borderRadius: 25,
              alignItems: "center",
              height: 40,
              borderColor: color.background,
              borderWidth: 1.5,
              width: windowWidth - 30
            }}
          >
            <FontAwesome
              name="search"
              size={22}
              style={{
                color: color.background,
                marginRight: 10,
              }}
            ></FontAwesome>
            <Text
              style={{
                color: color.background,
                fontSize: 16
              }}
            >
              Search
            </Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topView: {
    position: 'absolute',
    width: '100%',
    top: 30,
    alignItems: 'center'
  }
});
