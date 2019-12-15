import React, { Fragment, useContext, useEffect } from 'react'

import HeaderUnauthenticated from '../HeaderUnauthenticated';
import HeaderAuthenticated from '../HeaderAuthenticated';

import AuthContext from '../../context/auth/authContext';

const Navbar = () => {

    const authContext = useContext(AuthContext);

    const { isAuthenticated, user } = authContext;

    // console.log(isAuthenticated, user);

    return (
        <Fragment>
            { isAuthenticated ? (<HeaderAuthenticated />) : (<HeaderUnauthenticated />) }
        </Fragment>
    )
}

export default Navbar
