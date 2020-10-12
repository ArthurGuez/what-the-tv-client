import React from 'react';
import { bool, func } from 'prop-types';

import './Burger.scss';

const Burger = ({open, setOpen}) => {

    return (
        <div className={!open ?"burger" : "burger burger--open"} open={open} onClick={() => setOpen(!open)}>
            <div className="burger__line"></div>
            <div className="burger__line"></div>
            <div className="burger__line"></div>
        </div>
    )
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Burger;
