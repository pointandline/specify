import React, { useRef, useEffect } from 'react';
import anime from 'animejs';

import Button from '@mui/material/Button'

import styles from '@/styles/SphereAnimation.module.css'

const paths = [
  { d: "M361.604 361.238c-24.407 24.408-51.119 37.27-59.662 28.727-8.542-8.543 4.319-35.255 28.726-59.663 24.408-24.407 51.12-37.269 59.663-28.726 8.542 8.543-4.319 35.255-28.727 59.662z", strokeDasharray: "280.7113952636719" },
  { d: "M360.72 360.354c-35.879 35.88-75.254 54.677-87.946 41.985-12.692-12.692 6.105-52.067 41.985-87.947 35.879-35.879 75.254-54.676 87.946-41.984 12.692 12.692-6.105 52.067-41.984 87.946z", strokeDasharray: "413.3923645019531" },
  { d: "M357.185 356.819c-44.91 44.91-94.376 68.258-110.485 52.149-16.11-16.11 7.238-65.575 52.149-110.485 44.91-44.91 94.376-68.259 110.485-52.15 16.11 16.11-7.239 65.576-52.149 110.486z", strokeDasharray: "518.689697265625" },
  { d: "M350.998 350.632c-53.21 53.209-111.579 81.107-130.373 62.313-18.794-18.793 9.105-77.163 62.314-130.372 53.209-53.21 111.579-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z", strokeDasharray: "612.8993530273438" },
  { d: "M343.043 342.677c-59.8 59.799-125.292 91.26-146.283 70.268-20.99-20.99 10.47-86.483 70.269-146.282 59.799-59.8 125.292-91.26 146.283-70.269 20.99 20.99-10.47 86.484-70.27 146.283z", strokeDasharray: "688.08056640625" },
  { d: "M334.646 334.28c-65.169 65.169-136.697 99.3-159.762 76.235-23.065-23.066 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z", strokeDasharray: "750.9237060546875" },
  { d: "M324.923 324.557c-69.806 69.806-146.38 106.411-171.031 81.76-24.652-24.652 11.953-101.226 81.759-171.032 69.806-69.806 146.38-106.411 171.031-81.76 24.652 24.653-11.953 101.226-81.759 171.032z", strokeDasharray: "804.0537109375" },
  { d: "M312.99 312.625c-73.222 73.223-153.555 111.609-179.428 85.736-25.872-25.872 12.514-106.205 85.737-179.428s153.556-111.609 179.429-85.737c25.872 25.873-12.514 106.205-85.737 179.429z", strokeDasharray: "843.49072265625" },
  { d: "M300.175 299.808c-75.909 75.909-159.11 115.778-185.837 89.052-26.726-26.727 13.143-109.929 89.051-185.837 75.908-75.908 159.11-115.778 185.837-89.051 26.726 26.726-13.143 109.928-89.051 185.836z", strokeDasharray: "873.8916015625" },
  { d: "M284.707 284.34c-77.617 77.617-162.303 118.773-189.152 91.924-26.848-26.848 14.308-111.534 91.924-189.15C265.096 109.496 349.782 68.34 376.63 95.188c26.849 26.849-14.307 111.535-91.923 189.151z", strokeDasharray: "890.8994140625" },
  { d: "M269.239 267.989c-78.105 78.104-163.187 119.656-190.035 92.807-26.849-26.848 14.703-111.93 92.807-190.035 78.105-78.104 163.187-119.656 190.035-92.807 26.849 26.848-14.703 111.93-92.807 190.035z", strokeDasharray: "895.5676879882812" },
  { d: "M252.887 252.52C175.27 330.138 90.584 371.294 63.736 344.446 36.887 317.596 78.043 232.91 155.66 155.293 233.276 77.677 317.962 36.521 344.81 63.37c26.85 26.848-14.307 111.534-91.923 189.15z", strokeDasharray: "890.8988037109375" },
  { d: "M236.977 236.61C161.069 312.52 77.867 352.389 51.14 325.663c-26.726-26.727 13.143-109.928 89.052-185.837 75.908-75.908 159.11-115.777 185.836-89.05 26.727 26.726-13.143 109.928-89.051 185.836z", strokeDasharray: "873.893798828125" },
  { d: "M221.067 220.7C147.844 293.925 67.51 332.31 41.639 306.439c-25.873-25.873 12.513-106.206 85.736-179.429C200.6 53.786 280.931 15.4 306.804 41.272c25.872 25.873-12.514 106.206-85.737 179.429z", strokeDasharray: "843.4929809570312" },
  { d: "M205.157 204.79c-69.806 69.807-146.38 106.412-171.031 81.76-24.652-24.652 11.953-101.225 81.759-171.031 69.806-69.807 146.38-106.411 171.031-81.76 24.652 24.652-11.953 101.226-81.759 171.032z", strokeDasharray: "804.0543212890625" },
  { d: "M189.247 188.881c-65.169 65.169-136.696 99.3-159.762 76.235-23.065-23.065 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z", strokeDasharray: "750.9235229492188" },
  { d: "M173.337 172.971c-59.799 59.8-125.292 91.26-146.282 70.269-20.991-20.99 10.47-86.484 70.268-146.283 59.8-59.799 125.292-91.26 146.283-70.269 20.99 20.991-10.47 86.484-70.269 146.283z", strokeDasharray: "688.0787353515625" },
  { d: "M157.427 157.061c-53.209 53.21-111.578 81.108-130.372 62.314-18.794-18.794 9.104-77.164 62.313-130.373 53.21-53.209 111.58-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z", strokeDasharray: "612.899169921875" },
  { d: "M141.517 141.151c-44.91 44.91-94.376 68.259-110.485 52.15-16.11-16.11 7.239-65.576 52.15-110.486 44.91-44.91 94.375-68.258 110.485-52.15 16.109 16.11-7.24 65.576-52.15 110.486z", strokeDasharray: "518.690673828125" },
  { d: "M125.608 125.241c-35.88 35.88-75.255 54.677-87.947 41.985-12.692-12.692 6.105-52.067 41.985-87.947C115.525 43.4 154.9 24.603 167.592 37.295c12.692 12.692-6.105 52.067-41.984 87.946z", strokeDasharray: "413.3919372558594" },
  { d: "M109.698 109.332c-24.408 24.407-51.12 37.268-59.663 28.726-8.542-8.543 4.319-35.255 28.727-59.662 24.407-24.408 51.12-37.27 59.662-28.727 8.543 8.543-4.319 35.255-28.726 59.663z", strokeDasharray: "280.7110900878906" },
];

