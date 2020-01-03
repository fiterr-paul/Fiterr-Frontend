import React, {useState, useContext, useEffect, Fragment } from 'react'
import ProfileContext from '../../context/profile/profileContext'
import AuthContext from '../../context/auth/authContext'

import Spinner from '../layout/Spinner';
import NewPost from '../posts/NewPost';
import MyPosts from '../posts/MyPosts';

const Profile = (props) => {
    const profileContext = useContext(ProfileContext);
    const authContext = useContext(AuthContext)
    
    const { profile, getProfile } = profileContext
    const { user, isAuthenticated, loadUser } = authContext

    const defaultPic = "https://image.shutterstock.com/z/stock-vector-man-avatar-profile-picture-vector-icon-153720509.jpg";

    // console.log('does a profile exist?', profile)
    // console.log('does a user exist?', user)
    
    if(!user || !profile){
        // seems that sometimes user and isauthenticated dont go into the state at the same time (user is a bigger object so its slower)
        return (
            <Fragment>
                <h1>Loading your profile...</h1>
                <Spinner />
            </Fragment>
        )
    } else {
    
        return(
            <Fragment>
                <div className="other-profile-container">
                    <div className="other-profile-details">
                        <h1>Welcome To Your Profile {user.username}</h1>

                        <img width="100px" src={profile.displayImage ? profile.displayImage : defaultPic} alt="Display Photo"/>
                        <p>About Me: {profile.aboutMe}</p>
                        <p>Fitness Interests: {profile.fitnessInterests}</p>

                        <div className="followers">
                            <h3>Followers: {profile.followers.length}</h3>
                            {profile.followers.map(follower => {
                                return <p>{follower.username}</p>
                            })}
                            <h3>Following: {profile.following.length}</h3>
                        </div>
                    </div>
                </div>
                <NewPost />
                <MyPosts />
            </Fragment>
        )
    }
}

export default Profile