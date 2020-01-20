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
            <h1>You're now a Professional! Go ahead and create your own page</h1>
            <form action="">
                <label> Enter the Handle For your Page</label> 
                {/* matty^^ need to check if handle is taken by username or page handle */}
                <input type="text" name="pageHandle" id="pageHandle" value={pageHandle} onChange={onChange}/>
                <label>Enter the title for your page</label>
                <input type="text" name="pageTitle" id="pageTitle" value={pageTitle} onChange={onChange} />
                <label>Tell us about your page!</label>
                <input type="text" name="pageAbout" id="pageAbout" value={pageAbout} onChange={onChange}/>
                <input type="file" name="image" id="image" onChange={onFileChange}/>
                <div className="submit-button">
                    <button onClick={onSubmit} type="submit" value="submit"> Submit </button>
                </div>
            </form>
        </>
    )
}

export default PageCreate
