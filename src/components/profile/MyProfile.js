import React, { Fragment } from 'react';
import StickyBox from "react-sticky-box";
import ProfileLeftNav from '../profile/ProfileLeftNav'
import ProfileHeader from '../profile/ProfileHeader';
import Spinner from '../../components/layout/Spinner';

// import './assets/scss/index.scss';
import '../../pages/assets/scss/index.scss'

const MyProfile = ({ profile }) => {
    return (
        <Fragment>
            <section className="body profile">
              <div className="container">
                {/* LEFT COL - NAVIGATION */}
                <StickyBox offsetTop={60} offsetBottom={10}>
                  <ProfileLeftNav/>
                </StickyBox>
      
                {/* RIGHT COL - PROFILE */}
                <ProfileHeader profile={profile} ourProfile={true}/>
              </div>
            </section>
        </Fragment>
    )
}

export default MyProfile
