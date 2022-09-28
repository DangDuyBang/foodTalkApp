import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import color from "../../assets/color/color";
import RecipeComment from "../../components/recipe/RecipeComment";
import { useDispatch, useSelector } from "react-redux";
import InfinityScrollView from "../../components/view/InfinityScrollView";
import { deleteCurrentFood } from "../../redux/reducers/foodReducer";
import FoodServices from "../../services/FoodServices";
import { Ionicons } from "@expo/vector-icons";
import uuid from "react-native-uuid";

const RecipeEvaluateScreen = () => {
  const currentFood = useSelector((state) => state.food.currentFood);
  const { fetchAllRates, createRateFood } = FoodServices();
  const dispatch = useDispatch();

  const fetchRate = () => {
    if (
      currentFood.rates.count !== 0 &&
      currentFood.rates.count <= currentFood.rates.rows.length
    ) 
      return;
    
    fetchAllRates(currentFood.data._id, currentFood.rates.currentPage, 20);
  };

  const [payload, setPayload] = useState({
    food: currentFood.data._id,
    score: 10,
  });

  const maxRating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const starImgFilled =
    "https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true";
  const starImgCorner =
    "https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true";

  const handleComment = () => {
    createRateFood(payload).then(
      setPayload({
        food: currentFood.data._id,
        score: 10,
      })
    );
  };

  const onContentChange = (text) => {
    setPayload({ ...payload, content: text });
  };

  const onRatingChange = (rate) => {
    setPayload({ ...payload, score: rate });
  };

  useEffect(() => {
    if (currentFood.rates.rows.length === 0) fetchRate();

    return () => {
      dispatch(deleteCurrentFood());
    };
  }, []);

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={uuid.v4()}
              onPress={() => onRatingChange(item)}
            >
              <Image
                style={styles.starImgStyle}
                source={
                  item <= payload.score
                    ? { uri: starImgFilled }
                    : { uri: starImgCorner }
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.commentListView}>
        <InfinityScrollView useLoads={fetchRate}>
          {currentFood.rates.rows &&
            currentFood.rates.rows.map((item) => {
              return <RecipeComment key={uuid.v4()} rate={item} />;
            })}
        </InfinityScrollView>
      </View>
      <ScrollView>
        <View style={styles.rateCommentView}>
          <CustomRatingBar />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              value={payload.content}
              style={styles.inputRate}
              placeholder="Write comment ..."
              multiline={true}
              maxLength={220}
              onChangeText={onContentChange}
            />
            <TouchableOpacity onPress={handleComment}>
              <Ionicons
                style={styles.sendIcon}
                name="send"
                size={24}
                color={color.primary}
              ></Ionicons>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RecipeEvaluateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
  customRatingBarStyle: {
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 8,
  },
  starImgStyle: {
    width: 30,
    height: 30,
    resizeMode: "cover",
  },
  markEvaluateText: {
    textAlign: "center",
    fontSize: 15,
    marginVertical: 10,
    color: color.textIconSmall,
  },
  commentListView: {
    flex: 100,
    backgroundColor: color.background,
  },
  rateCommentView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    borderTopWidth: 0.5,
    backgroundColor: color.background,
  },
  inputRate: {
    width: "85%",
    //height: 120,
    borderRadius: 20,
    backgroundColor: color.inputColor,
    paddingHorizontal: 20,
    paddingVertical: 10,
    //marginBottom: 10,
    //textAlignVertical: 'top'
  },
  sendIcon: {
    marginLeft: 12,
  },
});
