import React, { useReducer, useContext } from 'react';

import { AuthContext } from './Context/auth';

const Header = () => {
	return (
		<header>
			<nav>
				<div className="header__logo">WHAT THE TV</div>
			</nav>
		</header>
	);
};
