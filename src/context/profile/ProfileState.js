import React, {useReducer, useContext} from 'react';
import ProfileContext from './profileContext'
import profileReducer from './profileReducer'
import { SET_PROFILE, CLEAR_PROFILE, SET_OTHER_PROFILE, FETCHING_PROFILE, SET_SERVICES, FOLLOW_USER, UNFOLLOW_USER } from '../types'

import request from '../../utils/axios-config'

// get the auth context
import AuthContext from '../auth/authContext';

const config = {
    headers: {
        'Content-Type': 'application/json',
    }
}

const ProfileState = props => {
    const initialState = {
        profile: null,
        profileComplete: false,
        otherProfile: null,
        fetchingProfile: true,
        services: null
    };

    const [state, dispatch] = useReducer(profileReducer, initialState);

    // ------------------------
    const authContext = useContext(AuthContext);
    const { loadUser } = authContext;

    // ------------------------

    const makeProfile = async (formData) => {
        const response = await request.post('/api/profiles/create', formData, config)
        console.log('This is the created profile:', response.data)
        dispatch({
            type: SET_PROFILE,
            payload: response.data
        });
    }

    // is this to get my profile or another users? - gets mine, should rename to getMyProfile
    const getMyProfile = async () => {
        const response = await request.get(`/api/profiles/me`);
        dispatch({
            type: SET_PROFILE,
            payload: response.data
        })
    }

    const getOtherProfile = async (username) => {
        // dispatch({
        //     type: FETCHING_PROFILE
        // })

        const res = await request.get(`/api/profiles/other-profile/${username}`)
        // console.log('other profile', res.data);
        dispatch({
            type: SET_OTHER_PROFILE,
            payload: res.data
        })
    }


    const clearProfile = async () => {
        // this will be a dispatch to clear the profile state out
        dispatch({
            type: CLEAR_PROFILE
        })
    }

    // what is the id that is coming here?
    const follow = async(id) => {
        const res = await request.get(`/api/profiles/follow/${id}`);    // should get back the new following array

        // put the updated
        dispatch({
            type: FOLLOW_USER,
            payload: { following: res.data }
        })
    }

    const unfollow = async(id) => {
        const res = await request.get(`/api/profiles/unfollow/${id}`); 

        // the id is the userid of the other profile

        dispatch({
            type: UNFOLLOW_USER,
            payload: { following: res.data }
        })
    }

    // this will be a mix of the getProfile method and the loadUser method
    const loadMyUserAndProfile = async() => {
        await loadUser();

        const res = await request.get('/api/profiles/myprofile');

        dispatch({
            type: SET_PROFILE,
            payload: res.data
        })

    }
    const populateServices = async() => {
        const response = await request.get('/api/profiles/services')
        dispatch({
            type: SET_SERVICES,
            payload: response.data
        })
    }

    return(
        <ProfileContext.Provider
            value={{
                profile: state.profile,
                profileComplete: state.profileComplete,
                otherProfile: state.otherProfile,
                fetchingProfile: state.fetchingProfile,
                makeProfile,
                getMyProfile,
                getOtherProfile,
                clearProfile,
                follow,
                unfollow,
                loadMyUserAndProfile,
                populateServices,
                services: state.services
            }}>
                { props.children }
        </ProfileContext.Provider>
    )
}
export default ProfileState