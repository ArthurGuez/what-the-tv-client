import React from 'react';
import { bool } from 'prop-types';

import Button from '../../Button/Button';

import './Panel.scss';

const Panel = ({ open }) => {
	return (
		<div className={open ? 'panel panel--open' : 'panel'} open={open}>
			<Button className={'panel__item'} toLink="/discover">
				Discover
			</Button>
			<Button className={'panel__item'} toLink="/play">
				Play
			</Button>
			<Button className={'panel__item'} toLink="/contribute">
				Contribute
			</Button>
			<Button className={'panel__item'} toLink="/leaderboards">
				Leaderboards
			</Button>
		</div>
	);
};

Panel.propTypes = {
	open: bool.isRequired,
};

export default Panel;
