import React, { useContext, useEffect, useState, Fragment } from 'react';

import SearchContext from '../context/search/searchContext';
import AuthContext from '../context/auth/authContext';
import ProfileContext from '../context/profile/profileContext';

// import MyProfile from './MyProfile'; // not going to use this anymore as Jordy's Profile component acts as the myprofile component

import Spinner from '../components/layout/Spinner';
import MyProfile from '../components/profile/MyProfile';
import OtherProfile from '../components/profile/OtherProfile';

const Profile = (props) => {

    const authContext = useContext(AuthContext);
    const profileContext = useContext(ProfileContext);

    // console.log('User state is currently:', user);
    const { user, isAuthenticated, loadUser } = authContext;
    const { profile, getProfile } = profileContext;

    const { match: { params: { username } } } = props;

    // Need to put loading code in useEffect, otherwise it just constantly runs in a loop if placed outside
    useEffect(() => {
        if(!isAuthenticated){ loadUser() }  // need this line to relog back in on a page in development
        if(isAuthenticated && !profile){ getProfile(user._id) }
    }, [isAuthenticated])
    
    if(!isAuthenticated && !profile){
        return (
            <Fragment>
                <h1>Loading user...</h1>
                <Spinner />
            </Fragment>
        )
    } else {
        // logic to determine whether we show our profile or another users profile
        if(username == user._id || username === user.username) {
            return (
                <MyProfile />
            )
        } else {
            return (
                <OtherProfile username={username}/>
            )
        }
    }
}

export default Profile
