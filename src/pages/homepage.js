import React from 'react';
import './assets/scss/index.scss';

import splashVideoMP4 from './assets/media/splash-video-optimized.mp4';


const Homepage = () => {
  return (
    <>
      <section className="body homepage">
        <div className="video-overlay">
          <video preload="preload"  id="video" autoPlay="autoplay" loop="loop">
            <source src={splashVideoMP4} type="video/mp4"></source>
          </video>
        </div>
      </section>
    </>
  )
};


export default Homepage;
