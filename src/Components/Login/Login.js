import React, { useContext } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { useHistory, useLocation } from 'react-router-dom';
import LoginBg from '../../images/Group 140.png';
import { UserContext } from '../../App';
import { firebaseConfig } from './firebaseConfig';
import { useForm } from 'react-hook-form';
const Login = () => {
	const { register, handleSubmit, watch, errors } = useForm();

	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: '/' } };

	if (firebase.apps.length === 0) {
		firebase.initializeApp(firebaseConfig);
	}

	const handleGoogleSignIn = () => {
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function (result) {
				const { displayName, email } = result.user;
				const signedInUser = { name: displayName, email };
				setLoggedInUser(signedInUser);
				storeAuthToken();
			})
			.catch(function (error) {
				const errorMessage = error.message;
				console.log(errorMessage);
			});
	};

	const storeAuthToken = () => {
		firebase
			.auth()
			.currentUser.getIdToken(/* forceRefresh */ true)
			.then(function (idToken) {
				sessionStorage.setItem('token', idToken);
				history.replace(from);
			})
			.catch(function (error) {
				// Handle error
			});
	};
	const onSubmit = (data) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(data.email, data.password)
			.then((user) => {
				console.log(user);
				// Signed in
				// ...
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				// ..
				console.log(errorMessage);
			});
	};

	return (
		<div className="login-page container">
			<div className="row align-items-center" style={{ height: '100vh' }}>
				<div className="col-md-6 shadow p-5">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="form-group">
							<label htmlFor="Name">Email</label>
							<input
								className="form-control"
								name="email"
								type="email"
								ref={register({ required: true })}
							/>
							{errors.email && 'email is required'}
						</div>
						<div className="form-group">
							<label htmlFor="Name">Password</label>
							<input
								type="password"
								className="form-control"
								name="password"
								ref={register({ required: true })}
							/>
							{errors.password && 'password is required'}
						</div>
						<input className="form-control  btn-danger" type="submit" />
					</form>
					<div className="from-group mt-5">
						<button
							className="btn btn-success"
							onClick={handleGoogleSignIn}
						>
							Google Sign in
						</button>
					</div>
				</div>
				<div className="col-md-6 d-none d-md-block align-self-end">
					<img className="img-fluid" src={LoginBg} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Login;
