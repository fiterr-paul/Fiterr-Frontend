import React, {Fragment, useState, useContext, useEffect, } from 'react'
import {useParams} from 'react-router'
import PageContext from '../../context/page/pageContext'
import AuthContext from '../../context/auth/authContext'
import $ from 'jquery'
import request from '../../utils/axios-config'

const BasePageView = (props) => {
    const {handle} = useParams()
    const [page, setPage] = useState({
        pageAbout: ''
    })
    const pageContext = useContext(PageContext)
    const {updateAbout, roleOnPage, getPage, findRole} = pageContext
    const authContext = useContext(AuthContext)
    const {isAuthenticated, loadUser} = authContext
    const currentPage = props.currentPage
    const role = props.pageRole
    useEffect(() => {
        if(!isAuthenticated){ loadUser() } 
        if(!currentPage){getPage(handle)}
        if(!roleOnPage){findRole(handle)}
        // if(currentPage.pageHandle !== handle){
        //     getPage(handle) 
        //     findRole(handle)
        // }
    }, [isAuthenticated, currentPage ])

    const onChange = (e) => {
        setPage({...page, [e.target.name]: e.target.value})
    }
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    if(!currentPage){
        return null
    }
    const onAboutEditClick = (e) => {
        $("#formButton").click(function() {
            $("#editAbout").toggle();
        });
    }
    const packageSetting = () => {
        if(role=='Owner' || role=='Trainer'){
            return(
                <a href={`/page/${handle}/package-update`}>
                    <h2>Add/Manage Offered Packages</h2>
                </a>
            )
        }
    }
    const packageShow = () => {
        const part= currentPage.packages.map((pack, index)=>{
            return(
                <div key={index} className="package">
                    <h3>{pack.title}</h3>
                    <p>{pack.description}</p>
                    <p>{pack.numberOfSessions}</p>
                    <p>{pack.price}</p>
                    <a href={`/page/${handle}/package/${pack._id}`}>View Package</a>
                    <br/>
                </div>
            )

        })
        return(part)
    }
    const contentEditor = () => {
        if(role =='Owner' || role == 'Content-Creator'){
            return(
                <>
                    <button type="button" id="formButton" onClick={onAboutEditClick}>Edit About</button>
                    <form id="editAbout">
                        <label className="pageAbout">EDIT ABOUT</label>
                        <input type="text" id="pageAbout" name="pageAbout" onChange={onChange} value={pageAbout}></input>
                        <button onClick={onAboutSubmit}>Apply Change</button>
                    </form>
                </>
            )
            
        }

        else{
            return(null)
        }
    }

    

    const {pageAbout} = page
    const onAboutSubmit = async(e) => {
        e.preventDefault()
        let body = new FormData
        body.append('pageAbout', pageAbout)
        body.append('pageHandle', handle)
        updateAbout(body)
        onAboutEditClick()
    }
    

    return(
        <Fragment>
            <h1>You are acting as {role}</h1>
            <div className="displayImage">
                <img src={currentPage.displayImage} alt="Display Image" width="100px"/>
            </div>
            <div className="pageTitle">
                <h1>
                    TITLE:{currentPage.pageTitle}
                </h1>
            </div>

            <div className="pageLikes">
                <h3> Likes: {currentPage.likes.length}</h3>
            </div>

            <div className="description">
                <p>ABOUT:{currentPage.pageAbout}</p>
                {contentEditor()}
                
            </div>
            <div> 
                {packageSetting()}
                <div className="packages">
                    <h2>Packages:</h2>
                    {packageShow()}
                </div>
            </div>
            <div className="posts">
                <h2>Posts</h2>
                {currentPage.posts.map((index, post)=>{
                    return(
                        <div key={index}>
                            <h3>{post.content}</h3>
                        </div>
                    )

                })}
            </div>
        </Fragment>
    )
}

export default BasePageView