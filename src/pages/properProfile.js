import React, { useContext, useEffect, useState, Fragment } from 'react'
import { useParams } from 'react-router-dom';
import StickyBox from "react-sticky-box";
import ProfileLeftNav from '../components/proper-profile/ProfileLeftNav'
import ProfileHeader from '../components/proper-profile/ProfileHeader'
import Spinner from '../components/layout/Spinner';

import './assets/scss/index.scss';

// contexts 
import AuthContext from '../context/auth/authContext';
import ProfileContext from '../context/profile/profileContext';

// CONCLUSION: although this could potentially be modified down the track, i think it would be best to just have two separate profile pages

const ProperProfile = () => {

    // need to check whether the profile page that you are on is yours or is someone elses
    const { username } = useParams();

    const authContext = useContext(AuthContext);
    const profileContext = useContext(ProfileContext);

    // do not destructure on the top level component because you do not have access to the elements before you load in the state
    const { profile, otherProfile, getMyProfile, getOtherProfile } = profileContext;
    const { user, isAuthenticated, loadUser } = authContext;

    if(user && user.username === username) { console.log('we are on our profile now') }

    useEffect(() => {
      console.log('this use effect occurs first on mount')
    }, [])

    // need the useEffect to relog back in on page refresh (especially in development)
    useEffect(() => {
      if (!isAuthenticated) { loadUser() } 
      else if (isAuthenticated && !profile) { getMyProfile() } 
      else if (user.username !== username) { getOtherProfile(username) }

      // return () => {
      //   console.log('PROFILE PAGE unmounting of the component')
      //   // clearOtherPosts();
      //   // need to clear the othePosts state and the otherProfile state too on an unmount
      // }
    }, [isAuthenticated, profile])


    console.log('--------', user, profile, otherProfile);

    if(!isAuthenticated || !profile) {
      return (
          <Fragment>
              <h1>Loading my user...</h1>
              <Spinner />
          </Fragment>
      )
    } else if ((user.username !== username) && (!otherProfile || (otherProfile && otherProfile.user.username !== username)) ) {
      return (
        <Fragment>
            <h1>Fetching other users profile ...</h1>
        </Fragment>
      )
    } else {
      // console.log('otherProfile', otherProfile);
      // console.log('myProfile', profile);
      let ourProfile = (user.username === username);

      return (
          <Fragment>
            <section className="body profile">
              <div className="container">
                {/* LEFT COL - NAVIGATION */}
                <StickyBox offsetTop={60} offsetBottom={10}>
                  <ProfileLeftNav profile={profile}/>
                </StickyBox>
      
                {/* RIGHT COL - PROFILE */}
                <ProfileHeader profile={ourProfile ? profile : otherProfile} ourProfile={ourProfile}/>
              </div>
            </section>
          </Fragment>
      )
    }
}

export default ProperProfile