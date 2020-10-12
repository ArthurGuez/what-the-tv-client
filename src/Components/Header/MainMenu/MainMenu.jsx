import React from 'react';
import { bool } from 'prop-types';

import Button from '../../Button/Button';

import './MainMenu.scss';

const MainMenu = ({open}) => {

    return (
        <div className={open ? "mainMenu mainMenu--open" : "mainMenu"} open={open}>
            <Button content="Discover" />
            <Button content="Play" />
            <Button content="Contribute" />
            <Button content="Leaderboards" />
        </div>
    )
}

MainMenu.propTypes = {
    open: bool.isRequired,
};

export default MainMenu;