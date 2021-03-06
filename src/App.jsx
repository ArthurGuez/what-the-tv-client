import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import reducer from './reducer';
import { AuthContext } from './Context/auth';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Views/Home/Home';
import Register from './Views/Register/Register';
import Login from './Views/Login/Login';
import Play from './Views/Play/Play';
import PlayRandom from './Components/PlayRandom/PlayRandom';
import Contribute from './Views/Contribute/Contribute';
import Profile from './Views/Profile/Profile';
import Settings from './Views/Settings/Settings';
import Error from './Views/Error/Error';

import './App.scss';

const API = process.env.REACT_APP_API;

const initialState = {
	isAuthenticated: false,
	token: localStorage.getItem('token'),
	user: null,
	isFetching: true,
};

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		const fetchUser = async () => {
			const token = localStorage.getItem('token');

			if (token) {
				try {
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
				} catch (error) {
					dispatch({
						type: 'LOGOUT',
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
					<PublicRoute exact path="/register" component={Register} />
					<PublicRoute exact path="/login" component={Login} />
					<PrivateRoute exact path="/" component={Home} />
					<PrivateRoute exact path="/play/random" component={PlayRandom} />
					<PrivateRoute exact path="/play/:snapId" component={Play} />
					<PrivateRoute exact path="/contribute" component={Contribute} />
					<PrivateRoute exact path="/profile" component={Profile} />
					<PrivateRoute exact path="/profile/settings" component={Settings} />
					<Route path="*" component={Error} />
				</Switch>
			</Router>
			<Footer />
		</AuthContext.Provider>
	);
};

export default App;
