import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  foods: [],
  foodsPagination: {
    currentPage: 0,
    totalPage: 0,
  },
  currentFood: {
    rates: [],
    ratePagination: {
      currentPage: 0,
      totalPage: 0,
    }
  },
}

export const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    setFoods: (state, action) => {
      state.foods = action.payload
    },

    addFood: (state, action) => {
      state.foods.unshift(action.payload)
    },

    setCurrenFood: (state, action) => {
      state.currentFood = {
        ...action.payload,
        rates: [],
        ratePagination: {
          currentPage: 0,
          totalPage: 0,
        }
      }
    },

    setRate: (state, action) => {
      state.currentFood.rates.push(...action.payload.rates)
      state.currentFood.ratePagination.currentPage += 1
      state.currentFood.ratePagination.totalPage = action.payload.pagination.totalPage
    },

    addRate: (state, action) => {
      state.currentFood.rates.unshift(action.payload.rate)
      state.currentFood.avg_score = action.payload.food.avg_score
      const index = state.foods.findIndex(food => food._id === action.payload.food._id)
      if (index !== -1) {
        state.foods[index].avg_score = action.payload.food.avg_score
      }
    },

    deleteCurrentFood: (state, action) => {
      state.currentFood = {
        rates: [],
        ratePagination: {
          currentPage: 0,
          totalPage: 0,
        }
      }

    }
  },
})

// Action creators are generated for each case reducer function
export const { setFoods, addFood, setCurrenFood, deleteCurrentFood, setRate, addRate } = foodSlice.actions

export default foodSlice.reducer