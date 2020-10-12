import React, {useState} from 'react';

import Burger from './Burger/Burger'
import MainMenu from './MainMenu/MainMenu'

import './Header.scss';

import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar.jpg';

const Header = () => {
	const [openBurger, setOpenBurger] = useState(false);
	const [openUser, setOpenUser] = useState(false);

	return (
		<header>
			<nav className="nav">
				<div className="nav__menu">
					<Burger open={openBurger} setOpen={setOpenBurger}/>

					<MainMenu open={openBurger} setOpen={setOpenBurger}/>
				</div>
				
				<div className="nav__logo">
					<img src={logo} alt="Return to homepage"></img>
				</div>
				
				<div className="nav__user">
					<img className="user__avatar" src={avatar} alt="Open profile menu"></img>
				</div>
			</nav>
		</header>
	);
};

export default Header;
