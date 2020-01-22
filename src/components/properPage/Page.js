import React, { useContext, useEffect, Fragment } from 'react'
import {useParams} from 'react-router'
import AuthContext from '../../context/auth/authContext'
import PageContext from '../../context/page/pageContext'
import Spinner from '../layout/Spinner'
// import BasePageView from './BasePageView'
import PageHeader from './PageHeader'

import StickyBox from 'react-sticky-box'
import PageLeftNav from './PageLeftNav'
import profileImgPaul from '../../components/assets/media/paul-900x900.jpg';
import nyePaul from '../../components/assets/media/nye.jpg';
import coverImage from '../../components/assets/media/sports-bike.jpg';
import profileImgFatBastard from '../../components/assets/media/fatbastard-185x185.jpg';
import pageImg1 from '../../components/assets/media/logo-paul_meier_fitness-1080x1080.png';
import pageImg2 from '../../components/assets/media/logo-livefit_livelean-640x640.png';
import pageImg3 from '../../components/assets/media/logo-28_day_kickstart-1080x1080.png';


const Page = () => {
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