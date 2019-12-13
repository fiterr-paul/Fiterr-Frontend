import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import SearchContext from './searchContext';
import searchReducer from './searchReducer';

// get axios util
import request from '../../utils/axios-config';

import {
    SEARCH_USERS,
    GET_VIEWING_USER
  } from '../types';

const SearchState = props => {
    const initialState = {
        searching: true,
        searchedUsers: null,
        error: null,
        viewingUser: null,
    };

    const [state, dispatch] = useReducer(searchReducer, initialState);

   
    // Load user
    const searchUsers = async(searchTerm) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await request.post('/api/users/search-users', searchTerm, config);
            console.log('users data is here', res.data.searchedUsers);

            // dispatch
            dispatch({
                type: SEARCH_USERS,
                payload: res.data.searchedUsers
            })

        } catch (err) {
            console.log('Error:', err);
            // error dispatch

            // dispatch({
            //     type: AUTH_ERROR
            // })
        }   
    }

    const getUser = async(id) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await request.post('/api/users/get-user', id, config);
            console.log(res.data);

            dispatch({
                type: GET_VIEWING_USER,
                payload: res.data
            })
            
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <SearchContext.Provider
         value={{
            searchedUsers: state.searchedUsers,
            searching: state.searching,
            viewingUser: state.viewingUser,
            searchUsers,
            getUser
         }}>
            { props.children }
        </SearchContext.Provider>
    );
};

export default SearchState;