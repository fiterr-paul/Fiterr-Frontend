import React, { Fragment, useContext } from 'react'

import FooterUnauthenticated from '../../components/FooterUnauthenticated.js';
import AuthContext from '../../context/auth/authContext';

const Footer = () => {

    const authContext = useContext(AuthContext);

    const { isAuthenticated } = authContext;

    // console.log(isAuthenticated, user);

    return (
        <Fragment>
          { isAuthenticated ? null : (<FooterUnauthenticated />) }
        </Fragment>
    )
}

export default Footer
