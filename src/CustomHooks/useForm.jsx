import { useState, useEffect } from 'react';

const useForm = (initialState, validate, callback) => {
	const [data, setData] = useState(initialState);
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = async (event) => {
		const { name, value } = event.target;
		await setData({
			...data,
			[name]: value,
		});
		console.log(data);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setData({
			...data,
			errorMessage: null,
		});
		setErrors(validate(data));
		setIsSubmitting(true);
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [errors]);

	return { handleChange, handleSubmit, data, setData, errors };
};

export default useForm;
