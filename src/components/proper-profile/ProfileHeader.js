import React, { Fragment } from 'react'
// need to import the profile body here
import ProfileBody from './ProfileBody';

const ProfileHeader = () => {
    return (
      <Fragment>
        <div className="col-profile">
  
          <div className="profile-header-container">
            <div className="cover-image-wrapper">
              <div className="cover-image">
              </div>
            </div>
            <div className="profile-nav-container">
              <div className="profile-image-wrapper">
                <div className="profile-image">
                </div>
              </div>
              <div className="profile-nav-wrapper">
                <div className="profile-nav">
                </div>
              </div>
            </div>
          </div>
          <ProfileBody />
        </div>
      </Fragment>
    )
};

export default ProfileHeader
