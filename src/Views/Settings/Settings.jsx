import React, { useContext } from 'react';

import { AuthContext } from '../../Context/auth';

import Button from '../../Components/Button/Button';

import './Settings.scss';
import axios from 'axios';

const API = process.env.REACT_APP_API;

const Settings = () => {
	const { state: authState, dispatch } = useContext(AuthContext);

	const deleteAccount = async () => {
		const res = await axios.delete(`${API}/users/delete`, {
			headers: {
				Authorization: `Bearer ${authState.token}`,
			},
		});
		if (res.status === 200) {
			dispatch({
				type: 'LOGOUT',
			});
		}
	};

	return (
		<main className="settings">
			<h1>Settings</h1>
			<section className="settings__avatar">
				<h2>Your Avatar</h2>
				<div className="avatar__preview"></div>
			</section>
			<section className="settings__personal-infos">
				<h2>Your Personal Infos</h2>
			</section>
			<section className="settings__subscriptions">
				<h2>Your Subscriptions</h2>
			</section>
			<section className="settings__security">
				<h2>Your Security Details</h2>
				<div className="security__delete">
					<p>Your Account</p>
					<p>Do you want to leave us?</p>
					<Button className="delete__button" onClick={deleteAccount}>
						Delete
					</Button>
				</div>
			</section>
		</main>
	);
};

export default Settings;
