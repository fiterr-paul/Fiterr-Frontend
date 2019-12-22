import React, {useState, useContext, useEffect } from 'react'
import ProfileContext from '../../context/profile/profileContext'
import AuthContext from '../../context/auth/authContext'
import PostContext from '../../context/post/postContext'

const Profile = (props) => {
    const profileContext = useContext(ProfileContext);
    const authContext = useContext(AuthContext)
    const postContext = useContext(PostContext)
    // destructure anything from profileContext
    const { profile, getProfile } = profileContext
    const { user, isAuthenticated, loadUser } = authContext
    const { myPosts } = postContext
    const defaultPic = "https://image.shutterstock.com/z/stock-vector-man-avatar-profile-picture-vector-icon-153720509.jpg"
    if(!isAuthenticated){loadUser()}
    if(!profile){getProfile()}

    console.log('does a profile exist?', profile)
    
    
    return(
        <>
            <h1>Welcome To Your Profile {user.username}</h1>

            {/* <img width="100px" src={profile.displayImage? profile.displayImage : defaultPic} alt="Display Photo"/> */}
            <p>About Me: {profile.aboutMe}</p>
            <p>{profile.fitnessInterests}</p>

            <div className="followers">
                <h3>Followers: {profile.followers.length}</h3>
                {profile.followers.map(follower => {
                    return <p>{follower.username}</p>
                })}
                <h3>Following: {profile.following.length}</h3>
            </div>

            <div className="user-posts">
                {myPosts.map(post, index=> {
                    return(
                        <div key={index}>
                            <h4 className="postTitle">{post.title}</h4>
                            <p className="content">{post.content}</p>
                            <p className="likes">{post.likes.length()}</p>
                            <p className="postDate">{post.postedAt}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Profile