import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import color from "../../../contains/color";
import { AntDesign } from "@expo/vector-icons";
import InputSearch from "../../../components/input/InputSearch";
import RecipePreview from "../../../components/recipe/RecipePreview";
import useRecipeActions from "./hooks/useRecipeActions";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import uuid from "react-native-uuid";
import { setCurrenFood } from "../../../redux/foodReducer";

const RecipeListScreen = ({ navigation }) => {
  navigation.setOptions({
    title: "Explore Recipe",
    headerRight: () => (
      <TouchableOpacity style={{ marginRight: 20 }} onPress={eventNewRecipe}>
        <AntDesign name="plus" size={30} color={color.primary}></AntDesign>
      </TouchableOpacity>
    ),
  });

  const { loading, handleSearchChange } = useRecipeActions();

  const foodsSearch = useSelector((state) => state.food.foods);

  // const handleDetailRecipe = (data) => {
  //     navigation.navigate('DetailRecipe')
  //     dispatch(setCurrenFood(data))
  // }

  const eventNewRecipe = () => {
    navigation.navigate("NewRecipe");
  };

  return (
    <View style={styles.container}>
      <InputSearch
        inputIcon="search"
        inputName="Search Recipe"
        widthSearch={380}
        style={{ paddingHorizontal: 8 }}
        setNameText={handleSearchChange}
      />
      <ScrollView>
        <View style={styles.bodyView}>
          {foodsSearch.length !== 0 ? (
            foodsSearch.map((recipe) => (
              <RecipePreview
                key={uuid.v4()}
                data={recipe}
                // onDetailRecipe={handleDetailRecipe}
              />
            ))
          ) : (
            <View
              style={{
                alignItems: "center",
              }}
            >
              <LottieView
                source={require("../../../assets/lottie/data-loading-animation.json")}
                autoPlay
                loop
                style={{
                  width: 160,
                  height: 160,
                }}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default RecipeListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    paddingBottom: 10,
    paddingTop: 16,
  },
  bodyView: {
    marginTop: 16,
  },
});
