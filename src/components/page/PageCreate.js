import React, {useState, useContext} from 'react'
import AuthContext from '../../context/auth/authContext'
import request from '../../utils/axios-config'
import { useHistory } from 'react-router-dom'



const PageCreate = () => {
    const authContext = useContext(AuthContext)
    const history = useHistory()

    const {user} = authContext
    const [page, setPage] = useState({
        pageOwner: user._id,
        pageTitle: '',
        pageDescription: ''
    })

    const {pageTitle, pageDescription, pageOwner} = page

    const onSubmit = async(e) => {
        e.preventDefault()
        let body = new FormData
        body.append('pageOwner', pageOwner)
        body.append('pageTitle', pageTitle)
        body.append('pageDescription', pageDescription)


        const post = await request.post('/api/pages/create')
        history.push(`/page/${pageTitle}`)
    }

    const onChange = (e) => {
        setPage({...page, [e.target.name]: e.target.value})
    }
    
    return(
        <>
            <h1>You're now a Professional! Go ahead and create your own page</h1>
            <form action="">
                <label>Enter the title for your page</label>
                <input type="text" name="pageTitle" id="pageTitle" value={pageTitle} onChange={onChange} />
                <label>Tell us about your page!</label>
                <input type="text" name="pageDescription" id="pageDescription" value={pageDescription} onChange={onChange}/>
                <div className="submit-button">
                    <button onClick={onSubmit} type="submit" value="submit"> Submit </button>
                </div>
            </form>
        </>
    )
}

export default PageCreate
