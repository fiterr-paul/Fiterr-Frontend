import React, {useReducer} from 'react';
import ProfileContext from './profileContext'
import profileReducer from './profileReducer'
import { SET_PROFILE, REMOVE_PROFILE } from '../types'

import request from '../../utils/axios-config'

const config = {
    headers: {
        'Content-Type': 'application/json',
    }
}


const ProfileState = props => {
    const initialState = {
        profile: null,
        profileComplete: false
    };

    const [state, dispatch] = useReducer(profileReducer, initialState);

    const makeProfile = async (formData) => {
        const response = await request.post('/api/profiles/create', formData, config)
        console.log(response.data)
        dispatch({
            type: SET_PROFILE,
            payload: response.data
        })
    }

    const getProfile = async (user) => {
        const response = await request.get(`/api/profiles?id=${user._id}`)
        dispatch({
            type: SET_PROFILE,
            payload: response.data
        })
    }
    return(
        <ProfileContext.Provider
            value={{
                profile: state.profile,
                profileComplete: state.profileComplete,
                makeProfile,
                getProfile
            }}>
                { props.children }
        </ProfileContext.Provider>
    )
}
export default ProfileState