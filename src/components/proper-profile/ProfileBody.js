import React, { Fragment } from 'react';
import StickyBox from "react-sticky-box";
import ProfileBodyTimeline from './ProfileBodyTimeline';
import ProfileBodyWidgets from './ProfileBodyWidgets';

const ProfileBody = () => {
    return (
      <Fragment>
        <div className="profile-body-container">
          {/* LEFT COL - PROFILE TIMELINE */}
          <ProfileBodyTimeline />
          {/* RIGHT COL - PROFILE INFO WIDGETS */}
          <StickyBox offsetTop={70} offsetBottom={0}>
            <ProfileBodyWidgets />
          </StickyBox>
        </div>
      </Fragment>
    )
};

export default ProfileBody
