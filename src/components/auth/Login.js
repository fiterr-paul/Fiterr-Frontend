import React, { useState, useContext, useEffect } from 'react';
import '../assets/scss/login.scss';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import ProfileContext from '../../context/profile/profileContext'


const Login = (props) => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const profileContext = useContext(ProfileContext)
    
    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated, loadUser } = authContext;
    const { getProfile, profile, profileComplete } = profileContext

  useEffect(() => {
    
    if(isAuthenticated === null){
      // console.log('attempt to load the user');
      loadUser();
    }
    
    if(isAuthenticated){
      props.history.push('/newsfeed');
    }

    // if you are authenticated (isAuthenticated === true) but havent complete your profile (profileComplete === false), then you need to be taken to the profile complete page

    // if(error === 'Invalid Credentials'){
    //     setAlert(error, 'danger');
    //     clearErrors();
    // }
    // eslint-disable-next-line

  }, [error, isAuthenticated, props.history])

  const [user, setUser ] = useState({
    email: '',
    password: '',
  })

  const { email, password } = user; //this is taken from the useState hook for user as seen above

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault();
    if(email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        email,
        password
      })
    }
  }

  return (
    <>
      <section className="body login">
        <div className="image-overlay">
          <div className="container">
            <div className='form-container'>
              <h1>login to your account</h1>
              <form className='login' onSubmit={onSubmit}>
                <div className="field-row title">
                  <h3>Enter your account details</h3>
                </div>
                <div className="field-row input">
                  <input type="email" name="email" value={email} onChange={onChange} autoComplete="off" placeholder="Email Address or Mobile/Cell Number" required/>
                </div>
                <div className="field-row input">
                  <input type="password" name="password" value={password} onChange={onChange} autoComplete="off" placeholder="Enter Your Password" required/>
                </div>
                <div className="field-row button">
                  <button type="submit" value="Login"> login </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};


export default Login;
