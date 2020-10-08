import React, { useReducer, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import reducer from './reducer';
import { AuthContext } from './Context/auth';

import Header from './Components/Header/Header';
import Home from './Views/Home/Home';
import Register from './Views/Register/Register';
import Login from './Views/Login/Login';

import './App.scss';

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

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AuthContext.Provider value={{ state, dispatch }}>
			<Header />
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
