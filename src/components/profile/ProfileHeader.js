import React, { Fragment } from 'react'
import ProfileBody from './ProfileBody';

const ProfileHeader = ({ profile, ourProfile }) => {

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
          <ProfileBody profile={profile} ourProfile={ourProfile}/>
        </div>
      </Fragment>
    )
};

export default ProfileHeader
