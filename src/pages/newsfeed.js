import React, { useState, useContext, useEffect } from 'react'
import NewPost from '../components/posts/NewPost'
import PostContext from '../context/post/postContext'
import AuthContext from '../context/auth/authContext'
import ProfileContext from '../context/profile/profileContext'


const Newsfeed = (props) => {
    const postContext = useContext(PostContext)
    const authContext = useContext(AuthContext)
    const profileContext = useContext(ProfileContext)
     
    const { loadUser, isAuthenticated, user } = authContext

    if(!isAuthenticated){loadUser()}
    console.log('ihaveuser', user);

    const { profile, getProfile } = profileContext
    const { getFollowingPosts, followingPosts } = postContext

    if(isAuthenticated && !profile){
        getProfile(user._id)
    } else { 
        console.log('we already have a profile loaded') 
    }
    console.log('Profile', profile);

    
    useEffect(()=>{
        getFollowingPosts()
    }, [])


    if(followingPosts){
        const posts = followingPosts.map(function(post) {
            return(
            <div>
                <h1>{post.title}</h1>
                <p>{post.description}</p>
                <img src={post.image} alt="Post Image"/>
            </div>
            ) 
        })
        return(
            <>
                <section className="body">
                    <div className="container">
                        <h1>Newsfeed</h1>
                        <div>
                            <NewPost />
                        </div>
                        <div className="followingPosts">
                            {posts}
                        </div>
                    </div>
                </section> 
            </>
        )
    }
    return (
        <>
           <section className="body">
                <div className="container">
                    <h1>Newsfeed</h1>
                    <div>
                        <NewPost />
                    </div>
                    <p>FOllow more people to see posts</p>
                </div>
            </section> 
        </>
    )
}

export default Newsfeed
