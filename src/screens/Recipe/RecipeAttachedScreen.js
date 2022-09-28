import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import LottieView from "lottie-react-native";
import uuid from "react-native-uuid";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import color from "../../assets/color/color";
import InputSearch from "../../components/input/InputSearch";
import RecipePreviewPlus from "../../components/recipe/RecipePreviewPlus";
import RecipeChosen from "../../components/recipe/RecipeChosen";
import Navigators from "../../navigators/navigators/Navigators";
import FoodServices from "../../services/FoodServices";
import { useNavigation, useRoute } from "@react-navigation/native";

const RecipeAttachedScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { searchFoods } = FoodServices();
  const { navigateToRecipeCreate } = Navigators();
  const foodsSearch = useSelector((state) => state.food.searchFoods);

  useEffect(() => {
    navigation.setOptions({
      title: "Choose Attached Recipes",
      headerRight: () => headerRight(),
    });
    if (foodsSearch.rows.length === 0) searchFoods(" ", 1, 20);
  }, []);

  const { onConfirm, foods } = route.params;

  const [foodList, setFoodList] = useState(foods);

  const handleConfirm = () => {
    onConfirm(foodList);
    navigation.goBack();
  };

  const handlePlusAttachedRecipe = (food) => {
    setFoodList([...foodList, food]);
  };

  const handleMinusAttachedRecipe = (obj) => {
    const data = foodList.filter((value) => value._id != obj._id);
    setFoodList(data);
  };

  const handleKeyChange = (text) => {
    searchFoods(text, 1, 20);
  };

  const headerRight = () => (
    <TouchableOpacity onPress={handleConfirm} style={{ marginRight: 16 }}>
      <Ionicons
        name="checkmark-sharp"
        size={35}
        color={color.primary}
      ></Ionicons>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <InputSearch
        inputIcon="search"
        inputName="Search Recipe"
        widthSearch={380}
        style={{ paddingHorizontal: 8 }}
        setNameText={handleKeyChange}
      />
      <ScrollView>
        <View style={styles.bodyView}>
          {foodsSearch.rows.length !== 0 ? (
            foodsSearch.rows.map((recipe) => (
              <RecipePreviewPlus
                key={uuid.v4()}
                data={recipe}
                foodList={foodList}
                onAddAttachedRecipe={handlePlusAttachedRecipe}
                onMinusAttachedRecipe={handleMinusAttachedRecipe}
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          paddingRight: 10,
          bottom: "4%",
          right: "1%",
        }}
      >
        <TouchableOpacity onPress={navigateToRecipeCreate}>
          <View
            style={{
              width: 55,
              height: 55,
              borderRadius: 55,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: color.primary,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: color.background,
              }}
            >
              +
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {foodList.length === 0 ? (
        <View
          style={{
            width: "100%",
            paddingRight: 10,
            alignItems: "flex-end",
            display: "none",
          }}
        ></View>
      ) : (
        <View
          style={{
            width: "100%",
            paddingRight: 10,
            alignItems: "flex-end",
          }}
        ></View>
      )}

      <View style={styles.botView}>
        <ScrollView horizontal={true}>
          <View style={styles.recipeChosenView}>
            {foodList.map((item) => {
              return (
                <RecipeChosen
                  key={uuid.v4()}
                  foodName={item}
                  onDeleteAttachedRecipe={handleMinusAttachedRecipe}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default RecipeAttachedScreen;

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
  botView: {
    flexDirection: "row",
    borderTopWidth: 2,
    borderTopColor: color.inputColor,
    //paddingVertical: 10
  },
  recipeChosenView: {
    flexDirection: "row",
    paddingLeft: 20,
    //paddingVertical: 15
  },
});
