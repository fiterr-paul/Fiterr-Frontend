import React from 'react';
import './assets/scss/header-nav.scss';
import { Link } from 'react-router-dom'
import Logo from './assets/media/logo-fiterr-white-3154x1042.png';


const HeaderUnauthenticated = () => {

  const scrollPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="header navbar">
      <div className="container">
        <div className="unauthenticated">
          <div className="container-header-logo">
            <div className="header-logo">
              <Link onClick={scrollPage} className="link-logo" to='/'>
                <img src={Logo} className="fiterr-logo" alt="logo" />
              </Link>
            </div>
          </div>
          <div className="container-header-nav">
            <div className="header-nav">
              <Link onClick={scrollPage} className="link-header" to='/'>home</Link>
              <Link onClick={scrollPage} className="link-header" to='/enthusiasts'>enthusiasts</Link>
              <Link onClick={scrollPage} className="link-header" to='/professionals'>professionals</Link>
              <Link onClick={scrollPage} className="link-header" to='/search'>search</Link>
              <Link onClick={scrollPage} className="link-header" to='/login'>login</Link>
              <Link onClick={scrollPage} className="link-header signup" to='/signup'>signup</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};


export default HeaderUnauthenticated;
