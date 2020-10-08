const validateLogin = (data) => {
	const errors = {};
	if (!data.username) {
		errors.username = 'Username missing';
	}
	if (!data.password) {
		errors.password = 'Password missing';
	}
	return errors;
};

export default validateLogin;
