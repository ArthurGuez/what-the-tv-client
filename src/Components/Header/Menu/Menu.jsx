import React from 'react';

import Button from '../../Button/Button';

import './Menu.scss';

const Menu = () => {
	return (
		<div className="menu">
			<Button className={'menu__item'} content="Discover" />
			<Button className={'menu__item'} content="Play" />
			<Button className={'menu__item'} content="Contribute" />
			<Button className={'menu__item'} content="Leaderboards" />
		</div>
	);
};

export default Menu;
