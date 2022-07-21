import { createSelector } from '@reduxjs/toolkit'

export const themeSelector = (state) => state.theme;

export const themeSwitchingSelector = createSelector(
    themeSelector,
    (
        theme,
    ) => {
        return 
    }
)