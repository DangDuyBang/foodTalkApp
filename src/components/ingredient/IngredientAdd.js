import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import color from "../../assets/color/color";
import IngredientRecommend from "./IngredientRecommend";
import FoodServices from "../../services/FoodServices";
import uuid from "react-native-uuid";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecomendedIngredient } from "../../redux/reducers/foodReducer";

const IngredientAdd = (props) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const recommendedIngredient = useSelector(
    (state) => state.food.recommendedIngredient
  );
  const pairingIngrs = useSelector((state) => state.food.pairingIngredients);
  const [ingredient, setIngredient] = useState({
    nameIngredient: "",
    unitIngredient: "",
  });
  const { recommendationPairingIngr, pairingIngredients } = FoodServices();
  const [ingrList, setIngrList] = useState([]);
  const [isRecommend, setIsRecommned] = useState(true);

  useEffect(() => {
    if (ingredient.nameIngredient === "") {
      setIsRecommned(true);
    } else {
      setIsRecommned(false);
    }
    recommendationPairingIngr(
      ingredient.nameIngredient.toLowerCase().replace(/\s/g, "_")
    );
  }, [ingredient.nameIngredient]);

  useEffect(() => {
    pairingIngredients(ingrList[ingrList.length - 1]);
  }, [ingrList]);

  const eventAddIngredient = () => {
    if (
      ingredient.nameIngredient.length === 0 ||
      ingredient.unitIngredient.length === 0
    ) {
      alert("You need fill before adding !");
      return false;
    }
    props.onAddIngredient(ingredient.nameIngredient, ingredient.unitIngredient);
    setIngrList([
      ...ingrList,
      ingredient.nameIngredient.toLowerCase().replace(/\s/g, "_"),
    ]);

    setIngredient({
      ...ingredient,
      nameIngredient: "",
      unitIngredient: "",
    });

    setIsRecommned(true);
    dispatch(deleteRecomendedIngredient());
    inputRef.current.focus();
  };

  const handleTypeRecommend = (recommendIngredien) => {
    setIngredient({
      ...ingredient,
      nameIngredient: recommendIngredien,
    });
  };

  const formatString = (string) => {
    string = string.replace(/_/g, " ");
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <View>
      <ScrollView horizontal={true} paddingBottom={6}>
        {isRecommend
          ? pairingIngrs &&
            pairingIngrs.length !== 0 &&
            pairingIngrs.map((ingr) => (
              <IngredientRecommend
                key={uuid.v4()}
                ingredientText={formatString(ingr._id)}
                onTypeRecommend={handleTypeRecommend}
              />
            ))
          : recommendedIngredient.length !== 0 &&
            recommendedIngredient.map((ingr) => (
              <IngredientRecommend
                key={uuid.v4()}
                ingredientText={formatString(ingr.ingr)}
                onTypeRecommend={handleTypeRecommend}
              />
            ))}
      </ScrollView>

      <View style={styles.container}>
        <TextInput
          value={ingredient.unitIngredient}
          placeholder="Type unit"
          maxLength={10}
          style={{
            width: "27%",
            paddingVertical: 10,
            backgroundColor: color.inputColor,
            paddingHorizontal: 10,
            fontSize: 16,
            borderRadius: 8,
          }}
          onChangeText={(text) =>
            setIngredient({ ...ingredient, unitIngredient: text })
          }
          ref={inputRef}
        />
        <TextInput
          value={ingredient.nameIngredient}
          placeholder="Type an ingredient"
          maxLength={20}
          style={{
            width: "63%",
            paddingVertical: 10,
            backgroundColor: color.inputColor,
            paddingHorizontal: 10,
            fontSize: 16,
            borderRadius: 8,
          }}
          onChangeText={(text) =>
            setIngredient({ ...ingredient, nameIngredient: text })
          }
        />

        <TouchableOpacity onPress={eventAddIngredient}>
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 35,
              color: color.iconGreen,
            }}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IngredientAdd;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },
});
