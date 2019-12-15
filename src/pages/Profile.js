import React, { useContext, useEffect, useState } from 'react';

import SearchContext from '../context/search/searchContext';
import AuthContext from '../context/auth/authContext';

import MyProfile from './MyProfile';

const Profile = (props) => {

    const authContext = useContext(AuthContext);
    const { user, isAuthenticated, loadUser } = authContext;
    console.log('this is the user', user);
    if(!isAuthenticated){ loadUser() }  // need this line to relog back in on a page sometime in development
    
    const searchContext = useContext(SearchContext);
    const { getUser, viewingUser } = searchContext;


    const { match: { params } } = props;
    const { id } = params;
    console.log('params', id);
    
    const [following, setFollowing] = useState(false);
        
    useEffect(() => {
        getUser({ id });
        
    }, []);
    
    const checkFollowing = () => {
        // if we (the user in the auth state) has viewingUsers _id in their following array then set the state to following being true
        // and then render follow or following depending on this state
    }
    
    //going to render the MyProfile component if the profile username/id param is the same as yours
    if(user && (id === user._id || id === user.username)){
        console.log("GOING TO RENDER THE MYPROFILE COMPONENT");
        return <MyProfile />
    }

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
                <button>Follow</button>
            </div>
        )
    }
}

export default Profile
