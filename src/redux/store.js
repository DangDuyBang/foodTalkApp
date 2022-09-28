import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./reducers/foodReducer";
import postReducer from "./reducers/postReducer";
import uiReducer from "./reducers/uiReducer";
import userReducer from "./reducers/userReducer";
import chatReducer from "./reducers/chatReducer";
import themeReducer from "./reducers/themeReducer";
import monitorReducerEnhancer from "./enhancers/monitorReducer";
import loggerMiddleware from "./midlleware/logger";

export default function configureAppStore(preloadedState) {
  return configureStore({
    reducer: {
      user: userReducer,
      post: postReducer,
      ui: uiReducer,
      food: foodReducer,
      chat: chatReducer,
      theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(loggerMiddleware),
    preloadedState,
    enhancers: [monitorReducerEnhancer],
  });
}
