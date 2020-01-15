import { UPDATE_LAST_POST, SET_POSTS, FIND_FOLLOWING_POSTS, REMOVE_POST, GET_VIEWING_POSTS, CLEAR_POST_STATE, UPDATE_POSTS, UPDATE_LIKES } from '../types'

export default (state, action) => {
    switch(action.type){
        case UPDATE_LAST_POST:
            return{
                ...state,
                lastPost: action.payload
            }
        case UPDATE_POSTS: 
            return {
                ...state,
                myPosts: [action.payload, ...state.myPosts]
            }
        case UPDATE_LIKES:
            return {
                ...state,
                
            }
        case SET_POSTS:
            return{
                ...state,
                myPosts: action.payload
            }
        case REMOVE_POST: 
            return {
                ...state,
                myPosts: action.payload
                // myPosts: state.myPosts.filter(post => post._id !== action.payload)
            }
        case FIND_FOLLOWING_POSTS:
            return{
                ...state,
                followingPosts: action.payload
            }
        case GET_VIEWING_POSTS:
            return {
                ...state,
                viewingPosts: action.payload
            }
        case CLEAR_POST_STATE:
            return {
                myPosts: [],
                lastPost: null,
                followingPosts: null,
                viewingPosts: null
            }
        default:
            return state
    }
}