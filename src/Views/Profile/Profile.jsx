import React, { useContext } from 'react';

import { AuthContext } from '../../Context/auth';

import './Profile.scss';

const Profile = () => {
	const { state: authState } = useContext(AuthContext);

	console.log({ authState });

	return (
		<main className="profile">
			<h1>{authState.username}'s Profile</h1>
			<section className="profile__details">
				<div className="details__avatar"></div>
				<div className="details__username"></div>
			</section>
		</main>
	);
};

export default Profile;
