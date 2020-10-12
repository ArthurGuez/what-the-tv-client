import React, { useState, useEffect } from 'react';

import Burger from './Burger/Burger';
import Panel from './Panel/Panel';
import Menu from './Menu/Menu';

import './Header.scss';

import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar.svg';

const Header = () => {
	const [openBurger, setOpenBurger] = useState(false);
	// const [openUser, setOpenUser] = useState(false);

	const [isMobile, setMobile] = useState(window.innerWidth < 1025);

	const updateMedia = () => {
		setMobile(window.innerWidth < 1025);
	};

	useEffect(() => {
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	});

	return (
		<header>
			<nav className="nav">
				<div className="nav__menu">
					{isMobile ? (
						<>
							<Burger open={openBurger} setOpen={setOpenBurger} />

							<Panel open={openBurger} setOpen={setOpenBurger} />
						</>
					) : (
						<Menu />
					)}
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
