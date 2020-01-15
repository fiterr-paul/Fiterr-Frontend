import React, { Fragment } from 'react'

const ProfileBodyWidgets = () => {
    return (
      <Fragment>
        {/* RIGHT COL - PROFILE INFO WIDGETS */}
        <div className="profile-info-wrapper">
          <div className="profile-info">
            <div className="widget-wrapper">
              <div className="header">
                <div className="icon-bgr">
                  <i className="fas fa-info-circle"></i>
                </div>
                <h3> about paul </h3>
              </div>
              <div className="body no-info">
                <p>nothing to display</p>
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
      </Fragment>
    )
};

export default ProfileBodyWidgets
