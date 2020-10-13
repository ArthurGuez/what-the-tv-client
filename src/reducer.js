const reducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			localStorage.setItem('token', action.payload.data.token);
			return {
				...state,
				isAuthenticated: true,
				token: action.payload.data.token,
				user: action.payload.data.user,
				isFetching: false,
			};
		case 'LOGOUT':
			localStorage.removeItem('token');
			return {
				...state,
				isAuthenticated: false,
				token: null,
				user: null,
				isFetching: false,
			};
		case 'LOAD_USER':
			return {
				...state,
				isAuthenticated: true,
				token: action.token,
				user: action.payload.name,
				isFetching: false,
			};
		case 'NO_USER':
			return {
				...state,
				isAuthenticated: false,
				token: null,
				user: null,
				isFetching: false,
			};
		default:
			return state;
	}
};

module.exports = reducer;
