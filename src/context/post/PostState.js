import React, {useReducer} from 'react';
import PostContext from './postContext';
import postReducer from './postReducer';

import { 
    GET_POSTS,
    GET_NEWSFEED,
    REMOVE_POST, 
    UPDATE_POSTS, 
    UPDATE_LIKES, 
    ADD_COMMENT, 
    REMOVE_COMMENT, 
    UPDATE_COMMENT_LIKES, 
    UPDATE_COMMENT_REPLY ,
    UPDATE_COMMENT_REPLY_LIKES,
    REMOVE_REPLY,
    CLEAR_POST_STATE, 
    GET_PAGE_POSTS
} from '../types'

import request from '../../utils/axios-config'

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}


const PostState = props => {
    const initialState = {
        posts: null,
        loading: false
    }

    const [state, dispatch] = useReducer(postReducer, initialState);

    // WORKS
    const makePost = async (formData) => {
        // console.log(formData.get('postTitle'));  // <-- can use this to see is formData has a certain field
        const response = await request.post('/api/posts/create-post', formData, config);
        console.log('This is the new post:', response.data);

        dispatch({
            type: UPDATE_POSTS,
            payload: response.data
        })
    }

    
    // get posts gets the posts on either your page or another users page
    // WORKS
    const getPosts = async (id) => {
        try {
            console.log('we get the id', id);

            const res = await request.get(`/api/posts/${id}`)   // this is the user id of the users page you are on

            console.log('Posts', res.data);

            dispatch({
                type: GET_POSTS,
                payload: res.data   // this will be the posts
            })
            
        } catch (err) {
            console.log(err);
        }
    }

    const fetchNewsfeed = async() => {
        console.log('fetching the newsfeed');
        const res = await request.get('/api/posts/newsfeed');

        console.log('the newsfeed has arrived!', res.data);

        dispatch({
            type: GET_NEWSFEED,
            payload: res.data
        })
    }

    const getPagePosts = async(pageId) => {
        console.log('got the pageId', pageId);
        const res = await request.get(`/api/posts/page-posts/${pageId}`);

        dispatch({
            type: GET_PAGE_POSTS,
            payload: res.data
        })
    }

    // remove your post 
    const removePost = async (id) => {
        await request.delete(`/api/posts/${id}`);

        dispatch({
            type: REMOVE_POST,
            payload: id
        })
    }

    // Like a post
    // WORKS
        const like = async (postId) => {
        console.log('post Id', postId);
        const res = await request.put(`/api/posts/like/${postId}`);

        // we get from the back end a new array of likes (with our id now in it)
        console.log('The new likes array', res.data);

        dispatch({
            type: UPDATE_LIKES,
            payload: { postId, likes: res.data }
        })  
    }

    // Unlike a post
    // WORKS
    const unlike = async (postId) => {
        const res = await request.put(`/api/posts/unlike/${postId}`);

        // we also get from the back end a new array of likes (with our id now in it)
        console.log('The new likes array', res.data);

        dispatch({
            type: UPDATE_LIKES,
            payload: { postId, likes: res.data }
        })  
    }

    // Add comment
    const addComment = async(postId, formData) => {

        try {
            const res = await request.post(`/api/posts/comment/${postId}`, formData, config);

            console.log(res.data);  // this needs to come back with the new comment

            dispatch({
                type: ADD_COMMENT,
                payload: { postId, comment: res.data }   //this will be the comment
            })

            // dispatch(setAlert('Comment Added', 'success'));
        } catch (err) {
            // dispatch({
            //     type: POST_ERROR,
            //     payload: { msg: err.response.statusText, status: err.response.status }
            // })
        }
    }

    const removeComment = async(postId, commentId) => {
        console.log('removing comment');
        await request.delete(`/api/posts/remove-comment/${postId}/${commentId}`);

        dispatch({
            type: REMOVE_COMMENT,
            payload: { postId, commentId }
        })
    }


    const likeComment = async (postId, commentId) => {
        console.log('do we like the comment?');
        try {
            const res = await request.put(`/api/posts/like-comment/${postId}/${commentId}`)

            console.log(res.data); // this is the new 'comments' for the post

            dispatch({
                type: UPDATE_COMMENT_LIKES,
                payload: { postId, comments: res.data }
            })

        } catch (err) {
            
        }
    }

    const unlikeComment = async (postId, commentId) => {
        try {
            const res = await request.put(`/api/posts/unlike-comment/${postId}/${commentId}`)

            console.log(res.data); // this is the new 'comments' for the post

            dispatch({
                type: UPDATE_COMMENT_LIKES,
                payload: { postId, comments: res.data }
            })

        } catch (err) {
            
        }
    }

    const addReply = async(postId, commentId, formData) => {
        try {
            // console.log('the ids made it', postId, commentId);

            const res = await request.post(`/api/posts/add-reply/${postId}/${commentId}`, formData, config);

            console.log('UPDATED COMMENTS WITH REPLY', res.data);
            
            dispatch({
                type: UPDATE_COMMENT_REPLY,
                payload: { postId, comments: res.data }
            })

        } catch (err) {
            console.log(err);
        }  
    }

    const removeReply = async(postId, commentId, replyId) => {
        const res = await request.delete(`/api/posts/remove-reply/${postId}/${commentId}/${replyId}`);  // this will be the updated comments
        
        console.log('after the removal', res.data);  // this should be the updated comments 

        dispatch({
            type: REMOVE_REPLY,
            payload: { postId, comments: res.data }
        })
    }

    // maybe change this to one method only that covers both operations (like and unlike)

    const likeReply = async(postId, commentId, replyId) => {
        try {
            // if i just use separate models, i can just supply the replyId and update its likes like that
            const res = await request.put(`/api/posts/like-reply/${postId}/${commentId}/${replyId}`)

            console.log('like reply', res.data);

            dispatch({
                type: UPDATE_COMMENT_REPLY_LIKES,
                payload: { postId, comments: res.data }
            })

        } catch (err) {
            console.log(err);
        }
    }

    const unlikeReply = async(postId, commentId, replyId) => {
        try {
            // if i just use separate models, i can just supply the replyId and update its likes like that
            const res = await request.put(`/api/posts/unlike-reply/${postId}/${commentId}/${replyId}`)

            dispatch({
                type: UPDATE_COMMENT_REPLY_LIKES,
                payload: { postId, comments: res.data }
            })

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
                posts: state.posts,
                makePost,
                getPosts,
                removePost,
                clearPostState,
                like,
                unlike,
                addComment,
                removeComment,
                likeComment,
                unlikeComment,
                addReply,
                likeReply,
                unlikeReply,
                removeReply,
                fetchNewsfeed,
                getPagePosts
            }}>
                { props.children }
        </PostContext.Provider>
    )

}
export default PostState
