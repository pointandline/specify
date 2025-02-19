import Head from "next/head";
import Typography from "@mui/material/Typography"

export default function Home() {
  return (
    <>
      <Head>
        <title>s p e c i f y</title>
        <meta name="description" content="A parametric analysis & recommendation engine for Spotify" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Typography variant="body1" component="p" color="primary">This is primary text.</Typography>
        <Typography variant="body2" component="p" color="secondary">This is secondary text.</Typography>
        <main >
        </main>
      </div>
    </>
  );
}
