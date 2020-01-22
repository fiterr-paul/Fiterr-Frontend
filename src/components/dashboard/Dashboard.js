import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../../context/auth/authContext'
import ProfileContext from '../../context/profile/profileContext'
import {useParams} from 'react-router'
import { Link } from 'react-router-dom';


const Dashboard = () => {
    const authContext = useContext(AuthContext)
    const profileContext = useContext(ProfileContext)
    


    const {user, loadUser, isAuthenticated} = authContext
    const {profile, getMyProfile, populateServices, services} = profileContext

    console.log(services)
    useEffect(() => {
        if(!isAuthenticated){ loadUser() } 
        if(!profile){getMyProfile()}
        if(!services){populateServices()}
        
    }, [isAuthenticated, profile ])

   

    
    if(!user || !profile || !services){return(null)}

    else{
        return(
            <>
                <Link to={'/bookings'}> Manage Your Bookings</Link>
            </>
        )
    }
    


}

export default Dashboard