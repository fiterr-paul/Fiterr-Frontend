import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';

import AlertContext from '../alert/alertContext';   // Note: you can use a context within another context

// get axios util
import request from '../../utils/axios-config';

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
  } from '../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    // get setAlert method from Alert Context
    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;
   
    // Load user
    const loadUser = async () => {


        try {
            const res = await request.get('/api/auth');   //this route checks the token to see if youre a valid user
            // console.log(res);

            dispatch({
                type: USER_LOADED,
                payload: res.data   //this is the actual user data that we get from hitting the GET /api/auth endpoint
            })
        } catch (err) {
            console.log('Error:', err);
            dispatch({
                type: AUTH_ERROR
            })
        }
        
    }

    // Register user
    const register = async (formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await request.post('/api/users/register', formData, config);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data   //this will be the token - in the reducer we set the token in local storage
            })

            loadUser();

        } catch (err) {
            console.error(err);
            setAlert(err.response.data.msg, err.response.data.type);

            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
            })
        }

    }

    // Login user
    const login = async (formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await request.post('/api/users/login', formData, config);

            dispatch({
                type: LOGIN_SUCCESS,
                // payload: res.data   //this will be the token
            })
            loadUser();

        } catch (err) {
            console.log(err);
            // console.log(err.response.data);
            dispatch({
                type: LOGIN_FAIL,
                // payload: err.response.data.msg
            })
        }
    }

    // Logout user 
    const logout = async() => {
        // have to hit the backend logout route;
        await request.get('http://localhost:5000/api/users/logout')

        dispatch({
            type: LOGOUT
        })
    }

    // Clear errors
    const clearErrors = () => {
        dispatch({
            type: CLEAR_ERRORS
        })
    }


    return (
        <AuthContext.Provider
         value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            user: state.user,
            error: state.error,
            register,
            loadUser,
            login,
            logout,
            clearErrors
         }}>
            { props.children }
        </AuthContext.Provider>
    );
};

export default AuthState;