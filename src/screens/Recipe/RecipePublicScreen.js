import { StyleSheet, View } from "react-native";
import React from "react";
import RecipePreview from "../../components/recipe/RecipePreview";
import InfinityScrollView from "../../components/view/InfinityScrollView";
import { useSelector } from "react-redux";
import uuid from "react-native-uuid";
import { lightTheme, darkTheme } from "../../assets/color/Theme";
import FoodServices from "../../services/FoodServices";

const RecipePublicScreen = () => {
  const theme = useSelector((state) => state.theme.theme);

  const styles = theme.mode === "light" ? styles_light : styles_dark;

  const { fetchPersonalFoods } = FoodServices();
  const foods = useSelector((state) => state.food.userFoods);

  return (
    <View style={styles.container}>
      <InfinityScrollView
        onLoads={
          foods.count !== 0 && foods.rows.length > foods.count
            ? null
            : fetchPersonalFoods(foods.currentPage, 20)
        }
      >
        {foods &&
          foods.rows.map((food) => (
            <RecipePreview data={food} key={uuid.v4()} />
          ))}
        {/* Sử dụng Component RecipePreview để hiển thị ở trang này */}
        {/* <RecipePreview /> */}
      </InfinityScrollView>
    </View>
  );
};

export default RecipePublicScreen;

const styles_light = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
    // paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 130,
  },
});

const styles_dark = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
    // paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 130,
  },
});
