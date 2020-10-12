import React from 'react';
import './Button.scss';

const Button = (props) => {
	const { content, className } = props;

	return <button className={`button ${className ? className : ""}`}>{content}</button>;
};

export default Button;
