import React, { useContext, useEffect} from 'react'
import AuthContext from '../../context/auth/authContext'
import ProfileContext from '../../context/profile/profileContext'
import SessionCreate from './SessionCreate'
import './styles/session.scss'
import Moment from 'react-moment'

const BookingsManager = () => {
    const authContext = useContext(AuthContext)
    const profileContext = useContext(ProfileContext)
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
        // eslint-disable-next-line
    }, [ profile, services ])

    const returnSessions = (service) => {
        return(service.sessions.map((sesh, index)=> {
            return(
                <div className="pendingSession" key={index}>
                    <h1>Time: {sesh.time}</h1>
                    <span> <Moment format='MMMM DD, YYYY [at] hh:mm A'>{sesh.date}</Moment></span>
                    <p>Location: {sesh.location}</p>
                    <p>Trainer: {sesh.trainer.firstname} {sesh.trainer.lastname}</p>
                    <p>Trainer Approved? {sesh.trainerApproval ? 'True' : 'False'}</p>
                </div>
            )
        }))
        
    }
    
    if(!user || !profile || !services){return(null)}

    const showServices = () => {
        const collection = services.map((service, index) => {
            return(
                <div key={index} className="service">
                    <h1><strong>Package Title:</strong> {service.packageID.title}</h1>
                    <p><strong>Package Description:</strong> {service.packageID.description}</p>
                    <p><strong>Date Purchased:</strong> <Moment format='MMMM DD, YYYY [at] hh:mm A'>{service.DatePurchased}</Moment></p>
                    <p><strong>Sessions Remaining:</strong> {service.quantityRemaining}</p>
                    <a href={service.receiptUrl}>View Receipt</a>
                    <br/>
                    <div className="booking-div">
                        <p className="book-next">Book Your Next Session</p>
                        <SessionCreate service={service}/>
                    </div>

                    <h1 className="upcoming">Upcoming Sessions</h1>
                    <div className="seshs">
                        
                        {returnSessions(service)}
                    </div>
                    
                   
                    
                </div>
            )
        })
        return(collection)
    }

    return(
        <>
            <div className="services">
                <h1 className="heading">My Services</h1>
                {showServices()}
            </div>
        </>
    )
    
}
export default BookingsManager