import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import jwt_decode from 'jwt-decode';

let role = '';

if (localStorage.jwtToken) {
    
    const decoded = jwt_decode(localStorage.jwtToken);
    console.log("decoded data: ", decoded);
    role = decoded && decoded.data && decoded.data.role;
}

const PrivateRoute = () => (


    <Route
    render={
        props => role === 'superadmin' ? (
            <Redirect to={"/superadmin-dashboard"} />

        ) : (
            <Redirect to={"/dashboard"} />
        )
    }
    />
);

export default PrivateRoute;
