import React, {useState, useContext, useEffect } from 'react'
import ProfileContext from '../../context/profile/profileContext'
import AuthContext from '../../context/auth/authContext'

const Profile = (props) => {
    const profileContext = useContext(ProfileContext);
    const authContext = useContext(AuthContext)
    // destructure anything from profileContext
    const { profile, getProfile } = profileContext
    const { user } = authContext
    const findDisplayPhoto = () => {
        const profilePic = profile.images.forEach(photo => {
            if(photo.displayPhoto){
                return photo
            }
        });
        return profilePic
    }
    getProfile(user)
    return(
        <>
            <h1>Welcome To Your Profile {user.username}</h1>
            <img src={findDisplayPhoto} alt="Display Photo"/>
            <p>{profile.aboutMe}</p>
            <p>{profile.fitnessInterests}</p>
        </>
    )
}

export default Profile