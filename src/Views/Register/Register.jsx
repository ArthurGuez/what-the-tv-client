import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import useForm from '../../CustomHooks/useForm';

const Register = () => {
	const initialState = {
		username: '',
		name: '',
		email: '',
		birthday: '',
		country: '',
		gender: '',
		password: '',
		newsletter: '',
		terms: '',
		isSubmitting: false,
		errorMessage: null,
	};

	const { handleChange, handleSubmit, data, setdata } = useForm(submit, initialState);

	const [redirect, setRedirect] = useState(false);

	async function submit() {
		try {
		} catch (error) {}
	}

	if (redirect) {
		return <Redirect to="/" />;
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

					<label htmlFor="country">Your Country *</label>
					<select name="country" id="country">
						<option value={data.country} onChange={handleChange}>
							Where are you from?
						</option>
					</select>

					<label for="male">Male</label>
					<input type="radio" id="male" name="gender" value={data.gender} onChange={handleChange} />

					<label for="female">Female</label>
					<input type="radio" id="female" name="gender" value={data.gender} onChange={handleChange} />

					<label for="other">Other</label>
					<input type="radio" id="other" name="gender" value={data.gender} onChange={handleChange} />

					<h2>Security</h2>

					<label htmlFor="password">Choose Your Password *</label>
					<input type="password" name="password" id="password" value={data.password} onChange={handleChange} />

					<label htmlFor="passwordConfirm">Confirm Your Password *</label>
					<input type="password" name="passwordConfirm" id="passwordConfirm" />

					<h2>Agreements</h2>
					<label htmlFor="newsletter">I want to receive some cool news in my inbox.</label>
					<input type="checkbox" name="newsletter" id="newsletter" value={data.newsletter} onChange={handleChange} />

					<label htmlFor="terms">I agree to the terms and conditions of What The Tv.</label>
					<input type="checkbox" name="terms" id="terms" value={data.terms} onChange={handleChange} />

					<button type="submit">It's Showtime!</button>
				</form>
			</div>
		);
	}
};

export default Register;
