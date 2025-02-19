import Head from 'next/head';
import { useState, useRef } from 'react';
import anime from 'animejs';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography'

// homebrew imports
import HomepageText from '@/components/HomepageText';
import MainUI from '@/components/MainUI';
import SphereAnimation from '@/components/SphereAnimation';
import styles from '@/styles/Home.module.css'

export default function Home() {
  
  const [homepageTextVisible, setHomepageTextVisible] = useState(true);
  const homepageTextRef = useRef(null);

  const [showMainUI, setShowMainUI] = useState(false);
  const mainUIRef = useRef(null);

  const handleButtonClick = () => {
    // first, animate the HomepageText sliding off the bottom 
    // (we also pass this as a parent prop to the SphereAnimation functional component, to make the button itself disappear)
    if (homepageTextRef.current) {
      anime({
        targets: homepageTextRef.current,
        translateY: '100%',
        opacity: 0,
        duration: 600,
        easing: 'easeInQuad',
        complete: () => {
          setHomepageTextVisible(false)
          // then, drop the main UI down from the top of the page
          // -> start by toggling it visible. this will look jarring at first,
          // -> but we can smooth this out by setting the parent container's opacity to 0 in Home's CSS.
          setShowMainUI(true);   
          if (mainUIRef.current) {
            anime({
              targets:mainUIRef.current,
              opacity: 1,             // start/end opacity states to fade the elements in
              duration: 6000,
              delay: 2000,
              easing: 'easeInOutQuad',
            });
          }
        }
      });
    }


  };


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
          <Container maxWidth='md'>
            <SphereAnimation onButtonClick={handleButtonClick} />
            {homepageTextVisible && (
              <Container ref={homepageTextRef}>
                <HomepageText />
              </Container>
            )}
            {showMainUI && (
              <Container className={styles.mainUIContainer} ref={mainUIRef}>
                <MainUI />
              </Container>
            )}
            {/*
            <Typography variant="h2" component="h2" color="primary" align="right">This is h2 text.</Typography>
            <Typography variant="h3" component="h3" color="primary" align="right">This is h3 text.</Typography>
            <Typography variant="h4" component="h4" color="primary" align="right">This is h4 text.</Typography>
            <Typography variant="h5" component="h4" color="primary" align="right">This is h5 text.</Typography>
            <Typography variant="h6" component="h4" color="primary" align="right">This is h6 text.</Typography>
            <Typography variant="body1" component="p" color="primary" align="right">This is primary text.</Typography>
            <Typography variant="body2" component="p" color="secondary" align="right">This is secondary text.</Typography>
            */}
          </Container>
        </main>
      </div>
    </>
  );
}
