import { useState, useEffect } from 'react';

const useForm = (initialState, validate, callback) => {
	const [data, setData] = useState(initialState);
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setData({
			...data,
			[name]: value,
		});
	};

	const handleCheck = (event) => {
		const { name, checked } = event.target;
		setData({
			...data,
			[name]: checked,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setData({
			...data,
		});
		if (validate) {
			setErrors(validate(data));
		}
		setIsSubmitting(true);
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [errors, isSubmitting]);

	return {
		handleChange,
		handleCheck,
		handleSubmit,
		data,
		setData,
		errors,
		setIsSubmitting,
	};
};

export default useForm;
