export default function validateRegister(values) {
	const errors = {};
	if (!values.name) {
		errors.name = 'Name is missing';
	} else if (typeof values.name !== 'string') {
		errors.name = 'Invalid characters';
	}
	if (!values.email) {
		errors.email = 'Email est missing';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Une adresse e-mail est obligatoire.';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Invalid characters';
	}
	if (!values.password) {
		errors.password = 'Password is missing';
	} else if (values.password.length < 8) {
		errors.password = 'Le mot de passe doit faire au moins 8 caractères.';
	}
	return errors;
}
