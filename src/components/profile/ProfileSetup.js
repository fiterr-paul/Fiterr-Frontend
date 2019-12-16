import React, {useState, useContext } from 'react'
import ProfileContext from '../../context/profile/profileContext'
import AuthContext from '../../context/auth/authContext'

const ProfileSetup = (props) => {
    const profileContext = useContext(ProfileContext);
    const authContext = useContext(AuthContext);
    const { user } = authContext
    const { makeProfile } = profileContext
    const [profile, setProfile] = useState({
        aboutMe: '',
        fitnessInterests: '',
        image: null
    })
    const { aboutMe, fitnessInterests, image } = profile
    
    const onSubmit = async (e) => {
        e.preventDefault();
        const body = new FormData()
        body.append('aboutMe', aboutMe)
        body.append('fitnessInterests', fitnessInterests)
        body.append('image', image)
        console.log(body)
        await makeProfile(body)
        props.history.push(`/profile/${user.username}`)
    }
    const onChange = (e) =>{
        setProfile({...profile, [e.target.name]: e.target.value })
    }
    const onFileChange = (e) => {
        setProfile({...profile, [e.target.name]: e.target.files[0]})
    }
    return(
        <>
            <h1>Customize your profile!</h1>
            <form encType="multipart/form-data" name="file-upload" onSubmit={onSubmit}>
                <div>
                    <label >About You!(Hobbies, interests, etc.)</label>
                    <input type="text" name="aboutMe" id="aboutMe" value={aboutMe} onChange={onChange}/>
                    <label >Fitness Interests</label>
                    <input type="text" name="fitnessInterests" id="fitnessInterests" value={fitnessInterests} onChange={onChange}/>
                    <label >Upload an Image</label>
                    <input type="file" name="image" id="image" onChange={onFileChange}/>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
            <a href=""></a>
        </>
    )
}
export default ProfileSetup