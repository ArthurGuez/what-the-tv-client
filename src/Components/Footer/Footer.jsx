import React from 'react';

import './Footer.scss';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__line"></div>
			<ul className="footer__links">
				<li>About</li>
				<li>FAQ</li>
				<li>Contact</li>
				<li>Terms Of Service</li>
			</ul>
		</div>
	);
};

export default Footer;
