import React, { useState, useContext, useEffect } from 'react'
import '../assets/scss/signup.scss';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';


const Register = (props) => {

	const authContext = useContext(AuthContext);
	const alertContext = useContext(AlertContext);

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
			<section className="body signup">
				<div className="image-overlay">
					<div className="container">
						<div className='form-container'>
							<h1>create your account</h1>
							<form className="signup" onSubmit={onSubmit}>
								<div className="field-row title">
									<h3>Enter your account details</h3>
								</div>
								<div className="field-row input name">
									<div className="width-50">
										<input type="text" name="firstname" value={firstname} onChange={onChange} autoComplete="off" placeholder="First Name" required/>
									</div>
									<div className="width-50">
										<input type="text" name="lastname" value={lastname} onChange={onChange} autoComplete="off" placeholder="Surname" required/>
									</div>
                </div>
								<div className="field-row input">
                  <input type="email" name="email" value={email} onChange={onChange} autoComplete="off" placeholder="Email Address" required/>
                </div>
								<div className="field-row input">
                  <input type="text" name="username" value={username} onChange={onChange} autoComplete="off" placeholder="Username (you can change this later)" required/>
                </div>
								<div className="field-row input">
                  <input type="password" name="password" value={password} onChange={onChange} autoComplete="off" placeholder="Create Password" minLength="6" required/>
                </div>
								<div className="field-row input">
                  <input type="password" name="password2" value={password2} onChange={onChange} autoComplete="off" placeholder="Confirm Your Password" minLength="6" required/>
                </div>
								<div className="field-row title">
                  <h3>Birthday</h3>
                </div>
								<div className="field-row input">
                  <input type="date" name="dob" value={dob} onChange={onChange} autoComplete="off" required/>
                </div>
								<div className="field-row title">
                  <h3>Gender</h3>
                </div>
								<div className="field-row input gender">
									<div className="btn-radio">
										<input type="radio" name="gender" value="male" onChange={onChange} autoComplete="off" required/>
										<div>
											Male
										</div>
									</div>
									<div className="btn-radio">
										<input type="radio" name="gender" value="female" onChange={onChange} autoComplete="off" required/>
										<div>
											Female
										</div>
									</div>
                </div>
								<div className="field-row button">
									<button type="submit" value="Register"> create account </button>
                </div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}


export default Register
