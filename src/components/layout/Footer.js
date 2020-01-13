import React, { Fragment, useContext, useEffect } from 'react'

import FooterUnauthenticated from '../../components/FooterUnauthenticated.js';
import AuthContext from '../../context/auth/authContext';

const Footer = () => {

    const authContext = useContext(AuthContext);

    const { isAuthenticated, user } = authContext;

    // console.log(isAuthenticated, user);

    return (
        <Fragment>
          { isAuthenticated ? null : (<FooterUnauthenticated />) }
        </Fragment>
    )
}

export default Footer
