import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // foods: {
  //   count: 0,
  //   rows: [],
  //   currentPage: 1,
  // },
  currentFood: {
    data: null,
    rates: {
      count: 0,
      rows: [],
      currentPage: 1,
    },
  },
  userFoods: {
    count: 0,
    rows: [],
    currentPage: 1,
  },

  selectedUserFoods: {
    count: 0,
    rows: [],
    currentPage: 1,
  },

  searchFoods: {
    count: 0,
    rows: [],
    currentPage: 1,
  },

  recommendedIngredient: [],
  pairingIngredients: [],
};

export const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    setUserFoods: (state, action) => {
      state.userFoods.count = action.payload.count;
      state.userFoods.rows.push(...action.payload.rows);
      state.userFoods.currentPage += 1;
    },

    addFood: (state, action) => {
      state.userFoods.count += 1;
      state.userFoods.rows.unshift(action.payload);
    },

    setCurrenFood: (state, action) => {
      state.currentFood.data = action.payload;
    },

    setRates: (state, action) => {
      state.currentFood.rates.count = action.payload.count;
      state.currentFood.rates.rows.push(...action.payload.rows);
      state.currentFood.rates.currentPage += 1;
    },

    addRate: (state, action) => {
      if (state.currentFood.data) {
        state.currentFood.rates.rows.unshift(action.payload);
        state.currentFood.data.score = action.payload.food.score;
        state.currentFood.data.num_rate = action.payload.food.num_rate
      }
    },

    deleteCurrentFood: (state, action) => {
      state.currentFood = {
        data: null,
        rates: {
          count: 0,
          rows: [],
          currentPage: 1,
        },
      };
    },

    setMoreSearchFoods: (state, action) => {
      state.searchFoods.count = action.payload.count;
      state.searchFoods.rows.push(...action.payload.rows);
      state.searchFoods.currentPage += 1;
    },

    setSearchFoods: (state, action) => {
      state.searchFoods.count = action.payload.count;
      state.searchFoods.rows = action.payload.rows;
    },

    setSelectedUserFoods: (state, action) => {
      state.selectedUserFoods.count = action.payload.count;
      state.selectedUserFoods.rows.push(...action.payload.rows);
      state.selectedUserFoods.currentPage += 1;
    },

    deleteSearchFoods: (state, action) => {
      state.searchFoods = {
        count: 0,
        rows: [],
        currentPage: 1,
      };
    },

    setRecommendedIngredient: (state, action) => {
      state.recommendedIngredient = [...action.payload];
    },

    deleteRecomendedIngredient: (state) => {
      state.recommendedIngredient = [];
    },

    setPairingIngredient: (state, action) => {
      state.pairingIngredients = [
        ...state.pairingIngredients,
        ...action.payload.filter((e) => {
          return !state.pairingIngredients.find(
            (i) => i.ingredient_name === e.ingredient_name
          );
        }),
      ]
        .sort((a, b) => {
          if (a.prediction > b.prediction) return -1;
          if (a.prediction < b.prediction) return 1;
          return 0;
        })
        .map((ingr) => ingr.ingredient_name)
        .filter(function (e) {
          return !ingrList.includes(e);
        })
        .map((ingr) => ({
          _id: ingr,
        }));
    },

    deletePairingIngredient: (state) => {
      state.pairingIngredients = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUserFoods,
  addFood,
  setCurrenFood,
  deleteCurrentFood,
  addRate,
  setRates,
  setSearchFoods,
  deleteSearchFoods,
  setSelectedUserFoods,
  setRecommendedIngredient,
  setPairingIngredient,
  deletePairingIngredient,
  deleteRecomendedIngredient,
  setMoreSearchFoods,
} = foodSlice.actions;

export default foodSlice.reducer;
