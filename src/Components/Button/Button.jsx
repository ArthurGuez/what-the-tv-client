import React from 'react';
import './Button.scss';

const Button = (props) => {
	const { className, children, toLink, type, onClick } = props;

	return (
		<a className="button-link" href={toLink ? toLink : null}>
			<button
				type={type}
				className={`button ${className ? className : ''}`}
				onClick={onClick ? onClick : null}
			>
				{children}
			</button>
		</a>
	);
};

export default Button;
