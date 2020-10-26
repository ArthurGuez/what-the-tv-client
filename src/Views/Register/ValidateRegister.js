export default function validateRegister(values) {
	const errors = {};
	if (!values.username.trim()) {
		errors.username = 'Username required';
	} else if (typeof values.username !== 'string') {
		errors.username = 'Username is invalid';
	}

	if (!values.email) {
		errors.email = 'Email required';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Une adresse e-mail est obligatoire.';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Email is invalid';
	}

	if (!values.password.trim()) {
		errors.password = 'Password required';
	} else if (values.password.length < 6) {
		errors.password = 'Password must be 6 characters or more';
	}

	if (!values.passwordConfirm.trim()) {
		errors.passwordConfirm = 'Password required';
	} else if (values.passwordConfirm !== values.password) {
		errors.passwordConfirm = 'Passwords do not match';
	}

	return errors;
}
