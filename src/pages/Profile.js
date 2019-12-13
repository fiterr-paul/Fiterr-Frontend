import React, { useContext, useEffect } from 'react';

import SearchContext from '../context/search/searchContext';

const Profile = (props) => {

    const searchContext = useContext(SearchContext);
    const { getUser, viewingUser } = searchContext;

    const { match: { params } } = props;
    const { id } = params;
    console.log('params', id);

    useEffect(() => {
        getUser({ id });
    }, [])

    if(!viewingUser){
        return (
            <h1>Loading user details...</h1>
        )
    } else {
        return (
            <div>
                <h1>{viewingUser.firstname} {viewingUser.lastname}</h1>
                <h1>Email: {viewingUser.email}</h1>
                <h1>Gender: {viewingUser.gender}</h1>
            </div>
        )
    }
}

export default Profile
