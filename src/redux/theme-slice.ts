import { createSlice } from "@reduxjs/toolkit";
import { THEMES, AvailableTheme } from "../assets/themes/main-theme";

interface IThemeState {
  current: AvailableTheme;
}

const initialState: IThemeState = {
  current: THEMES.LIGHT,
};

const themeSlice = createSlice({
  initialState,
  name: "theme",
  reducers: {
    toggleTheme(state) {
      state.current =
        state.current === THEMES.LIGHT ? THEMES.LIGHT2 : THEMES.LIGHT;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
