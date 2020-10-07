const validateLogin = (data) => {
	const errors = {};
	if (!data.email) {
		errors.email = 'Une adresse e-mail est obligatoire.';
	} else if (!/\S+@\S+\.\S+/.test(data.email)) {
		errors.email = 'Veuillez insérer un e-mail valide.';
	}
	if (!data.password) {
		errors.password = 'Un mot de passe est obligatoire.';
	}
	return errors;
};

export default validateLogin;
