import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import color from "../../assets/color/color";
import VideoItem from "../../components/video/videoItem";
import { data, windowHeight } from '../../constants/Constants'

const Explore = ({ navigation }) => {

  const [activeVideoIndex, setActiveVideoIndex] = useState(0)

  const bottomTabHeight = useBottomTabBarHeight();

  // //Focus Event: to be fired when the HomeScreen is focused.
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     console.log('Focus');
  //     //Every time the screen is focused the Video starts playing
  //     if (video) {
  //       video.playAsync();
  //     }
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  // //Blur Event: to be fired when the HomeScreen loses focus.
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('blur', () => {
  //     console.log('Blur');
  //     //Every time the screen loses focus the Video is paused
  //     if (video) {
  //       video.pauseAsync();
  //     }
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  return (
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
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    paddingBottom: 65,
  },
});
