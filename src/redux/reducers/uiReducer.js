import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toast: null,
  notifications: {
    count: 0,
    rows: [],
    currentPage: 1,
  },
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setToast: (state, action) => {
      state.toast = action.payload;
    },

    setNoti: (state, action) => {
      state.notifications.count = action.payload.count;
      state.notifications.rows.push(...action.payload.rows);
      state.notifications.currentPage += 1;
    },

    addNotification: (state, action) => {
      state.notifications.rows.unshift(action.payload);
      state.notifications.count += 1;
    },

    seenNotification: (state, action) => {
      const index = state.notifications.rows.findIndex(
        (n) => n._id === action.payload
      );
      if (index > -1) {
        state.notifications.rows[index].is_seen = true;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToast, setNoti, addNotification, seenNotification } =
  uiSlice.actions;

export default uiSlice.reducer;
