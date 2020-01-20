import React, {useState, useEffect, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import PageContext from '../../../context/page/pageContext'
import AuthContext from '../../../context/auth/authContext'
import {useParams} from 'react-router'

const PackageShow = () => {
    const pageContext = useContext(PageContext)
    const authContext = useContext(AuthContext)
    
    const {currentPage, createPackage, getPage, roleOnPage, findRole, getPackage, currentPackage} = pageContext
    const {loadUser, isAuthenticated} = authContext
    const {handle, id} = useParams()
    const history = useHistory()
    // getPackage(handle, id)
    

    useEffect(() => {
        if(!isAuthenticated){ loadUser() } 
        if(!currentPage){getPage(handle)}
        if(!roleOnPage){findRole(handle)}
        if(!currentPackage){getPackage(handle, id)}
    }, [isAuthenticated, currentPage ])
    if(!currentPage || !currentPackage){
        return null
    }
    return(
        <>
            <h1>Title: {currentPackage.title}</h1>
            <h2>Description: {currentPackage.description}</h2>
            <p>Number Of Sessions: {currentPackage.numberOfSessions}</p>
            <p>Price: ${currentPackage.price}</p>
        </>
    )
}
export default PackageShow