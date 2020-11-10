import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from './Context/auth';

import Loader from './Components/Loader/Loader';

const PublicRoute = ({ component: Component, ...rest }) => {
	const { state } = useContext(AuthContext);
	return (
		<Route
			{...rest}
			render={(props) => {
				return !state.isFetching ? (
					!state.isAuthenticated ? (
						<Component {...props} />
					) : (
						<Redirect to="/" />
					)
				) : (
					<Loader />
				);
			}}
		/>
	);
};

export default PublicRoute;
