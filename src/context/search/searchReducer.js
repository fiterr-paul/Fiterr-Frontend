import {
    SEARCH_USERS,
    GET_VIEWING_USER
  } from '../types';
  
export default (state, action) => {
    switch (action.type) {
        case SEARCH_USERS:
        return {
            ...state,
            searching: false,
            searchedUsers: action.payload
        };
        case GET_VIEWING_USER:
            return {
                ...state,
                viewingUser: action.payload
            }
        default:
        return state;
    }
};