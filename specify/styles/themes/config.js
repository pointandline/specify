import { createTheme, createMuiTheme } from '@mui/material'

export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#317a4d',
      light: '#398f5f',
      dark: '#296640',
      contrastText: 'rgba(24,47,27,0.7)',
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
console.log(theme.palette.primary.main)
export { theme }
