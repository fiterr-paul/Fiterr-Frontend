import React, { Fragment } from 'react';
import StickyBox from "react-sticky-box";
import ProfileBodyTimeline from './ProfileBodyTimeline';
import ProfileBodyWidgets from './ProfileBodyWidgets';


const ProfileBody = ({ profile, ourProfile }) => {
  
    if(ourProfile) { 
      console.log('our profile', profile) 
    } else { 
      console.log('not our profile', profile) 
    }

    return (
      <Fragment>
        <div className="profile-body-container">
          {/* LEFT COL - PROFILE TIMELINE */}
          <ProfileBodyTimeline profile={profile} ourProfile={ourProfile} />
          {/* RIGHT COL - PROFILE INFO WIDGETS */}
          <StickyBox offsetTop={70} offsetBottom={0}>
            <ProfileBodyWidgets profile={profile} />
          </StickyBox>
        </div>
      </Fragment>
    )
};

export default ProfileBody
