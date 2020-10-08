import { useState, useEffect } from 'react';

const useForm = (initialState, validate, callback) => {
	const [data, setData] = useState(initialState);
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = async (event) => {
		const { name, value, checked } = event.target;
		await setData({
			...data,
			[name]: value,
		});
	};

	const handleCheck = async (event) => {
		const { name, checked } = event.target;
		await setData({
			...data,
			[name]: checked,
		});
		console.log(data);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setData({
			...data,
		});
		setErrors(validate(data));
		setIsSubmitting(true);
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [errors, isSubmitting]);

	return { handleChange, handleCheck, handleSubmit, data, setData, errors };
};

export default useForm;
