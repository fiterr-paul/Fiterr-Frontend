import React, {Fragment, useState, useContext} from 'react'
import {useParams} from 'react-router'
import PageContext from '../../context/page/pageContext'
import $ from 'jquery'
import request from '../../utils/axios-config'

const BasePageView = (props) => {
    const {handle} = useParams()
    const [page, setPage] = useState({
        pageAbout: ''
    })
    const pageContext = useContext(PageContext)
    const {updateAbout} = pageContext
    const currentPage = props.currentPage
    const role = props.pageRole

    const onChange = (e) => {
        setPage({...page, [e.target.name]: e.target.value})
    }
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const onAboutEditClick = (e) => {
        $("#formButton").click(function() {
            $("#editAbout").toggle();
        });
    }
    const contentEditor = () => {
        if(role =='Owner' || role == 'Content-Creator'){
            return(
                <>
                    <button type="button" id="formButton" onClick={onAboutEditClick}>Edit About</button>
                    <form id="editAbout">
                        <label className="pageAbout">EDIT ABOUT</label>
                        <input type="text" id="pageAbout" name="pageAbout" onChange={onChange}></input>
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
            <div className="posts">
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