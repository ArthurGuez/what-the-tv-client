import React, { useState, useEffect } from 'react';

import Burger from './Burger/Burger';
import Panel from './Panel/Panel';
import Menu from './Menu/Menu';
import UserMenu from './UserMenu/UserMenu';

import './Header.scss';

const Header = () => {
	const [openBurger, setOpenBurger] = useState(false);
	const [openUser, setOpenUser] = useState(false);

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

				<a href="/">
					<div className="nav__logo"></div>
				</a>

				<UserMenu open={openUser} setOpen={setOpenUser} />
			</nav>
		</header>
	);
};

export default Header;
