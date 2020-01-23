import React, {useContext, Fragment} from 'react'
import AuthContext from '../../context/auth/authContext'
import { Link } from 'react-router-dom'

const IsUserProfessional = (props) => {
    const authContext = useContext(AuthContext);
    const { user } = authContext;
    
    const scrollPage = () => {
        window.scrollTo(0, 0);
    }
    
    const notProfessional = () => {
        return(
            <div className="link-submenu">
                <Link onClick={scrollPage} className="link-become-pro" to='/become-professional'><h3>Become A Professional</h3></Link>
            </div>
        )
    }
    if(user){
        return(
            <Fragment>
                {user.isProfessional ? null : notProfessional()}
            </Fragment>
        )
    }
    else{
        return(
            null
        )
    }
    
}

export default IsUserProfessional