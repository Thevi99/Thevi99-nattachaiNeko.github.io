import React from 'react';
import HeroContent from '../sub/HeroContent';
import './Hero.css';

export const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full" id="about-me"'>
        <div className='w-full h-full object-cover absolute z-0 object-center brightness-30 opacity-30 pixelated'>
            <video
            className='w-full h-full object-cover videoTag '
            src= 'purple-moon.mp4'
            autoPlay
            muted
            loop

            width="1920"
            height="1080"
            >
            </video>
        </div>
        <HeroContent />
    </div>
  );
};

export default Hero;