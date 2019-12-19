import { UPDATE_LAST_POST, SET_POSTS, FIND_FOLLOWING_POSTS } from '../types'

export default (state, action) => {
    switch(action.type){
        case UPDATE_LAST_POST:
            return{
                ...state,
                lastPost: action.payload
            }
        case SET_POSTS:
            return{
                ...state,
                myPosts: action.payload
            }
        case FIND_FOLLOWING_POSTS:
            return{
                ...state,
                followingPosts: action.payload
            }
        default:
            return state
    }
}