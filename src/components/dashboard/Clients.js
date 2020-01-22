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
                    <a href={`/${client.username}`}>{client.firstname} {client.lastname}</a>
                </div>
            )   
        })
        
        return(show)
    }
    if(!clients){return null}
    else{
        return(
            <>
                <h1>CLIENTS</h1>
                {showClients()}
            </>
        )
    }
}

export default Clients