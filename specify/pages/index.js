import Head from 'next/head';

import Typography from '@mui/material/Typography'

import styles from '@/styles/Home.module.css'


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
        <main>
          <Typography variant="h1" component="h1" color="primary">This is h1 text.</Typography>
          <Typography variant="h2" component="h2" color="primary">This is h2 text.</Typography>
          <Typography variant="h3" component="h3" color="primary">This is h3 text.</Typography>
          <Typography variant="h4" component="h4" color="primary">This is h4 text.</Typography>
          <Typography variant="body1" component="p" color="primary">This is primary text.</Typography>
          <Typography variant="body2" component="p" color="secondary">This is secondary text.</Typography>
        </main>
      </div>
    </>
  );
}
