import { useAppSelector, useAppDispatch } from "../redux-hooks-utils";
import { AppThemes } from "../../assets/themes/main-theme";
import { toggleTheme } from "../../redux/theme-slice";

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.theme.current);
  return {
    theme: AppThemes[currentTheme],
    toggleTheme: () => dispatch(toggleTheme()),
  };
};
