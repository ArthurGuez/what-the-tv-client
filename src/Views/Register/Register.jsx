import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import useForm from '../../CustomHooks/useForm';
import validateRegister from './ValidateRegister';

const API = process.env.REACT_APP_API;

const Register = () => {
	const initialState = {
		username: '',
		name: '',
		email: '',
		birthday: '',
		country: '',
		gender: '',
		password: '',
		newsletter: false,
		terms: false,
	};

	const { handleChange, handleCheck, handleSubmit, data, setData, errors } = useForm(
		initialState,
		validateRegister,
		submit
	);

	const [redirect, setRedirect] = useState(false);

	async function submit() {
		try {
			const res = await axios.post(`${API}/users/signup`, {
				username: data.username,
				name: data.name,
				email: data.email,
				birthday: data.birthday,
				country: data.country,
				gender: data.gender,
				password: data.password,
				newsletter: data.newsletter,
				terms: data.terms,
			});

			if (res.status === 201) {
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
		return <Redirect to="/login" />;
	} else {
		return (
			<div className="register">
				<h1>Join What The TV</h1>
				<form onSubmit={handleSubmit} noValidate>
					<h2>Personal Infos</h2>
					<label htmlFor="username">Your Username *</label>
					<input type="text" name="username" id="username" value={data.username} onChange={handleChange} />

					<label htmlFor="name">Your Name *</label>
					<input type="text" name="name" id="name" value={data.name} onChange={handleChange} />

					<label htmlFor="email">Your Email *</label>
					<input type="email" name="email" id="email" value={data.email} onChange={handleChange} />

					<label htmlFor="birthday">Your Date Of Birth</label>
					<input type="date" name="birthday" id="birthday" value={data.birthday} onChange={handleChange} />

					<label htmlFor="country">Your Country</label>
					<select name="country" id="country" onChange={handleChange}>
						<option value="France">France</option>
						<option value="United-States">United-States</option>
					</select>

					<label htmlFor="male">Male</label>
					<input type="radio" id="male" name="gender" value="Male" onChange={handleChange} />

					<label htmlFor="female">Female</label>
					<input type="radio" id="female" name="gender" value="Female" onChange={handleChange} />

					<label htmlFor="other">Other</label>
					<input type="radio" id="other" name="gender" value="Other" onChange={handleChange} />

					<h2>Security</h2>

					<label htmlFor="password">Choose Your Password *</label>
					<input type="password" name="password" id="password" value={data.password} onChange={handleChange} />

					{errors.password ? <span>{errors.password}</span> : null}

					<label htmlFor="passwordConfirm">Confirm Your Password *</label>
					<input type="password" name="passwordConfirm" id="passwordConfirm" />

					<h2>Agreements</h2>
					<label htmlFor="newsletter">I want to receive some cool news in my inbox.</label>
					<input type="checkbox" name="newsletter" id="newsletter" checked={data.newsletter} onChange={handleCheck} />

					<label htmlFor="terms">I agree to the terms and conditions of What The Tv.</label>
					<input type="checkbox" name="terms" id="terms" value={data.terms} onChange={handleCheck} />

					{data.errorMessage ? <span>{data.errorMessage}</span> : null}

					<button type="submit">It's Showtime!</button>
				</form>
			</div>
		);
	}
};

export default Register;
