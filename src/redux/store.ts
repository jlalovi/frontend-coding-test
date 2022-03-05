import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme-slice";

const store = configureStore({
  // If it is an object of slice reducers, will automatically create the
  // root reducer by passing this object to the Redux combineReducers utility
  // See https://redux-toolkit.js.org/api/configureStore#reducer
  reducer: {
    theme: themeSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
