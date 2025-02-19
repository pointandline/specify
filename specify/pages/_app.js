// MaterialUI theming imports
import { ThemeProvider } from '@mui/material';
import { theme } from '@/styles/themes/config.js'

export default function App({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}
