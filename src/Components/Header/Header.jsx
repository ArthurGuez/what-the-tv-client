import React, {useState} from 'react';

import Burger from './Burger/Burger'
import Panel from './Panel/Panel'

import './Header.scss';

import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar.svg';

const Header = () => {
	const [openBurger, setOpenBurger] = useState(false);
	const [openUser, setOpenUser] = useState(false);

	return (
		<header>
			<nav className="nav">
				<div className="nav__menu">
					<Burger open={openBurger} setOpen={setOpenBurger}/>

					<Panel open={openBurger} setOpen={setOpenBurger}/>
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
