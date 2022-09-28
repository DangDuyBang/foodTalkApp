import { lightTheme } from '../../assets/color/Theme'
import { darkTheme } from '../../assets/color/Theme'

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    theme: lightTheme,
    dark: false
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        switchTheme: (state, action) => {
            state.theme = action.payload;
            state.dark = !state.dark
        },
    }
})

export const { switchTheme } = themeSlice.actions

export default themeSlice.reducer