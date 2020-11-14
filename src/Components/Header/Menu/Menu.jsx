import React from 'react';

import Button from '../../Button/Button';

import './Menu.scss';

const Menu = () => {
	return (
		<div className="menu">
			<Button className={'menu__item'} toLink="/discover">
				Discover
			</Button>
			<Button className={'menu__item'} toLink="/play/random">
				Play
			</Button>
			<Button className={'menu__item'} toLink="/contribute">
				Contribute
			</Button>
			<Button className={'menu__item'} toLink="/leaderboards">
				Leaderboards
			</Button>
		</div>
	);
};

export default Menu;
