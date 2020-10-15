import React, { useContext } from 'react';

import { AuthContext } from '../../../Context/auth';

import './UserMenu.scss';

import avatar from '../../../assets/images/avatar.svg';

const UserMenu = ({ open, setOpen }) => {
	const { state, dispatch } = useContext(AuthContext);

	const logOut = () => {
		dispatch({
			type: 'LOGOUT',
		});
	};

	function windowOnClick(event) {
		if (!event.target.matches('.nav__user')) {
			setOpen(false);
			window.removeEventListener('click', windowOnClick);
		}
	}

	function iconOnClick(event) {
		event.stopPropagation();
		setOpen(true);
		window.addEventListener('click', windowOnClick);
	}

	return (
		<div
			className="nav__user"
			onClick={(event) => {
				iconOnClick(event);
				setOpen(!open);
			}}
		>
			<img className="user__avatar" src={avatar} alt="Profile menu"></img>
			{open ? (
				<div className="userMenu">
					{state.isAuthenticated ? (
						<ul>
							<li>My Account</li>
							<li onClick={logOut}>Logout</li>
						</ul>
					) : (
						<ul>
							<li>
								<a href="/login">Login</a>
							</li>
							<li>
								<a href="/register">Register</a>
							</li>
						</ul>
					)}
				</div>
			) : null}
		</div>
	);
};

export default UserMenu;
