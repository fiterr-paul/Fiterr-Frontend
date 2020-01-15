import React, {useReducer, useContext} from 'react';
import PostContext from './postContext';
import postReducer from './postReducer';
import { UPDATE_LAST_POST, SET_POSTS, FIND_FOLLOWING_POSTS, REMOVE_POST, GET_VIEWING_POSTS, CLEAR_POST_STATE, UPDATE_POSTS, UPDATE_LIKES } from '../types'
import AuthContext from '../auth/authContext';
import ProfileContext from '../profile/profileContext'

import request from '../../utils/axios-config'

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const PostState = props => {
    const initialState = {
        myPosts: null,  // null or []?
        lastPost: null,
        followingPosts: null, // to use on newsfeed for getting array of date sorted posts
        viewingPosts: null,
    }
    const [state, dispatch] = useReducer(postReducer, initialState);

    const authContext = useContext(AuthContext) // in order to send userId as param to find posts by that user 
    const {user} = authContext

    const profileContext = useContext(ProfileContext)
    const { profile } = profileContext


    const makePost = async (formData) => {
        // console.log(formData.get('postTitle'));  // <-- can use this to see is formData has a certain field
        const response = await request.post('/api/posts/create-post', formData, config);
        console.log('This is the new post:', response.data);

        dispatch({
            type: UPDATE_POSTS,
            payload: response.data
        })
    }

    const like = async (id) => {
        const res = await request.put(`/api/posts/like/${id}`);
        console.log('The new likes array', res.data);

        dispatch({
            type: UPDATE_LIKES,
            payload: { id, likes: res.data }
        })
        
    }

    const getUserPosts = async () => {
        const response = await request.get(`/api/posts/my-posts`, config) // call after a makePost in order to include the lastest post last
        console.log(response.data);
        dispatch({
            type: SET_POSTS,
            payload: response.data
        })
    }

    const removePost = async (id) => {
        const resp = await request.delete(`/api/posts/delete-post/${id}`);
        const refreshedPosts = state.myPosts.filter(post => post._id !== id);
        console.log(refreshedPosts);
        dispatch({
            type: REMOVE_POST,
            payload: refreshedPosts
        })
    }


    //-----------------------------------------------------------------------------------------
    // jords
    const getFollowingPosts = async() => {
        console.log(profile)
        console.log(profile.following) // its saying cant find property following of null but when i log profile it exists? 
        const followingJSON = JSON.stringify(profile.following)
        console.log('followingjson', followingJSON)
        
        const response  = await request.get(`/api/posts/following-posts?following=${followingJSON}`) //need profileID to access following users to find their posts
        dispatch({
            type: FIND_FOLLOWING_POSTS,
            payload: response.data
        })  
    }
    //-----------------------------------------------------------------------------------------


    // similar to getFollowingPosts above
    const getNewsfeedPosts = async() => {
        const res = await request.get('/api/posts/newsfeed-posts');
        console.log('got dat data', res.data);
        return res.data;
    }

    // get posts for the user profile that you are viewing
    const getViewingUserPosts = async(id) => {
        try {
            const res = await request.get(`/api/posts/viewing-users-posts/${id}`);
            console.log(res.data)

            dispatch({
                type: GET_VIEWING_POSTS,
                payload: res.data
            })
            // console.log(res);
        } catch (err) {
            console.log(err);
        }
    }

    const clearPostState = () => {
        dispatch({
            type: CLEAR_POST_STATE
        })
    }

    return(
        <PostContext.Provider
            value={{
                myPosts: state.myPosts,
                lastPost: state.lastPost,
                followingPosts: state.followingPosts,
                viewingPosts: state.viewingPosts,
                makePost,
                getFollowingPosts,
                getUserPosts,
                removePost,
                getNewsfeedPosts,
                getViewingUserPosts,
                clearPostState
            }}>
                { props.children }
        </PostContext.Provider>
    )

}
export default PostState
