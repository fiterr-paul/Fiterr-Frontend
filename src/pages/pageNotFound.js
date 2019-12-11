import React from 'react';
import './assets/scss/index.scss';
import { Link } from 'react-router-dom'

import profileImgPaul from './assets/media/error-page.jpg';


const PageNotFound = () => {

  const scrollPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section className="body">
        <div className="container">
          <div className="pagenotfound">
            <div className="image">
              <img className="profile-image" src={profileImgPaul} alt=""/>
            </div>
            <div className="text">
              <span>This Page Does Not Exist! <br /> <Link onClick={scrollPage} className="link" to='/'>Click Here</Link> and FUCK OFF!</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};


export default PageNotFound;
