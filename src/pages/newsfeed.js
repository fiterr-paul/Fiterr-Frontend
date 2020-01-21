import React, { useState, useContext, useEffect, Fragment } from 'react'

import AuthContext from '../context/auth/authContext'
import ProfileContext from '../context/profile/profileContext'

import StickyBox from "react-sticky-box";

// Components
import Spinner from '../components/layout/Spinner';
import ProfileLeftNav from '../components/profile/ProfileLeftNav';
import NewsfeedMain from '../components/newsfeed/NewsfeedMain';


const Newsfeed = () => {
    const { loadUser, isAuthenticated } = useContext(AuthContext)
    const { profile, getMyProfile } = useContext(ProfileContext)
     
    useEffect(() => {
        if(!isAuthenticated){ loadUser() }
        else if(isAuthenticated && !profile){ getMyProfile() }
    }, [isAuthenticated]);


    if(!isAuthenticated || !profile){
        return (
            <Fragment>
                <h1>Loading user...</h1>
                <Spinner />
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <section className="body newsfeed">
                    <div className="container">
                    {/* LEFT COL - NAVIGATION */}
                    <StickyBox offsetTop={60} offsetBottom={10}>
                        <ProfileLeftNav />
                    </StickyBox>

                    {/* RIGHT COL - PROFILE */}
                    <NewsfeedMain />
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Newsfeed
