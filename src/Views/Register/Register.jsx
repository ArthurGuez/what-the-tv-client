import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import './Register.scss';

import useForm from '../../CustomHooks/useForm';
import validateRegister from './ValidateRegister';

import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';

const API = process.env.REACT_APP_API;

const Register = () => {
	const initialState = {
		username: '',
		email: '',
		birthday: undefined,
		country: undefined,
		gender: undefined,
		password: '',
		passwordConfirm: '',
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
			<main className="register">
				<h1>Join What The TV</h1>
				<form className="register__form" onSubmit={handleSubmit} noValidate>
					<h2>Personal Infos</h2>
					<div className="form__input">
						<label htmlFor="username">Your Username *</label>
						<Input
							type="text"
							name="username"
							id="username"
							value={data.username}
							onChange={handleChange}
						/>
					</div>

					<div className="form__input">
						<label htmlFor="email">Your Email *</label>
						<Input
							type="email"
							name="email"
							id="email"
							value={data.email}
							onChange={handleChange}
						/>
					</div>

					<div className="form__input">
						<label htmlFor="birthday">Your Date Of Birth</label>
						<Input
							type="date"
							name="birthday"
							id="birthday"
							defaultValue={data.birthday}
							onChange={handleChange}
						/>
					</div>

					<div className="form__input">
						<label htmlFor="country">Your Country</label>
						<select name="country" id="country" onChange={handleChange}>
							<option value=""></option>
							<option value="France">France</option>
							<option value="United-States">United-States</option>
						</select>
					</div>

					<div className="form__input">
						<label htmlFor="male">Male</label>
						<Input type="radio" id="male" name="gender" value="Male" onChange={handleChange} />

						<label htmlFor="female">Female</label>
						<Input type="radio" id="female" name="gender" value="Female" onChange={handleChange} />

						<label htmlFor="other">Other</label>
						<Input type="radio" id="other" name="gender" value="Other" onChange={handleChange} />
					</div>

					<h2>Security</h2>
					<div className="form__input">
						<label htmlFor="password">Choose Your Password *</label>
						<Input
							type="password"
							name="password"
							id="password"
							value={data.password}
							onChange={handleChange}
						/>
					</div>

					{errors.password ? <span className="form__error">{errors.password}</span> : null}

					<div className="form__input">
						<label htmlFor="passwordConfirm">Confirm Your Password *</label>
						<Input
							type="password"
							name="passwordConfirm"
							id="passwordConfirm"
							value={data.passwordConfirm}
							onChange={handleChange}
						/>
					</div>

					{errors.passwordConfirm ? (
						<span className="form__error">{errors.passwordConfirm}</span>
					) : null}

					<h2>Agreements</h2>

					<div className="form__input">
						<label htmlFor="newsletter">I want to receive some cool news in my inbox</label>
						<Input
							type="checkbox"
							name="newsletter"
							id="newsletter"
							defaultChecked={data.newsletter}
							onChange={handleCheck}
						/>
					</div>

					<div className="form__input">
						<label htmlFor="terms">I agree to the terms and conditions of What The TV</label>
						<Input
							type="checkbox"
							name="terms"
							id="terms"
							defaultChecked={data.terms}
							onChange={handleCheck}
						/>
					</div>

					{errors.terms ? <span className="form__error">{errors.terms}</span> : null}

					{data.errorMessage ? <span className="form__error">{data.errorMessage}</span> : null}

					<Button className="form__submit" type="submit">
						It's Showtime!
					</Button>
				</form>

				<div className="register__redirect">
					<p>Already have an account?</p>
					<Button className="redirect__button" toLink="/login">
						Login
					</Button>
				</div>
			</main>
		);
	}
};

export default Register;
