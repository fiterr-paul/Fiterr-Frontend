import React from 'react';
import './assets/css/header-nav.scss';
import { Link } from 'react-router-dom'
import Logo from './assets/images/icn-fiterr-white-500x500.png';

import profileImgPaul from './assets/images/paul-900x900.jpg';


const headerAuthenticated = () => {

  const scrollPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section className="header navbar">
        <div className="container">
          <div className="authenticated">
            <div className="container-header-logo">
              <div className="header-logo">
                <Link onClick={scrollPage} className="link-logo" to='/'>
                  <img src={Logo} className="fiterr-logo" alt="logo" />
                </Link>
              </div>
              <div className="container-header-search">
                <div className="header-search">
                  <form>
                    <input type="text" className="search-field" placeholder="search" />
                    <button type="submit" label="search" className="search-btn"><i className="fas fa-search"></i></button>
                  </form>
                </div>
              </div>
            </div>
            <div className="container-header-nav">
              <div className="header-nav profile">
              
                <Link onClick={scrollPage} className="link-dashboard" to='/'>
                  <i className="fas fa-tachometer-alt"></i>
                  <div className="dashboard-text">
                    <span>dashboard</span>
                  </div>
                </Link>
                <div className="top-nav-vr"></div>
                <Link onClick={scrollPage} className="link-newsfeed" to='/'>
                  <i className="fas fa-newspaper"></i>
                  <div className="newsfeed-text">
                    <span>newsfeed</span>
                  </div>
                </Link>
                <div className="top-nav-vr"></div>
                <Link onClick={scrollPage} className="link-profile" to='/'>
                  <img className="profile-image" src={profileImgPaul} alt=""/>
                  <div className="profile-image-text">
                    <span>paul</span>
                  </div>
                </Link>
                
                  <div className="top-nav-vr"></div>
                  <div className="header-notifications">
                    <i className="fas fa-globe-americas"></i>
                  </div>
                  <div className="header-notifications">
                    <i className="fas fa-comment-dots"></i>
                  </div>
                  <div className="header-notifications">
                    <i className="fas fa-tasks"></i>
                  </div>
                  <div className="top-nav-vr top-nav-vr-last"></div>
                  <div className="header-notifications last">
                    <i className="fas fa-cog"></i>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SubHeaderAuthenticated />
    </>
  )
};

const SubHeaderAuthenticated = () => {

  const scrollPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section className="subheader navbar">
        <div className="container">
          <div className="submenu">
            <div className="col-left">
              <Link onClick={scrollPage} className="link-submenu" to='/'> dashboard </Link>
              <Link onClick={scrollPage} className="link-submenu" to='/'> training </Link>
              <Link onClick={scrollPage} className="link-submenu" to='/'> nutrition </Link>
            </div>
            <div className="col-right">
              <Link onClick={scrollPage} className="link-submenu" to='/'> settings </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};


export default headerAuthenticated;
