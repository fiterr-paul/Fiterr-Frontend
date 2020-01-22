import React, {useState, useEffect} from 'react'
import request from '../../utils/axios-config'
import './styles/session.scss'
import Moment from 'react-moment'

const Training = () => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const [sessions, setSessions] = useState({
        pending: null,
        upcoming: null
    })
    const {pending, upcoming} = sessions
    

    const getPendingSessions = async() => {
        const response = await request.get('/api/session/trainer-pending-sessions', config)
        console.log(response)
        setSessions({...sessions, pending: response.data})
    }

    const getUpcomingSessions = async() => {
        const response = await request.get('/api/session/trainer-upcoming-sessions', config)
        console.log(response)
        setSessions({...sessions, upcoming: response.data})
    }
    
    
    useEffect(() => {
        if(!pending){getPendingSessions()}
        if(!upcoming){getUpcomingSessions()}
    }, [pending, upcoming])
    
    if(!pending || !upcoming){return(null)}
    
    const onApproval = async(e) => {
        e.preventDefault()
        let body = new FormData
        body.append('id', e.target.value)
        const response = await request.put('/api/session/trainer-approval', body, config )
    }

    const pendingSessionShow = () => {
        const show = pending.map((sesh, index)=>{
            return(
                <div key={index}>
                    <h1>Time: {sesh.time}</h1>
                    <p>Date: <Moment format='MMMM DD, YYYY [at] hh:mm A'>{sesh.date}</Moment></p>
                    <p>Location: {sesh.location}</p>
                    <button onClick={onApproval} value={sesh._id}>Approve</button>
                </div>
            )
        })
        return(show)
    }

    const upcomingSessions = ()=> {
        const show = upcoming.map((sesh,index)=>{
            return(
                <div key={index} className="upSession">
                    <h1>Time {sesh.time}</h1>
                    <p>Date: <Moment format='MMMM DD, YYYY [at] hh:mm A'>{sesh.date}</Moment></p>
                    <p>Location: {sesh.location}</p>
                </div>
            )
        })
        return(show)
    }
    
    
    return(
        <>
            <div className="sessionApproval">
                <div>
                    <h1>Sessions To Approve</h1>
                    <div className="seshs">
                        {pendingSessionShow()}
                    </div>
                    
                </div>
                

                <div>
                    <h1>Upcoming Sessions</h1>
                    <div className="seshs">
                        {upcomingSessions()}
                    </div>
                    
                </div>
                
            </div>
        </>
    )
    
    
    

        
    
    
}

export default Training