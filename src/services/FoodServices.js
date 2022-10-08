import axios from "axios";
import { useDispatch } from "react-redux";
import {
  addFood,
  addRate,
  setMoreSearchFoods,
  setPairingIngredient,
  setRates,
  setRecommendedIngredient,
  setSearchFoods,
  setSelectedUserFoods,
  setUserFoods,
} from "../redux/reducers/foodReducer";
import { setToast } from "../redux/reducers/uiReducer";

export default function () {
  const dispatch = useDispatch();

  const createFood = (payload) =>
    axios
      .post("/foods", payload)
      .then((response) => {
        dispatch(
          setToast({
            type: "success",
            title: "Food created",
            message: `Food created successfully!`,
          })
        );
        dispatch(addFood(response.data));
      })
      .catch((err) => {
        if (err.response) {
          dispatch(
            setToast({
              type: "error",
              title: "Error creating food",
              message: err.response.data,
            })
          );
        }
      });

  const createRateFood = (payload) =>
    axios
      .post("/food-rates", payload)
      .then((response) => dispatch(addRate(response.data)))
      .catch((err) => {
        if (err.response) {
          dispatch(
            setToast({
              type: "error",
              title: "Error creating comment",
              message: err.response.data,
            })
          );
        }
      });

  const searchFoods = (key, page, limit) =>
    axios
      .get(`/foods?q=${key}&page=${page}&limit=${limit}`)
      .then((response) =>
        page === 1
          ? dispatch(setSearchFoods(response.data))
          : dispatch(setMoreSearchFoods(response.data))
      )
      .catch((err) => {
        if (err.response) console.log(err.response.data);
      });

  const fetchAllRates = (food_id, page, limit) =>
    axios
      .get(`/food-rates/${food_id}?page=${page}&limit=${limit}`)
      .then((response) => dispatch(setRates(response.data)))
      .catch((err) => {
        if (err.response) console.log(err.response);
      });

  const fetchPersonalFoods = (page, limit) =>
    axios
      .get(`/foods/me?page=${page}&limit=${limit}`)
      .then((response) => dispatch(setUserFoods(response.data)))
      .catch((err) => {
        if (err.response) console.log(err.response.data);
      });

  const fetchUserFoods = (user_id, page, limit) =>
    axios
      .get(`/foods/${user_id}?page=${page}&limit=${limit}`)
      .then((response) => dispatch(setSelectedUserFoods(response.data)))
      .catch((err) => {
        if (err.response) console.log(err.response.data);
      });

  const recommendationPairingIngr = (key) =>
    axios
      .get(`/ingredients?q=${key}&page=1&limit=20&sort=-npmi`)
      .then((response) => dispatch(setRecommendedIngredient(response.data)))
      .catch((err) => {
        if (err.response) console.log(err.response.data);
      });

  const pairingIngredients = (key) =>
    axios
      .post("http://kitchenette.korea.ac.kr/api", {
        name: key,
      })
      .then((response) => dispatch(setPairingIngredient(response.data)))
      .catch((err) => {
        if (err.response) console.log(err.response.data);
      });

  return {
    createFood,
    createRateFood,
    searchFoods,
    fetchAllRates,
    fetchPersonalFoods,
    fetchUserFoods,
    recommendationPairingIngr,
    pairingIngredients,
  };
}
