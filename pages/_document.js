import { Html, Head, Main, NextScript } from "next/document";
import { theme } from '@/styles/themes/config.js'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* pathing fix for github pages favicon */}
        <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap"
        />
        <link 
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Funnel+Sans:ital,wght@0,300..800;1,300..800&family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap"
        />
      </Head>
      <body style={{ backgroundColor: theme.palette.background.default }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
