import React, { useContext, useEffect, Fragment } from 'react'
import {useParams} from 'react-router'
import AuthContext from '../../context/auth/authContext'
import PageContext from '../../context/page/pageContext'
import Spinner from '../layout/Spinner'
import BasePageView from './BasePageView'


const Page = props => {
    const authContext = useContext(AuthContext);
    const { user, isAuthenticated, loadUser } = authContext
    const pageContext = useContext(PageContext)
    const { currentPage, roleOnPage, getPage, findRole } = pageContext

    let { handle } = useParams()

    useEffect(() => {
        if(!isAuthenticated){ loadUser() } 
        if(!currentPage){getPage(handle)}
        if(!roleOnPage){findRole(handle)}
        // if(currentPage.pageHandle !== handle){
        //     getPage(handle) 
        //     findRole(handle)
        // }
    }, [isAuthenticated, currentPage ])

    if(!isAuthenticated || !currentPage) {
        return (
            <Fragment>
                <h1>Loading page...</h1>
                <Spinner />
            </Fragment>
        )
    }else{
        return(
            <Fragment>
                {/* <PageController pageRole={roleOnPage}/> */}
                <BasePageView currentPage={currentPage} pageRole={roleOnPage} />
                
            </Fragment>
        )
    }
}

export default Page