import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import { AuthContext } from '../../Context/auth';

import useForm from '../../CustomHooks/useForm';
import validateLogin from './ValidateLogin';

import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';

import './Login.scss';

const API = process.env.REACT_APP_API;

const Login = () => {
	const initialState = {
		username: '',
		password: '',
	};

	const { dispatch } = useContext(AuthContext);

	const { handleChange, handleSubmit, data, setData, errors } = useForm(
		initialState,
		validateLogin,
		submit
	);

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
				errorsArray: error.response.data.errors,
				errorMessage: error.response.data.description,
			});
		}
	}

	const findError = (errorField) => {
		const errorMessage = data.errorsArray.find((error) => error.field === errorField).message;
		return <span className="form__error">{errorMessage}</span>;
	};

	if (redirect) {
		return <Redirect to="/" />;
	} else {
		return (
			<main className="login">
				<h1>Log In To What The TV</h1>
				<form className="login__form" onSubmit={handleSubmit} noValidate>
					<div className="form__input">
						<label htmlFor="username">Your Username</label>
						<Input
							type="text"
							name="username"
							id="username"
							value={data.username}
							onChange={handleChange}
						/>

						{errors.username ? <span>{errors.username}</span> : null}
					</div>

					{data.errorsArray && data.errorsArray.find((error) => error.field === 'username')
						? findError('username')
						: null}

					<div className="form__input">
						<label htmlFor="password">Your Password</label>
						<Input
							type="password"
							name="password"
							id="password"
							value={data.password}
							onChange={handleChange}
						/>

						{errors.password ? <span>{errors.password}</span> : null}
					</div>

					{data.errorsArray && data.errorsArray.find((error) => error.field === 'password')
						? findError('password')
						: null}

					{data.errorMessage ? <span className="form__error">{data.errorMessage}</span> : null}

					<Button className="form__submit" type="submit">
						Let's Play!
					</Button>
				</form>

				<div className="login__redirect">
					<p>You don't have an account yet?</p>
					<Button className="redirect__button" toLink="/register">
						Register
					</Button>
				</div>
			</main>
		);
	}
};

export default Login;
