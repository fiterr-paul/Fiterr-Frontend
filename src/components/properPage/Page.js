import React, { useContext, useEffect, Fragment } from 'react'
import {useParams} from 'react-router'

import AuthContext from '../../context/auth/authContext'
import PageContext from '../../context/page/pageContext'
import ProfileContext from '../../context/profile/profileContext';

import Spinner from '../layout/Spinner'
import PageHeader from './PageHeader'

import StickyBox from 'react-sticky-box'
import PageLeftNav from './PageLeftNav'

const Page = () => {
    const { isAuthenticated, loadUser } = useContext(AuthContext)
    const { currentPage, roleOnPage, getPage, findRole } = useContext(PageContext)
    const { profile, getMyProfile } = useContext(ProfileContext);

    let { handle } = useParams()
    useEffect(() => {
        if(!isAuthenticated){ loadUser() } 
        else if (isAuthenticated && !profile) { getMyProfile() }

        if(!currentPage){getPage(handle)}
        if(!roleOnPage){findRole(handle)}
        // if(currentPage.pageHandle !== handle){
        //     getPage(handle) 
        //     findRole(handle)
        // }
        // eslint-disable-next-line 
    }, [isAuthenticated])

    if(!isAuthenticated || !currentPage) {
        return (
            <Fragment>
                <h1>Loading user...</h1>
                <Spinner />
            </Fragment>
        )
    }else if (!currentPage || !roleOnPage){
        return (
            <Fragment>
                <h1>Loading page...</h1>
                <Spinner />
            </Fragment>
        )
    } else {
        return(
            <section className="body page">
                <div className="container">
                    {/* LEFT COL - NAVIGATION */}
                    <StickyBox offsetTop={60} offsetBottom={10}>
                        <PageLeftNav />
                    </StickyBox>
                    {/* RIGHT COL - PROFILE */}
                    <PageHeader currentPage={currentPage} pageRole={roleOnPage}/>
                </div>
            </section>
        )
    }
    
    
}
export default Page