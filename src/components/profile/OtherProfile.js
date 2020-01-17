import React, { useContext, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import StickyBox from "react-sticky-box";
import ProfileLeftNav from '../profile/ProfileLeftNav'
import ProfileHeader from '../profile/ProfileHeader';
import Spinner from '../../components/layout/Spinner';

import ProfileContext from '../../context/profile/profileContext';

import '../../pages/assets/scss/index.scss'

const OtherProfile = () => {

    const { username } = useParams();

    const profileContext = useContext(ProfileContext);
    const { otherProfile, getOtherProfile } = profileContext;

    useEffect(() => {
      console.log('hit the other profile use effect');
      getOtherProfile(username);
    }, [])

    // might need to change the if logic here a bit
    if (!otherProfile) {
      return (
        <Fragment>
          <h1>Fetching the users profile...</h1>
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
                    <ProfileLeftNav/>
                  </StickyBox>
        
                  {/* RIGHT COL - PROFILE */}
                  <ProfileHeader profile={otherProfile} ourProfile={false}/>
                </div>
              </section>
          </Fragment>
      )
    }

}

export default OtherProfile
