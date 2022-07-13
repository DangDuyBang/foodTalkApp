import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import React, { useState } from "react";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import color from "../../assets/color/color";
import VideoItem from "../../components/video/videoItem";
import { data, windowHeight } from '../../constants/Constants'

const Explore = () => {

  const [activeVideoIndex, setActiveVideoIndex] = useState(0)

  const bottomTabHeight = useBottomTabBarHeight() - 30;

  return (
    <FlatList
      data={data}
      pagingEnabled
      renderItem={({ item, index }) => (
        <VideoItem key={index} data={item} isActive={activeVideoIndex === index} />
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
