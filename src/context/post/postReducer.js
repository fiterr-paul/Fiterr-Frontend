import { 
    GET_NEWSFEED,
    REMOVE_POST, 
    CLEAR_POST_STATE, 
    UPDATE_POSTS, 
    UPDATE_LIKES ,
    ADD_COMMENT,
    REMOVE_COMMENT,
    UPDATE_COMMENT_LIKES,
    GET_POSTS,
    UPDATE_COMMENT_REPLY,
    UPDATE_COMMENT_REPLY_LIKES,
    REMOVE_REPLY,
    GET_PAGE_POSTS
} from '../types'

export default (state, action) => {
    let index, updatedComments;

    switch(action.type){
        case GET_POSTS:
        case GET_NEWSFEED:
        case GET_PAGE_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case UPDATE_LIKES:
            return {
                ...state,
                posts: state.posts.map(post => post._id === action.payload.postId ? { ...post, likes: action.payload.likes } : post)
            }
        case UPDATE_POSTS: 
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }
        case REMOVE_POST: 
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload)
            }
        case ADD_COMMENT:
            index = state.posts.findIndex(post => post._id === action.payload.postId);
            updatedComments = state.posts[index].comments.concat(action.payload.comment);
            return {
                ...state,
                posts: state.posts.map(post => post._id === action.payload.postId ? { ...post, comments: updatedComments} : post)
            }
        case REMOVE_COMMENT:
            index = state.posts.findIndex(post => post._id === action.payload.postId);
            updatedComments = state.posts[index].comments.filter(comment => comment._id !== action.payload.commentId);
            return {
                ...state,
                posts: state.posts.map(post => post._id === action.payload.postId ? { ...post, comments: updatedComments} : post)
            }
        case UPDATE_COMMENT_LIKES:
        case UPDATE_COMMENT_REPLY:
        case REMOVE_REPLY:
        case UPDATE_COMMENT_REPLY_LIKES:
            return {
                ...state,
                posts: state.posts.map(post => post._id === action.payload.postId ? { ...post, comments: action.payload.comments} : post)
            }             
        case CLEAR_POST_STATE:
            return {
                myPosts: null,
                lastPost: null,
                followingPosts: null,
                otherPosts: null
            }
        default:
            return state
    }
}