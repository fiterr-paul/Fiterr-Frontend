import React, {useState, useContext, useEffect} from 'react'
import ProfileContext from '../../context/profile/profileContext'
import PageContext from '../../context/page/pageContext'

const SessionCreate = (props) => {
    const profileContext = useContext(ProfileContext)
    const pageContext = useContext(PageContext)
    const {sessionCreate} = profileContext
    const {trainers, getTrainers} = pageContext

    const {service} = props
    const pageID = service.pageID
    console.log(service)


    const [session, setSession] = useState({
        time: '',
        date: '',
        location: '',
        trainer: '',
        serviceID: ''
    })

    useEffect(() => {
        if(!trainers){ getTrainers(pageID) } 
        
        // eslint-disable-next-line
    }, [trainers])
    if(!trainers){return(null)}
    
    // const showHideClassName = show ? "modal display-block" : "modal display-none";


    const {time, date, location, trainer} = session

    
    const onChange = (e) => {
        console.log('firing')
        setSession({...session, [e.target.name]: e.target.value})
    }

    const onSubmit = async(e) => {
        e.preventDefault()
        let body = new FormData()
        body.append('time', time)
        body.append('date', date)
        body.append('location', location)
        body.append('trainer', trainer)
        body.append('serviceID', service._id)

        sessionCreate(body)

    }
    return(
        <div className="HELLO">
            <form action="">
                <label>Time</label>
                <input type="text" name='time' id='time' value={time} onChange={onChange}/><br/>
                <label>Date</label>
                <input type="date" name="date" id="date" value={date} onChange={onChange}/><br/>
                <label>Location</label>
                <input type="text" name="location" id="location" value={location} onChange={onChange}/><br/>
                <label>Trainer Select</label>
                <select name="trainer" id="trainer" value={trainer} onChange={onChange}>
                    <option value="" selected >Choose here</option>
                    {trainers.map((trainer, index)=>{
                        return(
                            <option key={index} value={trainer._id}>{trainer.firstname} {trainer.lastname}</option>
                        )
                    })}
                </select><br/>
                <div className="submit-button">
                    <button onClick={onSubmit} type="submit" value="submit"> Submit </button>
                </div>
            </form>
        </div>
    )
}
export default SessionCreate