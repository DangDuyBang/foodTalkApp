import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import color from "../../assets/color/color";
import { useSelector } from "react-redux";
import uuid from "react-native-uuid";

const RecipeContentScreen = () => {
  const currentFood = useSelector((state) => state.food.currentFood.data);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.coverImage}
          resizeMode="cover"
          source={{
            uri: currentFood.photo,
          }}
        />
        <Text style={styles.nameRecipe}>{currentFood.name}</Text>
        <Text style={styles.ingredientTittle}>Ingredients</Text>
        {currentFood.ingredients.map((ingr) => (
          <Text key={uuid.v4()} style={styles.ingredientContent}>
            {ingr}
          </Text>
        ))}
        <Text style={styles.processTittle}>Process</Text>
        {currentFood.recipe.map((r, index) => (
          <Text key={uuid.v4()} style={styles.processContent}>
            {index + 1}. {r}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default RecipeContentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  coverImage: {
    width: "100%",
    height: 250,
    borderRadius: 20,
  },
  nameRecipe: {
    fontFamily: "Roboto",
    fontSize: 24,
    color: color.textBlue,
    fontWeight: "bold",
  },
  ingredientTittle: {
    marginTop: 10,
    fontFamily: "Roboto",
    fontSize: 18,
    color: color.textGray,
    fontWeight: "bold",
  },
  ingredientContent: {
    fontFamily: "Roboto",
    flexWrap: "wrap",
    color: color.textBlack,
    marginLeft: 25,
  },
  processTittle: {
    fontFamily: "Roboto",
    fontSize: 18,
    color: color.textGray,
    fontWeight: "bold",
  },
  processContent: {
    fontFamily: "Roboto",
    flexWrap: "wrap",
    color: color.textBlack,
    marginLeft: 25,
  },
});
