import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import './Login.scss';

import { AuthContext } from '../../Context/auth';

import useForm from '../../CustomHooks/useForm';
import validateLogin from './ValidateLogin';

const API = process.env.REACT_APP_API;

const Login = () => {
	const initialState = {
		username: '',
		password: '',
	};

	const { dispatch } = useContext(AuthContext);

	const { handleChange, handleSubmit, data, setData, errors } = useForm(initialState, validateLogin, submit);

	const [redirect, setRedirect] = useState(false);
	
	async function submit() {
		try {
			const res = await axios.post(`${API}/users/signin`, {
				username: data.username,
				password: data.password,
			});

			if (res.status === 200) {
				dispatch({
					type: 'LOGIN',
					payload: res,
				});
				setRedirect(true);
			}
		} catch (error) {
			setData({
				...data,
				errorMessage: error.response.data.description,
			});
		}
	}

	if (redirect) {
		return <Redirect to="/" />;
	} else {
		return (
			<div className="login">
				<h1>Log In To What The TV</h1>
				<form onSubmit={handleSubmit} noValidate>
					<label htmlFor="username"></label>
					<input type="text" name="username" id="username" value={data.username} onChange={handleChange} />

					{errors.username ? <span>{errors.username}</span> : null}

					<label htmlFor="password"></label>
					<input
						type="password"
						name="password"
						id="password"
						value={data.password}
						onChange={handleChange}
					/>

					{errors.password ? <span>{errors.password}</span> : null}

					{data.errorMessage ? <span>{data.errorMessage}</span> : null}

					<button type="submit">Let's Play!</button>
				</form>

				<p>You don't have an account yet?</p>
				<Link to="/register">Register</Link>
			</div>
		);
	}
};

export default Login;
