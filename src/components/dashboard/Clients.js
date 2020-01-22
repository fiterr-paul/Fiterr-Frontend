import React, {useState, useEffect} from 'react'
import request from '../../utils/axios-config'

const Clients = () => {

    const [clients, setClients] = useState(null)

    const getMyClients = async() => {
        const response = await request.get('/api/profiles/clients')
        console.log(response)
        setClients(response.data)
    } 
    
    

    useEffect(() => {
        if(!clients){getMyClients()}
    }, [clients])

    const showClients = () => {
        const show = clients.map((client, index) => {
            return(
                <div key={index}>
                    <a href={`/${client.username}`}> {client.firstname} {client.lastname}'s Profile</a>
                </div>
            )   
        })
        
        return(show)
    }
    if(!clients){return null}
    else{
        return(
            <>
                <div className="clientDiv"> 
                    <h1>CLIENTS</h1>
                    {showClients()}
                </div>
                
            </>
        )
    }
}

export default Clients