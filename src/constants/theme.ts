import { MD3LightTheme, configureFonts } from 'react-native-paper';

const fontConfig = {
  displayLarge: {
    fontFamily: 'System',
    fontSize: 57,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 64,
  },
  // Add other font styles as needed
};

export const theme = {
  ...MD3LightTheme,
  // Specify custom property
  myOwnProperty: true,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#2E3192',
    onPrimary: '#FFFFFF',
    primaryContainer: '#E0E1FF',
    onPrimaryContainer: '#00006E',
    secondary: '#5C5D72',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#E1E1F9',
    onSecondaryContainer: '#191A2C',
    tertiary: '#78536B',
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#FFD8EE',
    onTertiaryContainer: '#2E1126',
    error: '#BA1A1A',
    onError: '#FFFFFF',
    errorContainer: '#FFDAD6',
    onErrorContainer: '#410002',
    background: '#F8F9FE',
    onBackground: '#1B1B1F',
    surface: '#FFFFFF',
    onSurface: '#1B1B1F',
    surfaceVariant: '#E2E2EC',
    onSurfaceVariant: '#45464F',
    outline: '#767680',
    elevation: {
      level0: 'transparent',
      level1: '#F3F3F9',
      level2: '#EEEEF5',
      level3: '#E8E9F2',
      level4: '#E6E7F0',
      level5: '#E2E3ED',
    },
  },
};
