import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// import profileImgPaul from '../assets/media/paul-900x900.jpg';
import stockIMG from '../assets/media/stockIMG.jpg';

import pageImg1 from '../assets/media/logo-paul_meier_fitness-1080x1080.png';
import pageImg2 from '../assets/media/logo-livefit_livelean-640x640.png';
import pageImg3 from '../assets/media/logo-28_day_kickstart-1080x1080.png';

const ProfileLeftNav = ({ user: { firstname, lastname }, profile }) => {
  
    const { displayImage } = profile;
    // console.log(displayImage, 'disp');

    return (
      <Fragment>
        <div className="col-social-nav">
          {/* SECTION - USER SWITCHER */}
          <div className="nav-item-wrapper">
            <div className="nav-item switcher">
              <div className="switcher-image">
                <img src={displayImage ? displayImage : stockIMG} alt=""/>
              </div>
              <div className="switcher-info">
                <Link to='/' className="name">
                  <span>{ `${firstname} ${lastname}`} </span>
                </Link>
                <div className="title">
                  <span> fitness enthusiast </span>
                </div>
                <Link to='/' className="switcher">
                  <span> switch to professional </span>
                </Link>
              </div>
            </div>
          </div>
          {/* SECTION - NAV SHORTCUTS */}
          <div style={{marginTop: '10px'}} className="nav-item-wrapper">
            <div className="nav-item section-title">
              <h3> shortcuts </h3>
            </div>
          </div>
          <Link to='/dashboard' className="nav-item-wrapper">
            <div className="nav-item menu-btn">
              <i className="fas fa-tachometer-alt"></i><h3> dashboard </h3>
            </div>
          </Link>
          <Link to='/' className="nav-item-wrapper">
            <div className="nav-item menu-btn">
              <i className="fas fa-newspaper"></i><h3> newsfeed </h3>
            </div>
          </Link>
          <Link to='/' className="nav-item-wrapper">
            <div className="nav-item menu-btn">
              <i className="fas fa-user"></i><h3> profile </h3>
            </div>
          </Link>
          <Link to='/messages' className="nav-item-wrapper">
            <div className="nav-item menu-btn">
            <i className="fas fa-comment-dots"></i><h3> messages </h3>
            </div>
          </Link>
          <Link to='/groups' className="nav-item-wrapper">
            <div className="nav-item menu-btn">
              <i className="fas fa-users"></i><h3> groups </h3>
            </div>
          </Link>
          {/* SECTION - BUSINESS PAGES */}
          <div style={{marginTop: '20px'}} className="nav-item-wrapper">
            <div className="nav-item section-title">
              <h3> business pages </h3>
            </div>
          </div>
          <Link to='/' className="nav-item-wrapper">
            <div className="nav-item menu-btn-page-group">
              <div className="page-image">
                <img src={pageImg1} alt=""/>
              </div>
              <h3> paul meier fitness </h3>
            </div>
          </Link>
          <Link to='/' className="nav-item-wrapper">
            <div className="nav-item menu-btn-page-group">
              <div className="page-image">
                <img src={pageImg2} alt=""/>
              </div>
              <h3> live fit - live lean </h3>
            </div>
          </Link>
          <Link to='/' className="nav-item-wrapper">
            <div className="nav-item menu-btn-page-group">
              <div className="page-image">
                <img src={pageImg3} alt=""/>
              </div>
              <h3> 28 day fat loss kickstart challenge </h3>
            </div>
          </Link>
          <Link to='/' className="nav-item-wrapper">
            <div className="nav-item menu-btn-page-group create-new">
              <div className="page-image">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3> create a new business </h3>
            </div>
          </Link>
          {/* SECTION - GROUPS */}
          <div style={{marginTop: '20px'}} className="nav-item-wrapper">
            <div className="nav-item section-title">
              <h3> groups </h3>
            </div>
          </div>
          <Link to='/' className="nav-item-wrapper">
            <div className="nav-item menu-btn-page-group">
              <div className="page-image">
                <img src={pageImg1} alt=""/>
              </div>
              <h3> PMF 1:1 clients </h3>
            </div>
          </Link>
          <Link to='/' className="nav-item-wrapper">
            <div className="nav-item menu-btn-page-group">
              <div className="page-image">
                <img src={pageImg2} alt=""/>
              </div>
              <h3> PMF online clients </h3>
            </div>
          </Link>
          <Link to='/' className="nav-item-wrapper">
            <div className="nav-item menu-btn-page-group">
              <div className="page-image">
                <img src={pageImg3} alt=""/>
              </div>
              <h3> 28 day fat loss members </h3>
            </div>
          </Link>
          <Link to='/' className="nav-item-wrapper">
            <div className="nav-item menu-btn-page-group create-new">
              <div className="page-image">
                <i className="fas fa-users"></i>
              </div>
              <h3> create a new group </h3>
            </div>
          </Link>
        </div>
      </Fragment>
    )
};

export default ProfileLeftNav
