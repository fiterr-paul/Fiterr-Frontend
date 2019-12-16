import React, {useState, useContext, useEffect } from 'react'
import ProfileContext from '../../context/profile/profileContext'
import AuthContext from '../../context/auth/authContext'

const Profile = (props) => {
    const profileContext = useContext(ProfileContext);
    const authContext = useContext(AuthContext)
    // destructure anything from profileContext
    const { profile, getProfile } = profileContext
    const { user, isAuthenticated, loadUser } = authContext
    const defaultPic = "https://image.shutterstock.com/z/stock-vector-man-avatar-profile-picture-vector-icon-153720509.jpg"
    if(!isAuthenticated){loadUser()}
    if(!profile){getProfile()}
    console.log(profile)
    


    
    return(
        <>
            <h1>Welcome To Your Profile {user.username}</h1>

            <img width="100px" src={profile.displayImage? profile.displayImage : defaultPic} alt="Display Photo"/>
            <p>About Me: {profile.aboutMe}</p>
            <p>{profile.fitnessInterests}</p>

            <div className="followers">
                <h3>Followers: {profile.followers.length}</h3>
                {profile.followers.map(follower => {
                    return <p>{follower.username}</p>
                })}
                <h3>Following: {profile.following.length}</h3>
            </div>
        </>
    )
}

export default Profile