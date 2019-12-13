import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';


const Register = (props) => {

    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);

    console.log(props);

    const { setAlert } = alertContext;
    const { register, error, clearErrors, isAuthenticated, loadUser } = authContext;

    useEffect(() => {
        console.log('isAuthenticated', isAuthenticated);
        if(isAuthenticated === null){
            loadUser();
        }

        if(isAuthenticated){
            props.history.push('/create-profile');
        }

        if(error === 'User already exists'){
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history])

    
    // Component level state
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        dob: '',
        password: '',
        password2: '',
        gender: ''
    })

    const { firstname, lastname, email, password, password2, dob, username, gender } = user;

    const onSubmit = (e) => {
        e.preventDefault();
        if(firstname === '' || lastname === '' || email === '' || password === '') {
            setAlert('Please enter all fields', 'danger');  //remember setAlert(msg, type);
        } else if (password !== password2) {
            setAlert('Passwords do not match', 'danger')
        } else {
            register({
                firstname,
                lastname,
                username,
                email,
                dob,
                gender,
                password
            });
        }
    }

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }


    return (
        <>
            <section className="body">
                <div className="container">
                    <div className='form-container'>
                        <h1>
                            Fiterr <span className="text-primary">Register</span>
                        </h1>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstname">First Name</label>
                                <input type="text" name="firstname" value={firstname} onChange={onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname">Last Name</label>
                                <input type="text" name="lastname" value={lastname} onChange={onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" value={username} onChange={onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="dob">D.O.B</label>
                                <input type="date" name="dob" value={dob} onChange={onChange}/>
                            </div>
                            <div className="form-group">
                                Male <input type="radio" name="gender" value="male" onChange={onChange}/> {'   '}
                                Female <input type="radio" name="gender" value="female" onChange={onChange} /> 
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" name="email" value={email} onChange={onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" value={password} onChange={onChange} minLength="6"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password2">Confirm Password</label>
                                <input type="password" name="password2" value={password2} onChange={onChange} minLength="6"/>
                            </div>
                            <input type="submit" value="Register" className='btn btn-primary btn-block'/>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Register
