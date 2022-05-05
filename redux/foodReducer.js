import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  foods: [],
  foodsPagination: {
    currentPage: 0,
    totalPage: 0,
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
    }
  },
})

// Action creators are generated for each case reducer function
export const { setFoods, addFood } = foodSlice.actions

export default foodSlice.reducer