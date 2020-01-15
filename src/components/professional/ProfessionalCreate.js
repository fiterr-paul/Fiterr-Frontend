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
        userID: user._id
    })

    const {phoneNumber, userID} = professional

    const onSubmit = async(e) => {
        e.preventDefault()
        let body = new FormData
        body.append('phoneNumber', phoneNumber)
        body.append('userID', userID)

        const post = await request.post('/api/users/professional-activate', body)
        history.push('/page-create')
    }
    const onChange = (e) => {
        setProfessional({...professional, [e.target.name]: e.target.value})
    }



    return(
        <>
            <h1>Please Enter Your Number for Professional Verificaiton</h1>
            <form>
                <label >Enter Your Contact Number Below</label>
                <input type="text" name="phoneNumber" id="phoneNumber" value={phoneNumber} onChange={onChange}/>
                <div className="submit-button">
                    <button onClick={onSubmit} type="submit" value="submit"> Submit </button>
                </div>
            </form>
        </>
    )
}
export default ProfessionalCreate