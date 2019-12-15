import {
    SEARCH_USERS,
    GET_VIEWING_USER,
    SEARCHING_FOR_RESULTS
  } from '../types';
  
export default (state, action) => {
    switch (action.type) {
        case SEARCH_USERS:
        return {
            ...state,
            searching: false,
            searched: true,
            searchedUsers: action.payload.searchedUsers,
            // searchTerm: action.payload.searchTerm
        };
        case GET_VIEWING_USER:
            return {
                ...state,
                viewingUser: action.payload
            }
        case SEARCHING_FOR_RESULTS:
            return {
                ...state,
                searching: true
            }
        default:
        return state;
    }
};