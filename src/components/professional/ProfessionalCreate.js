import React, {useState, useContext} from 'react'
import authContext from '../../context/auth/authContext'
import profileContext from '../../context/profile/profileContext'
import request from '../../utils/axios-config'
import { useHistory } from 'react-router-dom'

const ProfessionalCreate = (props) => {
    const AuthContext = useContext(authContext)
    const ProfileContext = useContext(profileContext)
    const { user, loadUser, isAuthenticated} = AuthContext
    const {profile} = ProfileContext
    const history = useHistory()

    const [professional, setProfessional] = useState({
        phoneNumber: '',
        userID: ''
    })

    const {phoneNumber, userID} = professional
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const onSubmit = async(e) => {
        e.preventDefault()
        let body = new FormData
        body.append('phoneNumber', phoneNumber)

        const post = await request.post('/api/users/professional-activate', body, config)
        history.push('/page-create')
    }
    const onChange = (e) => {
        setProfessional({...professional, [e.target.name]: e.target.value})
    }



    return(
        <>
            <section className="body login">
                <div className="image-overlay">
                    <div className="container">
                        <div className="form-container">
                            <h1>Professional Verificaiton</h1>
                            <form className="signup">
                                    <div className="field-row input">
                                        <div className="width-50">
                                            <input type="text" name="phoneNumber" id="phoneNumber" value={phoneNumber} onChange={onChange} placeholder="Enter Phone Number"/>
                                        </div>
                                    </div>
                                <div className="field-row button">
                                    <button onClick={onSubmit} type="submit" value="submit"> Submit </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            </section>    
            
        </>
    )
}
export default ProfessionalCreate