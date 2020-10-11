import React from 'react';

import Button from '../Button/Button';

import './Header.scss';

import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/avatar.jpg';

const Header = () => {
	return (
		<header>
			<nav className="nav">
				<div className="nav__burger">
					<div className="burger__line"></div>
					<div className="burger__line"></div>
					<div className="burger__line"></div>
				</div>
				
				<div className="nav__logo">
					<img src={logo} alt="Return to homepage"></img>
				</div>
				
				
				{/* <Button content="Discover" className="nav__bu"></Button>
				<Button content="Play"></Button>
				<Button content="Contribute"></Button>
				<Button content="Leaderboards"></Button> */}
				<div className="nav__user">
					<img className="user__avatar" src={avatar} alt="Open profile menu"></img>
				</div>
			</nav>
		</header>
	);
};

export default Header;
