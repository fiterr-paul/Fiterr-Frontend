import React, { useContext, useEffect } from 'react'

import AuthContext from '../context/auth/authContext';

import Spinner from '../components/layout/Spinner';


const PrivatePage = () => {

    const authContext = useContext(AuthContext);

    const { loadUser, loading } = authContext;

    console.log('loading is:', loading);

    // in order for private route to work you have to check if you can load the user on the actual private route as seen below in the use effect.
    // HOWEVER, the issue seems to be that it takes way too long to check for a loaded user
    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, [])

    // potential fix to use a spinner while our loading state from auth context is true - prevents seeing actual content on the private routes if youre not allowed
    if(loading){
        return <Spinner />
    }

    return (
        <div>
            <h1>Private Component</h1>
        </div>
    )
}

export default PrivatePage;