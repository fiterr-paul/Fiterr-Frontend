import React from 'react';
import './assets/css/pagenotfound.scss';
import { Link } from 'react-router-dom'

import profileImgPaul from './assets/images/error-page.jpg';


const PageNotFound = () => {

  const scrollPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="pagenotfound">
        <div className="image">
          <img className="profile-image" src={profileImgPaul} alt=""/>
        </div>
        <div className="text">
          <span>This Page Does Not Exist! <br /> <Link onClick={scrollPage} className="link" to='/'>Click Here</Link> and FUCK OFF!</span>
        </div>
      </div>
    </>
  )
};


export default PageNotFound;
