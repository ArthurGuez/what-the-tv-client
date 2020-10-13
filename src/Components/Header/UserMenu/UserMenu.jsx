import React, { useContext } from 'react';

import { AuthContext } from '../../../Context/auth';

import './UserMenu.scss';

import avatar from '../../../assets/images/avatar.svg';

const UserMenu = ({ open, setOpen }) => {
	const { dispatch } = useContext(AuthContext);

	const logOut = () => {
		dispatch({
			type: 'LOGOUT',
		});
	};

	return (
		<div className="nav__user" onClick={() => setOpen(!open)}>
			<img className="user__avatar" src={avatar} alt="Profile menu"></img>
			{open ? (
				<div className="userMenu">
					<ul>
						<li>Mon Compte</li>
						<li onClick={logOut}>Déconnexion</li>
					</ul>
				</div>
			) : null}
		</div>
	);
};

export default UserMenu;
