import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import reducer from './reducer';
import { AuthContext } from './Context/auth';

import PrivateRoute from './PrivateRoute';
import Header from './Components/Header/Header';
import Home from './Views/Home/Home';
import Register from './Views/Register/Register';
import Login from './Views/Login/Login';

import './App.scss';

const API = process.env.REACT_APP_API;

function App() {
	const initialState = {
		isAuthenticated: false,
		token: localStorage.getItem('token'),
		user: null,
		isFetching: true,
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	console.log('app', state);

	useEffect(() => {
		const fetchUser = async () => {
			const token = localStorage.getItem('token');

			if (token) {
				const res = await axios.get(`${API}/users/me`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				if (res.status === 200) {
					dispatch({
						type: 'LOAD_USER',
						payload: res.data.user,
						token,
					});
				}
			} else {
				dispatch({
					type: 'NO_USER',
				});
			}
		};
		fetchUser();
	}, []);

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
