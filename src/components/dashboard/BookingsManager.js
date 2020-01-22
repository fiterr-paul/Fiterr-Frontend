import React, {useState, useContext, useEffect} from 'react'
import AuthContext from '../../context/auth/authContext'
import ProfileContext from '../../context/profile/profileContext'
import PageContext from '../../context/page/pageContext'
import SessionCreate from './SessionCreate'

const BookingsManager = () => {
    const authContext = useContext(AuthContext)
    const profileContext = useContext(ProfileContext)
    const pageContext = useContext(PageContext)
    const {isAuthenticated, user, loadUser} = authContext
    const {profile, getMyProfile, populateServices, services} = profileContext

    useEffect(() => {
        if(!profile){getMyProfile()}
        if(!services){populateServices()}
        if(!isAuthenticated){loadUser()}
        // if(currentPage.pageHandle !== handle){
        //     getPage(handle) 
        //     findRole(handle)
        // }
    }, [ profile, services ])

    const returnPendingSessions = (service) => {
        return(service.sessions.map((sesh, index)=> {
            return(
                <div className="pendingSession" key={index}>
                    <h1>Time: {sesh.time}</h1>
                    <p>Date: {sesh.date}</p>
                    <p>Location: {sesh.location}</p>
                    <p>Trainer: {sesh.trainer.firstname} {sesh.trainer.lastname}</p>
                </div>
            )
        }))
        
        
    }
    
    if(!user || !profile || !services){return(null)}

    const showServices = () => {
        const collection = services.map((service, index) => {
            return(
                <div key={index} className="service">
                    <h1>Package Title: {service.packageID.title}</h1>
                    <p>Package Description: {service.packageID.description}</p>
                    <p>DATE OF PURCHASE {service.DatePurchased}</p>
                    <p>QUANTITY REMAINING {service.quantityRemaining}</p>
                    <a href={service.receiptUrl}>View Receipt</a>
                    <SessionCreate service={service}/>

                    <h1>Pending Sessions</h1>
                    {returnPendingSessions(service)}
                    <h1>Upcoming Sessions</h1>
                </div>
            )
        })
        return(collection)
    }

    return(
        <>
            <div className="services">
                <h1>Services</h1>
                {showServices()}
            </div>
        </>
    )
    
}
export default BookingsManager