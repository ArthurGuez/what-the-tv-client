import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import { AuthContext } from '../../Context/auth';

import useForm from '../../CustomHooks/useForm';

const API = process.env.REACT_APP_API;

const Login = () => {
	const initialState = {
		username: '',
		password: '',
		isSubmitting: false,
		errorMessage: null,
	};

	const { dispatch } = useContext(AuthContext);

	const { handleChange, handleSubmit, data, setdata } = useForm(submit, initialState);

	const [redirect, setRedirect] = useState(false);

	async function submit() {
		try {
			const res = await axios.post(`${API}/signin`, {
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
			setdata({
				...data,
				isSubmitting: false,
				errorMessage: error.message,
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

					<label htmlFor="password"></label>
					<input type="password" name="password" id="password" value={data.password} onChange={handleChange} />

					<button type="submit">Let's Play!</button>
				</form>

				<p>Vous n'avez pas de compte ?</p>
			</div>
		);
	}
};

export default Login;
