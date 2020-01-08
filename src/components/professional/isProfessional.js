import React, {useState, useContext, Fragment} from 'react'
import authContext from '../../context/auth/authContext'
import { Link } from 'react-router-dom'

const IsUserProfessional = (props) => {
    const AuthContext = useContext(authContext)
    const {isAuthenticated, user} = AuthContext
    const scrollPage = () => {
        window.scrollTo(0, 0);
    }
    
    const notProfessional = () => {
        return(
            <div className="notPro">
                <Link onClick={scrollPage} className="link-become-pro" to='/become-professional'><h3>Click Here to Become Professional Today!</h3></Link>
            </div>
        )
    }

    if(isAuthenticated){
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