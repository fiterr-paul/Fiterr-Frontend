import React from 'react'
import {Link} from 'react-router-dom'

import profileImgPaul from '../../components/assets/media/paul-900x900.jpg';
import nyePaul from '../../components/assets/media/nye.jpg';
import coverImage from '../../components/assets/media/sports-bike.jpg';
import profileImgFatBastard from '../../components/assets/media/fatbastard-185x185.jpg';
import pageImg1 from '../../components/assets/media/logo-paul_meier_fitness-1080x1080.png';
import pageImg2 from '../../components/assets/media/logo-livefit_livelean-640x640.png';
import pageImg3 from '../../components/assets/media/logo-28_day_kickstart-1080x1080.png';

const PageBodyWidgets = () => {
    return (
      <>
        {/* RIGHT COL - PROFILE INFO WIDGETS */}
        <div className="profile-info-wrapper">
          <div className="profile-info">
            <div className="widget-wrapper">
              <div className="header">
                <div className="icon-bgr">
                  <i className="fas fa-info-circle"></i>
                </div>
                <h3> about </h3>
              </div>
              <div className="body no-info">
                <p>nothing to display</p>
              </div>
            </div>
            <div className="widget-wrapper">
              <div className="header">
                <div className="icon-bgr">
                  <i className="fas fa-info-circle"></i>
                </div>
                <h3> our personal trainers </h3>
              </div>
              {/* <div className="body no-info">
                <p>nothing to display</p>
              </div> */}
              <div className="body thumbnails">
                <Link to='/' className="thumbnail-widget recomended">
                  <div className="page-image">
                    <img src={pageImg1} alt=""/>
                  </div>
                  <div className="page-name">
                    <h3> paul meier fitness </h3>
                  </div>
                </Link>
                <Link to='/' className="thumbnail-widget recomended">
                  <div className="page-image">
                    <img src={pageImg1} alt=""/>
                  </div>
                  <div className="page-name">
                    <h3> paul meier fitness </h3>
                  </div>
                </Link>
                <Link to='/' className="thumbnail-widget recomended">
                  <div className="page-image">
                    <img src={pageImg1} alt=""/>
                  </div>
                  <div className="page-name">
                    <h3> paul meier fitness </h3>
                  </div>
                </Link>
                <Link to='/' className="thumbnail-widget recomended">
                  <div className="page-image">
                    <img src={pageImg1} alt=""/>
                  </div>
                  <div className="page-name">
                    <h3> paul meier fitness </h3>
                  </div>
                </Link>
                <Link to='/' className="thumbnail-widget recomended">
                  <div className="page-image">
                    <img src={pageImg1} alt=""/>
                  </div>
                  <div className="page-name">
                    <h3> paul meier fitness </h3>
                  </div>
                </Link>
                <Link to='/' className="thumbnail-widget recomended">
                  <div className="page-image">
                    <img src={pageImg1} alt=""/>
                  </div>
                  <div className="page-name">
                    <h3> paul meier fitness </h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className="widget-wrapper">
              <div className="header">
                <div className="icon-bgr">
                  <i className="fas fa-user-friends"></i>
                </div>
                <h3> followers <span> (169) </span> </h3>
              </div>
              {/* <div className="body no-info">
                <p>nothing to display</p>
              </div> */}
              <div className="body thumbnails">
                <div className="thumbnail-widget">
                  <i className="fas fa-user"></i>
                </div>
                <div className="thumbnail-widget">
                  <i className="fas fa-user"></i>
                </div>
                <div className="thumbnail-widget">
                  <i className="fas fa-user"></i>
                </div>
                <div className="thumbnail-widget">
                  <i className="fas fa-user"></i>
                </div>
                <div className="thumbnail-widget">
                  <i className="fas fa-user"></i>
                </div>
                <div className="thumbnail-widget">
                  <i className="fas fa-user"></i>
                </div>
                <div className="thumbnail-widget">
                  <i className="fas fa-user"></i>
                </div>
                <div className="thumbnail-widget">
                  <i className="fas fa-user"></i>
                </div>
                <div className="thumbnail-widget">
                  <i className="fas fa-user"></i>
                </div>
              </div>
            </div>
            <div className="widget-wrapper">
              <div className="header">
                <div className="icon-bgr">
                  <i className="fas fa-camera"></i>
                </div>
                <h3> photos </h3>
              </div>
              {/* <div className="body no-info">
                <p>nothing to display</p>
              </div> */}
              <div className="body thumbnails">
                <div className="thumbnail-widget">
                  <i className="fas fa-camera"></i>
                </div>
                <div className="thumbnail-widget">
                  <i className="fas fa-camera"></i>
                </div>
                <div className="thumbnail-widget">
                  <i className="fas fa-camera"></i>
                </div>
                <div className="thumbnail-widget">
                  <i className="fas fa-camera"></i>
                </div>
                <div className="thumbnail-widget">
                  <i className="fas fa-camera"></i>
                </div>
                <div className="thumbnail-widget">
                  <i className="fas fa-camera"></i>
                </div>
                <div className="thumbnail-widget">
                  <i className="fas fa-camera"></i>
                </div>
                <div className="thumbnail-widget">
                  <i className="fas fa-camera"></i>
                </div>
                <div className="thumbnail-widget">
                  <i className="fas fa-camera"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
};

export default PageBodyWidgets