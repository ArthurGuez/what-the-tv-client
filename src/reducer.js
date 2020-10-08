const reducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			localStorage.setItem('token', action.payload.data.token);
			return {
				...state,
				isAuthenticated: true,
				token: action.payload.data.token,
			};
		case 'LOGOUT':
			localStorage.clear();
			return {
				...state,
				isAuthenticated: false,
				token: null,
			};
		default:
			return state;
	}
};

module.exports = reducer;
