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
  },
})

// Action creators are generated for each case reducer function
export const { setFoods} = foodSlice.actions

export default foodSlice.reducer