import { DefaultTheme } from 'styled-components';
import { typography } from './typography';

export const themeConfigDark: DefaultTheme = {
  colors: {
    background: {
      main: { color: '#F2F2F2' },
      light: { color: '#FFFFFF' },
    },
    borders: {
      main: { color: '#F1F1F1' },
    },
    primary: {
      main: {
        color: '#D7385E',
        contrastText: '#FFF',
      },
    },
    secondary: {
      main: {
        color: '#FB7B6B',
        contrastText: '#FFF',
      },
    },
    tertiary: {
      main: {
        color: '#070C0E',
        contrastText: '#FFF',
      },
      light: {
        color: '#88989E',
        contrastText: '#FFF',
      },
    },
  },
  fontFamily: 'Rubik, sans-serif',
  borderRadius: '12px',
  transition: '200ms ease-in-out',
  typography,
};
