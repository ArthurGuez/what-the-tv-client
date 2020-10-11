import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';

import {AuthContext} from './Context/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { state } = useContext(AuthContext);

    if (state.isFetching) {
        return (
            <div>Loading...</div>
        )
    }
    
    return (
        <Route
            {...rest}
            render={(props) => {
                return state.isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />;
            }}
        />
    );
};

export default PrivateRoute;
