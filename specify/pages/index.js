import Head from "next/head";
import styles from "@/styles/Home.module.css";


export default function Home() {
  return (
    <>
      <Head>
        <title>s p e c i f y</title>
        <meta name="description" content="A parametric analysis & recommendation engine for Spotify" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.page}`}>
        <main className={styles.main}>
        </main>
      </div>
    </>
  );
}
