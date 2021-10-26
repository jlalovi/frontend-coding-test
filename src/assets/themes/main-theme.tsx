export interface ITheme {
  gray_800: string;
  gray_700: string;
  gray_600: string;
  gray_500: string;
  gray_400: string;
  gray_300: string;
  gray_200: string;
  gray_100: string;

  cyan_800: string;
  cyan_700: string;
  cyan_600: string;
  cyan_500: string;
  cyan_400: string;

  dark_blue_900: string;
  dark_blue_800: string;
  dark_blue_700: string;
  dark_blue_600: string;
  dark_blue_500: string;
}

const light: ITheme = {
  gray_800: '#202124',
  gray_700: '#333333',
  gray_600: '#4F4F4F',
  gray_500: '#828282',
  gray_400: '#BDBDBD',
  gray_300: '#E0E0E0',
  gray_200: '#EEEEEE',
  gray_100: '#F5F5F5',

  cyan_800: '#1896AC',
  cyan_700: '#1AA5BD',
  cyan_600: '#28C1D7',
  cyan_500: '#74C7D6',
  cyan_400: '#DAF7E3',

  dark_blue_900: '#031526',
  dark_blue_800: '#154064',
  dark_blue_700: '#1C5686',
  dark_blue_600: '#519CDB',
  dark_blue_500: '#A8CDED',
};

export type AvailableTheme = 'LIGHT';

export const THEMES: { [key: string]: AvailableTheme; } = {
  LIGHT: 'LIGHT',
};

interface IAppThemes {
  LIGHT: ITheme;
}

export const AppThemes: IAppThemes = {
  LIGHT: light,
};

const mainTheme: () => ITheme = () => (light);

export default mainTheme;
