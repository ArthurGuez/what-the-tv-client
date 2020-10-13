import React from 'react';

import Button from '../../Button/Button';

import './Menu.scss';

const Menu = () => {
	return (
		<div className="menu">
			<Button className={'menu__item'}>Discover</Button>
			<Button className={'menu__item'}>Play</Button>
			<Button className={'menu__item'}>Contribute</Button>
			<Button className={'menu__item'}>Leaderboards</Button>
		</div>
	);
};

export default Menu;