export default function SphereAnimation({ onButtonClick }) {
  const sphereEl = useRef(null);
  const spherePathEls = useRef([]);
  const sphereButtonContainerRef = useRef(null);
  const animationWrapperRef = useRef(null);

  const fitElementToParent = (el, padding) => {
    let timeout = null;
    const resize = () => {
      if (timeout) clearTimeout(timeout);
      anime.set(el, { scale: 1 });
      const pad = padding || 0;
      const parentEl = el.parentNode;
      const elOffsetWidth = el.offsetWidth - pad;
      const parentOffsetWidth = parentEl.offsetWidth;
      const ratio = parentOffsetWidth / elOffsetWidth;
      timeout = setTimeout(() => anime.set(el, { scale: ratio }), 10);
    };
    resize();
    window.addEventListener('resize', resize);
  };

  useEffect(() => {
    if (sphereEl.current) {
      fitElementToParent(sphereEl.current);

      var pathLength = spherePathEls.current.length;
      var animations = [];

      const breathAnimation = anime({
        begin: () => {
          for (let i = 0; i < pathLength; i++) {
            animations.push(anime({
              targets: spherePathEls.current[i],
              stroke: { value: ['rgba(57,143,90,1)', 'rgba(80,80,80,.35)'], duration: 500 },
              translateX: [2, -4],
              translateY: [2, -4],
              easing: 'easeOutQuad',
              autoplay: false
            }));
          }
        },
        update: (ins) => {
          animations.forEach((animation, i) => {
            const percent = (1 - Math.sin((i * .35) + (.0022 * ins.currentTime))) / 2;
            animation.seek(animation.duration * percent);
          });
        },
        duration: Infinity,
        autoplay: false
      });

      const introAnimation = anime.timeline({
        autoplay: false
      })
      .add({
        targets: spherePathEls.current,
        strokeDashoffset: {
          value: [anime.setDashoffset, 0],
          duration: 3900,
          easing: 'easeInOutCirc',
          delay: anime.stagger(190, { direction: 'reverse' })
        },
        duration: 2000,
        delay: anime.stagger(60, { direction: 'reverse' }),
        easing: 'linear'
      }, 0);

      const shadowAnimation = anime({
        targets: '#sphereGradient',
        x1: '25%',
        x2: '25%',
        y1: '0%',
        y2: '75%',
        duration: 30000,
        easing: 'easeOutQuint',
        autoplay: false
      }, 0);

      introAnimation.play();
      breathAnimation.play();
      shadowAnimation.play();
    }
  }, []);

  // instead of static blur & mouseover unblur, we'll 'warble' the blur amount
  // of the animated sphere, to make it more enticing to examine and click!
  useEffect(() => {
    const animationWrapper = animationWrapperRef.current;

    // make sure the DOM element for animationWrapper is actually loaded
    if (animationWrapper) {
      const blurAnimation = anime({
        targets: animationWrapper,
        filter: [
          { value: 'blur(4em)', duration: 0 },
          { value: 'blur(2em)', duration: 3000 },
          { value: 'blur(6em)', duration: 1000 },
          { value: 'blur(3em)', duration: 1000 },
          { value: 'blur(1em)', duration: 4000 },
        ],
        loop: true,
        easing: 'easeInQuad',
      });

      const handleMouseEnter = () => {
        blurAnimation.pause();
        animationWrapper.style.filter = 'blur(0)';
      };

      const handleMouseLeave = () => {
        blurAnimation.play();
      };

      animationWrapper.addEventListener('mouseenter', handleMouseEnter);
      animationWrapper.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        animationWrapper.removeEventListener('mouseenter', handleMouseEnter);
        animationWrapper.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);


  const handleButtonClick = () => {
    if (sphereButtonContainerRef.current) {
      // First, we call the parent's onButtonClick, which hides the homepage text.
      // It's the prop we passed to the SphereAnimation functional component.
      onButtonClick();
      // Then, we go ahead and trigger the animation on the button itself.
      anime({
        targets: sphereButtonContainerRef.current,
        opacity: 0,
        filter: 'blur(200px)',
        duration: 5000,
        easing: 'easeInOutSine',
      });
    }
  };

  return (
    <div ref={animationWrapperRef} className={styles.animationWrapper}>
      <div className={styles.sphereAnimation} ref={sphereEl}>
        <div className={styles.sphereButtonContainer} ref={sphereButtonContainerRef}>
          <Button
            className={styles.sphereButton}
            sx={{ borderRadius: '50%', textTransform: 'capitalize' }}
            variant="outlined"
            onClick={handleButtonClick}
          >
            Begin.
          </Button>
        </div>
        <svg className="sphere" viewBox="0 0 440 440" stroke="rgba(80,80,80,.35)">
          <defs>
            <linearGradient id="sphereGradient" x1="25%" x2="25%" y1="0%" y2="75%">
              <stop stopColor="#398F5A" offset="0%"></stop>
              <stop stopColor="#317a4d" offset="50%"></stop>
              <stop stopColor="#296640" offset="100%"></stop>
            </linearGradient>
          </defs>
          {paths.map((path, index) => (
            <path
              key={index}
              ref={el => spherePathEls.current[index] = el}
              fill="url(#sphereGradient)"
              d={path.d}
              strokeDasharray={path.strokeDasharray}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};
