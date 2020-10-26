const reducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			localStorage.setItem('token', action.payload.data.token);
			return {
				...state,
				isAuthenticated: true,
				token: action.payload.data.token,
				username: action.payload.data.username,
				isFetching: false,
			};
		case 'LOGOUT':
			localStorage.removeItem('token');
			return {
				...state,
				isAuthenticated: false,
				token: null,
				username: null,
				isFetching: false,
			};
		case 'LOAD_USER':
			return {
				...state,
				isAuthenticated: true,
				token: action.token,
				username: action.payload.username,
				isFetching: false,
			};
		case 'NO_USER':
			return {
				...state,
				isAuthenticated: false,
				token: null,
				username: null,
				isFetching: false,
			};
		default:
			return state;
	}
};

module.exports = reducer;
