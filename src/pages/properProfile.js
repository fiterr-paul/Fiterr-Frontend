import React, { useContext, useEffect, Fragment } from 'react'
import StickyBox from "react-sticky-box";
import ProfileLeftNav from '../components/proper-profile/ProfileLeftNav'
import ProfileHeader from '../components/proper-profile/ProfileHeader'
import Spinner from '../components/layout/Spinner';

import './assets/scss/index.scss';

// contexts 
import AuthContext from '../context/auth/authContext';
import ProfileContext from '../context/profile/profileContext';


const ProperProfile = ({ match: { params: { username } } }) => {

    const authContext = useContext(AuthContext);
    const profileContext = useContext(ProfileContext);

    const { profile, getProfile, loadMyUserAndProfile } = profileContext
    const { user, isAuthenticated, loadUser } = authContext

    // need this line to relog back in on a page in development
    useEffect(() => {
      if(!isAuthenticated){ loadUser() } 
      if(isAuthenticated && !profile){ getProfile(user._id) }
    }, [isAuthenticated, profile])

    if(!isAuthenticated || !profile) {
      return (
          <Fragment>
              <h1>Loading user...</h1>
              <Spinner />
          </Fragment>
      )
    } else {
      return (
          <Fragment>
            <section className="body profile">
              <div className="container">
                {/* LEFT COL - NAVIGATION */}
                <StickyBox offsetTop={60} offsetBottom={10}>
                  <ProfileLeftNav user={user} profile={profile}/>
                </StickyBox>
      
                {/* RIGHT COL - PROFILE */}
                <ProfileHeader />
              </div>
            </section>
          </Fragment>
      )
    }
}

export default ProperProfile