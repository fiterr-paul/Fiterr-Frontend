import React, { Fragment, useContext } from 'react'

import HeaderUnauthenticated from '../HeaderUnauthenticated';
import HeaderAuthenticated from '../HeaderAuthenticated';

import AuthContext from '../../context/auth/authContext';

const Navbar = () => {

    const authContext = useContext(AuthContext);

    const { isAuthenticated } = authContext;

    console.log(isAuthenticated);

    return (
        <Fragment>
            { isAuthenticated ? (<HeaderAuthenticated/>) : (<HeaderUnauthenticated/>) }
        </Fragment>
    )
}

export default Navbar
