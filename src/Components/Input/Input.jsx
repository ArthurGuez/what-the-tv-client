import React from 'react';

import './Input.scss';

const Input = (props) => {
	const { type, name, id, value, onChange, defaultChecked } = props;

	return (
		<input
			className="input"
			type={type}
			name={name}
			id={id}
			onChange={onChange}
			value={value}
			defaultChecked={defaultChecked ? defaultChecked : null}
		/>
	);
};

export default Input;
