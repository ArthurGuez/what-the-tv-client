import React from 'react';
import { bool } from 'prop-types';

import Button from '../../Button/Button';

import './Panel.scss';

const Panel = ({ open }) => {
	return (
		<div className={open ? 'panel panel--open' : 'panel'} open={open}>
			<Button className={'panel__item'}>Discover</Button>
			<Button className={'panel__item'}>Play</Button>
			<Button className={'panel__item'}>Contribute</Button>
			<Button className={'panel__item'}>Leaderboards</Button>
		</div>
	);
};

Panel.propTypes = {
	open: bool.isRequired,
};

export default Panel;
