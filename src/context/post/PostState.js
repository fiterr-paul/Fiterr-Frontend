import React, {useReducer, useContext} from 'react';
import PostContext from './postContext';
import postReducer from './postReducer';
import { UPDATE_LAST_POST, SET_POSTS, FIND_FOLLOWING_POSTS } from '../types'
import AuthContext from '../auth/authContext';
import ProfileContext from '../profile/profileContext'

import request from '../../utils/axios-config'

const config = {
    headers:{
        'Content-Type': 'application/json'
    }
}

const PostState = props => {
    const initialState = {
        myPosts: null,
        lastPost: null,
        followingPosts: null // to use on newsfeed for getting array of date sorted posts
    }
    const [state, dispatch] = useReducer(postReducer, initialState);

    const authContext = useContext(AuthContext) // in order to send userId as param to find posts by that user 
    const {user} = authContext

    const profileContext = useContext(ProfileContext)
    const { profile } = profileContext


    const makePost = async (formData) => {
        const response = await request.post('/api/newsfeed/create-post', formData, config)
        dispatch({
            type: UPDATE_LAST_POST,
            payload: response.data
        })
    }

    const getUserPosts = async () => {
        const response = await request.get(`/api/newsfeed/get-my-posts?userID=${user._id}`, config) // call after a makePost in order to include the lastest post last
        dispatch({
            type: SET_POSTS,
            payload: response.data
        })
    }

    const getFollowingPosts = async() => {
        console.log(profile)
        console.log(profile.following) // its saying cant find property following of null but when i log profile it exists? 
        const followingJSON = JSON.stringify(profile.following)
        console.log('followingjson', followingJSON)
        
        const response  = await request.get(`/api/users/following-posts?following=${followingJSON}`) //need profileID to access following users to find their posts
        dispatch({
            type: FIND_FOLLOWING_POSTS,
            payload: response.data
        })  

    }

    return(
        <PostContext.Provider
            value={{
                myPosts: state.myPosts,
                lastPost: state.lastPost,
                followingPosts: state.followingPosts,
                makePost,
                getFollowingPosts,
                getUserPosts
            }}>
                { props.children }
        </PostContext.Provider>
    )

}
export default PostState
