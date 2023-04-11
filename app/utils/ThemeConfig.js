import {
    configureFonts,
    MD3DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme,
  } from 'react-native-paper';
  import {
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme,
  } from '@react-navigation/native';
import PiStyles from './PiStyles';
import FontConfig from './FontConfig';
  
  export const PaperThemeDefault = {
    ...PaperDefaultTheme,
    colors: {
      ...PaperDefaultTheme.colors,
      roundness: 8,
      primary: PiStyles.color.COLOR_PRIMARY,
      accent: PiStyles.color.COLOR_SECONDARY,
      background: PiStyles.color.COLOR_BG,
    },
    fonts:configureFonts({ config: FontConfig}),
  };
  
  export const PaperThemeDark = {
    ...PaperDarkTheme,
    colors: {
      ...PaperDarkTheme.colors,
      primary: '#3498db',
    },
  };
  
  export const CombinedDefaultTheme = {
    ...PaperDefaultTheme,
    ...NavigationDefaultTheme,
  };
  
  export const CombinedDarkTheme = {
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      background: '#303030',
      card: '#222222',
      text: '#ffffff',
    },
  };