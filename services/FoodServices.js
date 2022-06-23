import axios from "axios";
import { getStorage } from "../utils/Storage";

/**
 * @param {payload} payload { name, ingredients, recipe, about = '', photo = '' }
 */
export const createFood = async (payload) => {
  return axios.post(`/api/food/create`, payload);
};

/**
 * @param {payload} payload { food, content, score }
 */
export const createRateFood = async (payload) => {
  return axios.post(`/api/food/rate`, payload);
};

/**
 * @param {params} parmas food_id string
 */
export const fetchFoodById = async (params) => {
  return axios.get(`/api/food/foods/${params}`);
};

/**
 * @param {params} parmas food_id string
 */
export const searchFood = async (params) => {
  return axios.get(`/api/food/search/${params}`);
};

/**
 * @param {params} parmas food_id string
 */
export const fetchAllRates = async (food_id, currentPage) => {
  return axios.get(`/api/food/rate/${food_id}/?page=${currentPage}`);
};

/**
 * @param {params} parmas ingredient name
 */
export const recommendationIngr = async (params) => {
  return axios.get(`/api/food/ingredients/${params}`);
};

/**
 * @param {ingrs} ingrs array of ingredients name
 */
export const recommendationPairingIngr = async (ingrs) => {
  return axios.get(`/api/food/pairing/ingredients`, {
    params: {
      ingrs: ingrs,
    },
  });
};

export const pairingIngr = async (params) => {
  return axios.post("http://kitchenette.korea.ac.kr/api", {
    name: params,
  });
};

export const fetchUserFoods = async (user_id, currentPage) => {
  return axios.get(`/api/food/user-foods/${user_id}/?page=${currentPage}`);
};
