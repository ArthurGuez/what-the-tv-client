import React from 'react';
import './Error.scss';

const Error = (props) => {
	const { className, children, toLink, type } = props;

	return <div>{children}</div>;
};

export default Error;
