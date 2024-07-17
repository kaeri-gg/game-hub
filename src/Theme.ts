// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: '#edf1fc',
      100: '#cfd5e3',
      200: '#b0bacd',
      300: '#919eb9',
      400: '#7282a5',
      500: '#58698b',
      600: '#44526d',
      700: '#303a4e',
      800: '#1c2330',
      900: '#050c15',
    },
  },
});

export default theme;
