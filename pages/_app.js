// MaterialUI theming imports
import { ThemeProvider } from '@mui/material';
import { theme } from '@/styles/themes/config.js'

import "@fontsource/public-sans/300.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/500.css";
import "@fontsource/public-sans/700.css";

import "@fontsource/public-sans/300.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/500.css";
import "@fontsource/public-sans/700.css";


export default function App({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}
