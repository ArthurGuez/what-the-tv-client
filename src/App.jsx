import React, { useReducer, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { AuthContext } from './Context/auth';

import Home from './Views/Home/Home';
import Register from './Views/Register/Register';
import Login from './Views/Login/Login';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { state } = useContext(AuthContext);
	return (
		<Route
			{...rest}
			render={(props) => {
				return state.isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />;
			}}
		/>
	);
};

const initialState = {
	isAuthenticated: !!localStorage.getItem('token'),
	token: localStorage.getItem('token') || null,
};

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

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AuthContext.Provider value={{ state, dispatch }}>
			<Router>
				<Switch>
					<PrivateRoute exact path="/" component={Home} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
				</Switch>
			</Router>
		</AuthContext.Provider>
	);
}

export default App;
