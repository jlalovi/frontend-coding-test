import { AppThemes } from "../../assets/themes/main-theme";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

export const useTheme = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.current);
  return { theme: AppThemes[currentTheme] };
};
