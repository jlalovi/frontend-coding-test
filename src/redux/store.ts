import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme-slice";
import eventSlice from "./events-slice";
import daysEventSlice from "./days-events-slice";

// If it is an object of slice reducers, will automatically create the
// root reducer by passing this object to the Redux combineReducers utility
// See https://redux-toolkit.js.org/api/configureStore#reducer
export const reducer = {
  theme: themeSlice,
  events: eventSlice,
  daysEvents: daysEventSlice,
};
const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
