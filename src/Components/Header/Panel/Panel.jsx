import React from 'react';
import { bool } from 'prop-types';

import Button from '../../Button/Button';

import './Panel.scss';

const Panel = ({ open }) => {
	return (
		<div className={open ? 'panel panel--open' : 'panel'} open={open}>
			<Button className={'panel__item'} content="Discover" />
			<Button className={'panel__item'} content="Play" />
			<Button className={'panel__item'} content="Contribute" />
			<Button className={'panel__item'} content="Leaderboards" />
		</div>
	);
};

Panel.propTypes = {
	open: bool.isRequired,
};

export default Panel;
