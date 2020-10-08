import React, { useReducer, useContext } from 'react';

import Button from '../Button/Button';

import { AuthContext } from '../../Context/auth';

const Header = () => {
	return (
		<header>
			<nav>
				<div className="header__logo-start">WHAT THE</div>
				<div className="header__logo-end">TV</div>
				<Button content="Discover"></Button>
			</nav>
		</header>
	);
};

export default Header;
