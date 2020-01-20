import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../../context/auth/authContext'
import ProfileContext from '../../context/profile/profileContext'
import {useParams} from 'react-router'


const Dashboard = () => {
    const authContext = useContext(AuthContext)
    const profileContext = useContext(ProfileContext)
    


    const {user, loadUser, isAuthenticated} = authContext
    const {profile, getMyProfile, populateServices, services} = profileContext

    
    useEffect(() => {
        if(!isAuthenticated){ loadUser() } 
        if(!profile){getMyProfile()}
        if(!services){populateServices()}
        
    }, [isAuthenticated, profile ])

    const showServices = () => {
        const collection = services.map((service, index) => {
            return(
                <div key={index} className="service">
                    <h1>DATE OF PURCHASE {service.DatePurchased}</h1>
                    <p>QUANTITY REMAINING {service.quantityRemaining}</p>
                </div>
            )
        })
        return(collection)
        
        
    }
    if(!user || !profile || !services){return(null)}

    else{
        return(
            <>
                <h1>Services</h1>
                {showServices()}
            </>
        )
    }
    


}

export default Dashboard