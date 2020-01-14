import React, {useState, useContext} from 'react'
import AuthContext from '../../context/auth/authContext'
import request from '../../utils/axios-config'



const PageCreate = () => {
    const authContext = useContext(AuthContext)

    const {user} = authContext
    const [page, setPage] = useState({
        pageOwner: user._id,
        pageTitle: '',
        pageDescription: ''
    })

    const {pageTitle, pageDescription} = page

    const onSubmit = async(e) => {
        e.preventDefault()
        let body = new FormData
        body.append()


        const post = await request.post('/api/pages/create')
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
            </form>
        </>
    )
}

export default PageCreate
