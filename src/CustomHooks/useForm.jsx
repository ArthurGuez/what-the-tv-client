import { useState } from 'react';

const useForm = (callback, initialState) => {
	const [data, setData] = useState(initialState);

	const handleChange = (event) => {
		const { name, data } = event.target;
		setData({
			...data,
			[name]: data,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		callback();
	};

	return { handleChange, handleSubmit, data, setData };
};

export default useForm;
