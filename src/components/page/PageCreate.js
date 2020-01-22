import React, {useState, useContext, useEffect} from 'react'
import AuthContext from '../../context/auth/authContext'
import request from '../../utils/axios-config'
import { useHistory } from 'react-router-dom'
import PageContext from '../../context/page/pageContext'


const PageCreate = () => {
    const authContext = useContext(AuthContext)
    const pageContext = useContext(PageContext)
    const {createPage} = pageContext
    const {user, isAuthenticated,loadUser} = authContext
    const history = useHistory()
    

    useEffect(() => {
        if(!isAuthenticated){
            loadUser()
        }
    }, [isAuthenticated])
    
    const [page, setPage] = useState({
        pageOwner: '',
        pageHandle: '',
        pageTitle: '',
        pageAbout: '',
        image: null
    })

    const {pageTitle, pageAbout, pageOwner, pageHandle, image} = page

    const onSubmit = async(e) => {
        e.preventDefault()
        let body = new FormData
        body.append('pageOwner', user._id)
        body.append('pageHandle', pageHandle)
        body.append('pageTitle', pageTitle)
        body.append('pageAbout', pageAbout)
        body.append('image', image)
        

        createPage(body)
        history.push(`/page/${pageHandle}`)
    }

    const onChange = (e) => {
        setPage({...page, [e.target.name]: e.target.value})
    }
    const onFileChange = (e) => {
        setPage({...page, [e.target.name]: e.target.files[0]})
    }
    
    return(
        <>
            <section className="body login">
                <div className="image-overlay">
                    <div className="container">
                        <div className="form-container">
                            <h1>You're now a Professional! Create your own page</h1>
                            <form className="page-create-container">
                                <div>
                                    <div className="field-row input">
                                        <div className="width-50">
                                            <input type="text" name="pageHandle" id="pageHandle" value={pageHandle} onChange={onChange} placeholder="Enter Page Handle"/>
                                        </div>
                                    </div>
                                    <div className="field-row input">
                                        <div className="width-50">
                                            <input type="text" name="pageTitle" id="pageTitle" value={pageTitle} onChange={onChange} placeholder="Enter Page Title"/>
                                        </div>
                                    </div>
                                    <div className="field-row input">
                                        <div className="width-50">
                                            <input type="text" name="pageAbout" id="pageAbout" value={pageAbout} onChange={onChange} placeholder="About Your Page"/>
                                        </div>
                                    </div>
                                    <div className="field-row input">
                                        <div className="width-50">
                                            <label >Upload an Display Image</label>
                                            <input type="file" name="image" id="image" onChange={onFileChange}/>
                                        </div>
                                    </div>

                                    <div className="field-row button">
                                        <button onClick={onSubmit} type="submit" value="submit"> Submit </button>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                    
                </div>
                
            </section>
            
        </>
    )
}

export default PageCreate
