import { 
    UPDATE_LAST_POST, 
    SET_POSTS, 
    FIND_FOLLOWING_POSTS, 
    REMOVE_POST, 
    GET_OTHER_POSTS, 
    CLEAR_POST_STATE, 
    UPDATE_POSTS, 
    UPDATE_LIKES ,
    CLEAR_OTHER_POSTS
} from '../types'

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
                myPosts: action.payload,
                // otherPosts: null
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
        case GET_OTHER_POSTS:
            return {
                ...state,
                otherPosts: action.payload
            }
        case CLEAR_POST_STATE:
            return {
                myPosts: null,
                lastPost: null,
                followingPosts: null,
                otherPosts: null
            }
        case CLEAR_OTHER_POSTS:
            return {
                ...state,
                otherPosts: null
            }
        default:
            return state
    }
}