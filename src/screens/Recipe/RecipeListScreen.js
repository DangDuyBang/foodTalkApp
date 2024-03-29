import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import uuid from "react-native-uuid";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import color from "../../assets/color/color";
import InputSearch from "../../components/input/InputSearch";
import RecipePreview from "../../components/recipe/RecipePreview";
import useRecipeActions from "../hooks/action/useRecipeActions";
import Navigators from "../../navigators/navigators/Navigators";
import { useEffect } from "react";

const RecipeListScreen = ({ navigation }) => {
  const { navigateToNewRecipe } = Navigators();
  useEffect(() => {
    navigation.setOptions({
      title: "Explore Recipe",
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 20 }}
          onPress={navigateToNewRecipe}
        >
          <AntDesign name="plus" size={30} color={color.primary}></AntDesign>
        </TouchableOpacity>
      ),
    });
  }, []);

  const { handleSearchChange } = useRecipeActions();

  const foodsSearch = useSelector((state) => state.food.foods);

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
                source={require("../../assets/lottie/data-loading-animation.json")}
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
