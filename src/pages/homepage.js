import React from 'react';
import './assets/scss/index.scss';
import { Link } from 'react-router-dom';

import splashVideoMP4 from './assets/media/splash-video-optimized.mp4';


const Homepage = () => {
  return (
    <>
      <section className="body homepage">
        <video preload="preload"  id="video" autoPlay="autoplay" loop="loop">
        <source src={splashVideoMP4} type="video/mp4"></source>
        </video>
      </section>
    </>
  )
};


export default Homepage;
