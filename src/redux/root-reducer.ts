import { combineReducers } from "@reduxjs/toolkit";
import themeSlice from "./theme-slice";

const rootReducer = combineReducers({
  theme: themeSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
