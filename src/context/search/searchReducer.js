import {
    SEARCH_USERS,
    GET_VIEWING_USER,
    SEARCHING_FOR_RESULTS,
    CLEAR_VIEWING_USER,
    CLEAR_SEARCH_STATE
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
                viewingUser: action.payload.user,
                viewingProfile: action.payload.profile,
            }
        case SEARCHING_FOR_RESULTS:
            return {
                ...state,
                searching: true
            }
        case CLEAR_VIEWING_USER:
            return {
                ...state,
                searching: false,
                seareched: false,
                viewingUser: null
            }
        case CLEAR_SEARCH_STATE:
            return {
                searching: false,
                searched: false,
                searchedUsers: [],
                searchTerm: '',
                error: null,
                viewingUser: null,
                viewingProfile: null,
            }
        default:
        return state;
    }
};