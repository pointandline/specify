import { Html, Head, Main, NextScript } from "next/document";
import { theme } from '@/styles/themes/config.js'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{ backgroundColor: theme.palette.primary.main }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
