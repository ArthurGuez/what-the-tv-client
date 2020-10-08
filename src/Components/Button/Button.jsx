import React from 'react';
import './Button.scss';

const Button = (props) => {
	const { content } = props;

	return <button className="button">{content}</button>;
};

export default Button;
