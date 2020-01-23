import React, { useContext, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import AuthContext from '../context/auth/authContext';
import ProfileContext from '../context/profile/profileContext';

import Spinner from '../components/layout/Spinner';
import MyProfile from '../components/profile/MyProfile';
import OtherProfile from '../components/profile/OtherProfile';

const Profile = () => {

    const { username } = useParams();
    const { user, isAuthenticated, loadUser } = useContext(AuthContext);
    const { profile, getMyProfile } = useContext(ProfileContext);

    // Reload your user on a page refresh
    useEffect(() => {
        if(!isAuthenticated){ loadUser() }
        else if(isAuthenticated && !profile){ getMyProfile() }
        // eslint-disable-next-line
    }, [isAuthenticated])
    
    if(!isAuthenticated || !profile){
        return (
            <Fragment>
                <h1>Loading user...</h1>
                <Spinner />
            </Fragment>
        )
    } else {
        return (
            user.username === username ? <MyProfile profile={profile} /> : <OtherProfile />
        )
    }
}

export default Profile
