import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import color from "../../assets/color/color";
import RecipePreview from "../../components/recipe/RecipePreview";
import useFetchFood from "../hooks/fetch/useFetchFood";
import InfinityScrollView from "../../components/view/InfinityScrollView";
import { useSelector } from "react-redux";
import uuid from "react-native-uuid";

const RecipePublicScreen = () => {
  const { fetchUserFoodsList } = useFetchFood();
  const foods = useSelector((state) => state.user.currentUser.foods);

  return (
    <View style={styles.container}>
      <InfinityScrollView onLoads={fetchUserFoodsList}>
        {foods &&
          foods.map((food) => <RecipePreview data={food} key={uuid.v4()} />)}
        {/* Sử dụng Component RecipePreview để hiển thị ở trang này */}
        {/* <RecipePreview /> */}
      </InfinityScrollView>
    </View>
  );
};

export default RecipePublicScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    // paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 130,
  },
});
