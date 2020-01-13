import React, { useState, useContext, useEffect, Fragment } from 'react'
import NewPost from '../components/posts/NewPost'
import NewsfeedPosts from '../components/posts/NewsfeedPosts'
import AuthContext from '../context/auth/authContext'
import ProfileContext from '../context/profile/profileContext'

import Spinner from '../components/layout/Spinner';

const Newsfeed = (props) => {
    const authContext = useContext(AuthContext)
    const profileContext = useContext(ProfileContext)
     
    const { loadUser, isAuthenticated, user } = authContext
    const { profile, getProfile } = profileContext

    // on page reload, we need to put the profile and the user back into the state
    // if(!isAuthenticated){ loadUser() }
    // if(user && !profile){ getProfile(user._id) }
    // console.log('reload', isAuthenticated, user, profile);

    useEffect(() => {
        if(!isAuthenticated){ loadUser() }
        if(user && !profile){ getProfile(user._id) }
        console.log('Component reloaded')
    }, [isAuthenticated]);


    if(!isAuthenticated && !profile){
        return (
            <Fragment>
                <h1>Loading user...</h1>
                <Spinner />
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <section className="body">
                    <div className="container">
                        <h1>Newsfeed</h1>
                        <div>
                            <NewPost />
                        </div>
                        <div className="followingPosts">
                            <NewsfeedPosts/>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Newsfeed
