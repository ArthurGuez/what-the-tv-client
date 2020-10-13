import React from 'react';
import './Button.scss';

const Button = (props) => {
	const { className, children, toLink, type } = props;

	return (
		<a className="button-link" href={toLink ? toLink : null}>
			<button type={type} className={`button ${className ? className : ''}`}>
				{children}
			</button>
		</a>
	);
};

export default Button;
