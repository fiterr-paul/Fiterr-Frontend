import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import SearchContext from './searchContext';
import searchReducer from './searchReducer';

// get axios util
import request from '../../utils/axios-config';

import {
    SEARCH_USERS,
    GET_VIEWING_USER,
    SEARCHING_FOR_RESULTS,
    CLEAR_VIEWING_USER,
    CLEAR_SEARCH_STATE
} from '../types';

const SearchState = props => {
    const initialState = {
        searching: false,
        searched: false,
        searchedUsers: [],
        searchTerm: '',
        error: null,
        viewingUser: null,
        viewingProfile: null,
    };

    const [state, dispatch] = useReducer(searchReducer, initialState);
   
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const searchUsers = async(searchTerm) => {

        try {
            dispatch({
                type: SEARCHING_FOR_RESULTS
            })

            const res = await request.post('/api/users/search-users', searchTerm, config);
            console.log('users data is here', res.data.searchedUsers);

            const payload = { 
                searchedUsers: res.data.searchedUsers,
                // searchTerm: searchTerm.search
            }

            dispatch({
                type: SEARCH_USERS,
                payload: payload
            })

        } catch (err) {
            console.log('Error:', err);
            // error dispatch

            // dispatch({
            //     type: AUTH_ERROR
            // })
        }   
    }

    // NEED TO DELETE THIS
    const getViewingUserProfile = async(id) => {
        console.log('getuser', id);
        try {
            // this is a user id that is being used
            const res = await request.post('/api/users/get-viewing-user-profile', id, config);
            console.log(res.data);  // this is now going to be an object with the user and the profile

            dispatch({
                type: GET_VIEWING_USER,
                payload: res.data
            })
            
        } catch (err) {
            console.error(err.message);
        }
    }

    const clearViewingUser = () => {
        dispatch({
            type: CLEAR_VIEWING_USER
        })
    }

    const clearSearchState = () => {
        dispatch({
            type: CLEAR_SEARCH_STATE
        })
    }


    return (
        <SearchContext.Provider
         value={{
            searchedUsers: state.searchedUsers,
            searching: state.searching,
            searched: state.searched,
            viewingUser: state.viewingUser,
            viewingProfile: state.viewingProfile,
            searchTerm: state.searchTerm,
            searchUsers,
            getViewingUserProfile,
            clearViewingUser,
            clearSearchState
         }}>
            { props.children }
        </SearchContext.Provider>
    );
};

export default SearchState;