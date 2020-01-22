import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import profileImgPaul from '../../components/assets/media/paul-900x900.jpg';
import nyePaul from '../../components/assets/media/nye.jpg';
import coverImage from '../../components/assets/media/sports-bike.jpg';
import profileImgFatBastard from '../../components/assets/media/fatbastard-185x185.jpg';
import pageImg1 from '../../components/assets/media/logo-paul_meier_fitness-1080x1080.png';
import pageImg2 from '../../components/assets/media/logo-livefit_livelean-640x640.png';
import pageImg3 from '../../components/assets/media/logo-28_day_kickstart-1080x1080.png';


const PageLeftNav = () => {
    return (
      <div className="col-social-nav">
        <div className="page-image-wrapper">
          <div className="page-image-border">
            <div className="page-image">
              <img src={profileImgPaul} alt="Profile Image"/>
              <div className="image-update">
                <i className="fas fa-camera"></i>
                <h3>update</h3>
              </div>
            </div>
          </div>
        </div>
        {/* SECTION - NAV SHORTCUTS */}
        <div className="nav-item-wrapper page-title-handle">
          <div className="nav-item page-title">
            <h1> paul meier fitness </h1>
          </div>
          <div className="nav-item page-handle">
            <h3> @fitpaulm </h3>
          </div>
        </div>
        <Link to='/dashboard' className="page-nav-item-wrapper">
          <div className="nav-item menu-btn">
            <h3> home </h3>
          </div>
        </Link>
        <Link to='/' className="page-nav-item-wrapper">
          <div className="nav-item menu-btn">
            <h3> about </h3>
          </div>
        </Link>
        <Link to='/' className="page-nav-item-wrapper">
          <div className="nav-item menu-btn">
            <h3> services </h3>
          </div>
        </Link>
        <Link to='/' className="page-nav-item-wrapper">
          <div className="nav-item menu-btn">
            <h3> trainers </h3>
          </div>
        </Link>
        <Link to='/' className="page-nav-item-wrapper">
          <div className="nav-item menu-btn">
            <h3> photos </h3>
          </div>
        </Link>
      </div>
    )
};
export default PageLeftNav