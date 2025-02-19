import Head from 'next/head';
import { useState, useRef } from 'react';
import anime from 'animejs';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography'

// homebrew imports
import SphereAnimation from '@/components/SphereAnimation'
import HomepageText from '@/components/HomepageText'


export default function Home() {
  
  const [elementVisible, setElementVisible] = useState(true);
  const homepageTextRef = useRef(null);

  const handleButtonClick = () => {
    if (homepageTextRef.current) {
      anime({
        targets: homepageTextRef.current,
        translateY: '100%',
        opacity: 0,
        duration: 600,
        easing: 'easeInQuad',
        complete: () => setElementVisible(false),
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
            {elementVisible && (
              <Container ref={homepageTextRef}>
                <HomepageText />
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
