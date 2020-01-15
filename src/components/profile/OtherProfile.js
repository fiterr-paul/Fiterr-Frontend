import React, { useContext, useEffect, Fragment } from 'react';

import SearchContext from '../../context/search/searchContext';
import ProfileContext from '../../context/profile/profileContext';
import AuthContext from '../../context/auth/authContext';

import Spinner from '../layout/Spinner';
import Follow from './Follow';
import OtherPosts from '../posts/OtherPosts';

const OtherProfile = (props) => {

    const searchContext = useContext(SearchContext);
    const { getViewingUserProfile, viewingUser, viewingProfile } = searchContext;

    const profileContext = useContext(ProfileContext);
    const authContext = useContext(AuthContext)

    const { profile, getProfile } = profileContext
    const { user, isAuthenticated, loadUser } = authContext

    const { username } = props; 

    // console.log('Viewing username', username);
    // console.log('Viewing user', viewingUser);

    useEffect(() => {
        getViewingUserProfile({ id: username });  // we supply the username as the unique id, this method stores the viewing user and profile in state
    }, []);


    if(!viewingUser){
        return (
            <Fragment>
                <h1>Fetching user details...</h1>
                <Spinner />
            </Fragment>
        )
    } else {

        const { firstname, lastname, email, gender } = viewingUser;
        const { aboutMe, fitnessInterests, displayImage } = viewingProfile;
        const defaultPic = "https://image.shutterstock.com/z/stock-vector-man-avatar-profile-picture-vector-icon-153720509.jpg";

        return (
            <Fragment>
                <div className="other-profile-container">
                    <div className="other-profile-details">
                        <img width="100px" src={displayImage ? displayImage : defaultPic }/>
                        <h1>{firstname} {lastname}</h1>
                        <h1>Email: {email}</h1>
                        <h1>Gender: {gender}</h1>

                        <br/>
                        <p>About me: {aboutMe}</p>
                        <p>Fitness interests: {fitnessInterests}</p>

                        <Follow viewingProfileId={viewingProfile._id}/>
                    </div>
                </div>
                <OtherPosts viewingUserId={viewingUser._id} />
            </Fragment>
        )
    }
}

export default OtherProfile
