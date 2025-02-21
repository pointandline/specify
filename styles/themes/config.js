import { createTheme, createMuiTheme } from '@mui/material/styles'

export const themeOptions = {
  typography: {
    // global:
    fontFamily: [
        '"Funnel Sans"',
        '"Public Sans"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(","),
    // variant-specific:
    h1: {
      fontFamily: '"Public Sans"',
    },
    h2: {
      fontFamily: '"Public Sans"',
    }
  },
  palette: {
    type: 'light',
    primary: {
      main: 'rgba(225, 225, 225, 0.55)',
      light: 'rgba(225, 225, 225, 0.45)',
      dark: '#2f7549',
      contrastText: 'rgba(24,47,27,0.5)',
    },
    secondary: {
      main: 'rgba(63,72,63,0.3)',
      light: 'rgba(63,72,63,0.18)',
      dark: 'rgba(63,72,63,0.44)',
      contrastText: '#2d4a2d',
    },
    background: {
      default: '#398f5a',
      paper: '#398f5f',
    },
    text: {
      primary: 'rgba(225,225,225,0.6)',
      secondary: 'rgba(225,225,225,0.3)',
    },
    error: {
      main: 'rgba(177,42,15,0.47)',
      contrastText: '#404848',
    },
  },
};

const theme = createTheme(themeOptions);

export { theme }
