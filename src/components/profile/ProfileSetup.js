import React, {useState, useContext } from 'react'
import ProfileContext from '../../context/profile/profileContext'

const ProfileSetup = (props) => {
    const profileContext = useContext(ProfileContext);

    const { makeProfile } = profileContext;

    // useEffect(() => {
    //     if(profileComplete){
    //         props.history.push('/newsfeed');
    //     }
    // }, [profileComplete] );

    const [profile, setProfile] = useState({
        aboutMe: '',
        fitnessInterests: '',
        image: null
    })

    const { aboutMe, fitnessInterests, image } = profile;
    // console.log(profile);
    
    const onSubmit = async (e) => {
        e.preventDefault();

        let body = new FormData();
        body.append('aboutMe', aboutMe)
        body.append('fitnessInterests', fitnessInterests)
        body.append('image', image)

        // this is used to log the FormData object
        // for (var key of body.entries()) {
        //     console.log(key[0]);
        //     console.log(key[1]);
        // }
        
        makeProfile(body);
        // props.history.push(`/profile/${user.username}`)
        props.history.push('/newsfeed');
    }

    const onChange = (e) =>{
        setProfile({...profile, [e.target.name]: e.target.value })
    }

    const onFileChange = (e) => {
        setProfile({...profile, [e.target.name]: e.target.files[0]})
    }

    return(
        <>
            <section className="body login">
                <div className="image-overlay">
                    <div className="container">
                        <div className="form-container">
                            <h1>Customize your profile!</h1>
                            <form className="signup" encType="multipart/form-data" name="file-upload" onSubmit={onSubmit}>
                                <div>
                                    {/* <label >About You!(Hobbies, interests, etc.)</label> */}
                                    <div className="field-row input">
                                        <div className="width-50">
                                            <input type="text" name="aboutMe" id="aboutMe" value={aboutMe} onChange={onChange} placeholder="About You"/>
                                        </div>
                                    </div>
                                    <div className="field-row input">
                                        <div className="width-50">
                                            <input type="textarea" name="fitnessInterests" id="fitnessInterests" value={fitnessInterests} onChange={onChange} placeholder="Fitness Interests"/>
                                        </div>
                                    </div>
                                    <div className="field-row input">
                                        <div className="width-50">
                                            <label >Upload an Image</label>
                                            <input type="file" name="image" id="image" onChange={onFileChange}/>
                                        </div>
                                    </div>
                                 
                                    
                                    <div className="field-row button">
                                        <button type="submit" value="Submit">Submit</button>
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


export default ProfileSetup
